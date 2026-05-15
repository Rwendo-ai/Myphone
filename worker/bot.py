"""
Rwendo Pipecat bot — runs ONE companion chat session.

Spawned by `server.py` when the Edge Function `pipecat-bot-start` calls
the /start endpoint with a session config. Joins the user's Daily room,
listens for audio, transcribes, sends to Claude, plays back via
ElevenLabs, and (for lipsync tiers) renders Sarah's face via Simli.

Flow inside one session:
  user mic --> Deepgram STT --> Claude --> ElevenLabs TTS --> [Simli avatar] --> Daily room

The bot exits cleanly when the user leaves the room.
"""

import asyncio
import os
import sys
from typing import Optional

from dotenv import load_dotenv
from loguru import logger

from pipecat.audio.vad.silero import SileroVADAnalyzer
from pipecat.frames.frames import EndFrame, LLMMessagesFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.runner import PipelineRunner
from pipecat.pipeline.task import PipelineParams, PipelineTask
from pipecat.processors.aggregators.openai_llm_context import OpenAILLMContext
from pipecat.services.anthropic.llm import AnthropicLLMService
from pipecat.services.deepgram.stt import DeepgramSTTService
from pipecat.services.elevenlabs.tts import ElevenLabsTTSService
from pipecat.transports.daily.transport import DailyParams, DailyTransport

# Optional — only loaded for lipsync tiers.
try:
    from pipecat.services.simli import SimliVideoService
    SIMLI_AVAILABLE = True
except ImportError:
    SIMLI_AVAILABLE = False

load_dotenv(dotenv_path=".env", override=False)

# ─── Session config ──────────────────────────────────────────────────────


class SessionConfig:
    """Parsed from the HTTP /start payload."""

    def __init__(
        self,
        room_url: str,
        room_token: str,
        tier: str,
        companion: dict,
        user_id: str,
    ):
        self.room_url: str = room_url
        self.room_token: str = room_token
        self.tier: str = tier  # 'voice' | 'lipsync' | 'lipsync_custom' | 'lipsync_plus'
        self.companion: dict = companion  # display_name, voice_id, system_prompt, simli_face_id
        self.user_id: str = user_id

    @property
    def use_simli(self) -> bool:
        return self.tier in ("lipsync", "lipsync_custom") and bool(
            self.companion.get("simli_face_id")
        )


# ─── Pipeline ────────────────────────────────────────────────────────────


async def run_bot(cfg: SessionConfig):
    """Spin up and run one session. Returns when the user leaves."""
    logger.info(
        f"Starting bot — tier={cfg.tier} companion={cfg.companion.get('display_name')} "
        f"user={cfg.user_id}"
    )

    # ─── Transport (Daily WebRTC) ───────────────────────────────────────
    transport = DailyTransport(
        cfg.room_url,
        cfg.room_token,
        f"Rwendo · {cfg.companion.get('display_name', 'Companion')}",
        DailyParams(
            audio_in_enabled=True,
            audio_out_enabled=True,
            camera_out_enabled=cfg.use_simli,
            camera_out_width=512,
            camera_out_height=512,
            vad_enabled=True,
            vad_analyzer=SileroVADAnalyzer(),
            transcription_enabled=False,  # we use Deepgram directly
        ),
    )

    # ─── STT (Deepgram) ─────────────────────────────────────────────────
    stt = DeepgramSTTService(
        api_key=os.environ["DEEPGRAM_API_KEY"],
        # nova-3 is the latest as of 2026-04, good accuracy + cheap
        model="nova-3",
        # English first; multilingual users land in en + accents
        language="en",
    )

    # ─── LLM (Claude) ────────────────────────────────────────────────────
    llm = AnthropicLLMService(
        api_key=os.environ["ANTHROPIC_API_KEY"],
        model=os.environ.get("ANTHROPIC_MODEL", "claude-haiku-4-5-20251001"),
    )

    system_prompt = cfg.companion.get("system_prompt") or (
        "You are a warm, attentive AI companion. Reply naturally in 1-3 "
        "sentences. The user is speaking to you — keep it conversational."
    )
    messages = [{"role": "system", "content": system_prompt}]
    context = OpenAILLMContext(messages)
    context_aggregator = llm.create_context_aggregator(context)

    # ─── TTS (ElevenLabs) ───────────────────────────────────────────────
    voice_id = cfg.companion.get("voice_id") or os.environ.get(
        "ELEVENLABS_DEFAULT_VOICE_ID"
    )
    if not voice_id:
        raise RuntimeError("No ElevenLabs voice_id available (companion or default)")

    tts = ElevenLabsTTSService(
        api_key=os.environ["ELEVENLABS_API_KEY"],
        voice_id=voice_id,
        # Streaming chunks for low latency.
        model="eleven_turbo_v2_5",
    )

    # ─── Optional avatar (Simli for lipsync tier) ───────────────────────
    avatar: Optional["SimliVideoService"] = None
    if cfg.use_simli:
        if not SIMLI_AVAILABLE:
            logger.warning("Simli requested but pipecat-ai[simli] not installed; falling back to audio only")
        else:
            face_id = cfg.companion["simli_face_id"]
            avatar = SimliVideoService(
                api_key=os.environ["SIMLI_API_KEY"],
                face_id=face_id,
                is_trinity_avatar=True,
                max_session_length=600,  # 10 min
                max_idle_time=120,
            )
            logger.info(f"Simli avatar attached face_id={face_id}")

    # ─── Pipeline ───────────────────────────────────────────────────────
    pipeline_stages = [
        transport.input(),
        stt,
        context_aggregator.user(),
        llm,
        tts,
    ]
    if avatar is not None:
        pipeline_stages.append(avatar)
    pipeline_stages.append(transport.output())
    pipeline_stages.append(context_aggregator.assistant())

    pipeline = Pipeline(pipeline_stages)

    task = PipelineTask(
        pipeline,
        params=PipelineParams(
            allow_interruptions=True,
            enable_metrics=True,
        ),
    )

    # ─── Event handlers ─────────────────────────────────────────────────
    @transport.event_handler("on_first_participant_joined")
    async def on_user_joined(transport, participant):
        await transport.capture_participant_transcription(participant["id"])
        logger.info(f"User joined: {participant['id']}")
        greeting = (
            f"Hi {participant.get('userName') or 'there'}, I'm "
            f"{cfg.companion.get('display_name', 'here')}. How are you?"
        )
        messages.append({"role": "user", "content": "Greet the user warmly."})
        await task.queue_frames([LLMMessagesFrame(messages)])

    @transport.event_handler("on_participant_left")
    async def on_user_left(transport, participant, reason):
        logger.info(f"User left ({reason}) — ending session")
        await task.queue_frame(EndFrame())

    runner = PipelineRunner()
    await runner.run(task)
    logger.info("Bot session ended cleanly")


# ─── Entry (when run directly for local CLI test) ────────────────────────


def main():
    """Local CLI: read room URL + token + companion from stdin/env for testing."""
    import json

    raw = sys.stdin.read()
    payload = json.loads(raw)
    cfg = SessionConfig(
        room_url=payload["room_url"],
        room_token=payload["room_token"],
        tier=payload["tier"],
        companion=payload["companion"],
        user_id=payload["user_id"],
    )
    asyncio.run(run_bot(cfg))


if __name__ == "__main__":
    main()
