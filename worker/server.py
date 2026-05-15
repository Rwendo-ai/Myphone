"""
Rwendo Pipecat bot server — the HTTP endpoint that the Edge Function
`pipecat-bot-start` POSTs to in order to spawn a session bot.

Flow:
  1. RN client tells the Edge Function "I want to chat with Sarah, lipsync tier"
  2. Edge Function authenticates the user, fetches Sarah's config from Supabase,
     mints a Daily room + tokens, then POSTs here with the session config
  3. This server spawns bot.py as a subprocess for that one session
  4. Bot joins the room, runs the conversation, exits when user leaves
  5. (RN client meanwhile has joined the same Daily room with its own token)

We use subprocess-per-session (not asyncio.create_task) because:
  - clean process isolation (one buggy session can't crash other sessions)
  - easy crash recovery (subprocess exits = session gone, no resource leak)
  - simple horizontal scaling (run more server.py instances)

For production: put this behind nginx or Caddy with TLS. For local dev
during testing: expose via `cloudflared` or `ngrok` so the Supabase
Edge Function can reach it.
"""

import asyncio
import json
import os
import subprocess
import sys
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Header
from loguru import logger
from pydantic import BaseModel
from supabase import Client, create_client

load_dotenv(dotenv_path=".env", override=False)

# ─── Shared Supabase client (companion lookups + auth verification) ──────

supabase: Client = create_client(
    os.environ["SUPABASE_URL"],
    os.environ["SUPABASE_SERVICE_ROLE_KEY"],
)

# ─── FastAPI ─────────────────────────────────────────────────────────────

app = FastAPI(title="Rwendo Pipecat bot server")


class StartRequest(BaseModel):
    """Posted by the `pipecat-bot-start` Edge Function."""

    tier: str  # 'voice' | 'lipsync' | 'lipsync_custom' | 'lipsync_plus'
    companion_id: str
    source: str  # 'archetype' | 'custom'
    user_id: str
    room_url: str
    room_token: str  # bot's token (with mod permissions)


class StartResponse(BaseModel):
    status: str
    session_id: str


async def _load_companion(companion_id: str, source: str) -> dict:
    """Pull the companion's display info + face/voice IDs from Supabase."""
    if source == "archetype":
        result = (
            supabase.table("companion_archetypes")
            .select("name, voice_id, system_prompt, simli_face_id, image_url")
            .eq("id", companion_id)
            .eq("is_active", True)
            .maybe_single()
            .execute()
        )
        if not result.data:
            raise HTTPException(404, f"archetype not found: {companion_id}")
        return {
            "display_name": result.data["name"] or "Companion",
            "voice_id": result.data.get("voice_id"),
            "system_prompt": result.data.get("system_prompt"),
            "simli_face_id": result.data.get("simli_face_id"),
            "image_url": result.data.get("image_url"),
        }

    result = (
        supabase.table("custom_companions")
        .select(
            "name, voice_id, system_prompt, simli_face_id, avatar_image_url, status"
        )
        .eq("id", companion_id)
        .maybe_single()
        .execute()
    )
    if not result.data:
        raise HTTPException(404, f"custom companion not found: {companion_id}")
    if result.data.get("status") != "paid":
        raise HTTPException(402, "custom companion not paid yet")
    return {
        "display_name": result.data["name"] or "Companion",
        "voice_id": result.data.get("voice_id"),
        "system_prompt": result.data.get("system_prompt"),
        "simli_face_id": result.data.get("simli_face_id"),
        "image_url": result.data.get("avatar_image_url"),
    }


@app.post("/start", response_model=StartResponse)
async def start_session(
    req: StartRequest,
    authorization: Optional[str] = Header(None),
):
    """Spawn a bot subprocess for the given session."""
    # Trust the Edge Function as the auth boundary — it has already
    # verified the user JWT. We just look for a shared secret here so
    # random internet traffic can't trigger sessions.
    expected = os.environ.get("BOT_SHARED_SECRET")
    if expected and authorization != f"Bearer {expected}":
        raise HTTPException(401, "unauthorized")

    companion = await _load_companion(req.companion_id, req.source)

    payload = {
        "room_url": req.room_url,
        "room_token": req.room_token,
        "tier": req.tier,
        "companion": companion,
        "user_id": req.user_id,
    }

    # Spawn bot.py as a subprocess. It reads the payload from stdin and runs.
    bot_path = Path(__file__).parent / "bot.py"
    process = subprocess.Popen(
        [sys.executable, str(bot_path)],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        # On Windows, prevent the subprocess from blocking on parent close
        start_new_session=True,
    )
    if process.stdin is None:
        raise HTTPException(500, "could not spawn bot")
    process.stdin.write(json.dumps(payload).encode())
    process.stdin.close()

    session_id = f"bot-{process.pid}"
    logger.info(f"Spawned bot pid={process.pid} for companion={companion['display_name']}")
    return StartResponse(status="started", session_id=session_id)


@app.get("/health")
async def health():
    return {"status": "ok"}


# ─── Local entry ─────────────────────────────────────────────────────────


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("BOT_PORT", 7860))
    uvicorn.run("server:app", host="0.0.0.0", port=port, log_level="info")
