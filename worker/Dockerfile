# Rwendo Pipecat worker — single container that runs server.py
# and spawns bot.py subprocesses per session.

FROM python:3.12-slim

# System deps for audio (Silero VAD, ffmpeg-like ops)
RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
        ffmpeg \
        libsndfile1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Cache pip layer separately
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY bot.py    /app/bot.py
COPY server.py /app/server.py

EXPOSE 7860

CMD ["python", "server.py"]
