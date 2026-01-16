#!/bin/bash

# 🎥 STRNG Assets Generation Script
# Requires ffmpeg installed (brew install ffmpeg)

INPUT="strng_app.mp4"
OUTDIR="src/assets/screenshots"
mkdir -p "$OUTDIR"

# Usage: make_gif "00:00:01" "00:00:05" "filename"
make_gif () {
  START=$1
  END=$2
  NAME=$3
  echo "🎬 Generating GIF: $NAME..."
  ffmpeg -y -i "$INPUT" -ss "$START" -to "$END" \
    -vf "fps=12,scale=400:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    "$OUTDIR/$NAME.gif"
}

# Usage: make_screenshot "00:00:01" "filename"
make_screenshot () {
  TIME=$1
  NAME=$2
  echo "📸 Taking Screenshot: $NAME..."
  ffmpeg -y -i "$INPUT" -ss "$TIME" -vframes 1 -q:v 2 "$OUTDIR/$NAME.jpg"
}

if [ ! -f "$INPUT" ]; then
    echo "❌ Error: $INPUT not found. Please record a video and name it $INPUT"
    exit 1
fi

echo "🚀 Starting asset generation..."

# --- Example Workflow (Edit these as needed) ---
# make_gif "00:00:00" "00:00:05" "users_list"
# make_screenshot "00:00:02" "home_screen"

# Execute command if provided as arguments
if [ "$#" -gt 0 ]; then
    "$@"
else
    echo "💡 Tip: You can run individual commands like:"
    echo "   ./make_assets.sh make_gif \"00:00:00\" \"00:00:02\" \"splash\""
fi

echo "✅ Done"
