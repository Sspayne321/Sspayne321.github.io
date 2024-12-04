// Map buttons to corresponding audio files
const audioMap = {
  "play-btn-home": "audio/song1.mp3",
  "play-btn-song2": "audio/song2.mp3",
  "play-btn-song3": "audio/song3.mp3",
  "play-btn-song4": "audio/song4.mp3",
};

// Create an audio element for each song
const audioElements = {};
for (const [id, src] of Object.entries(audioMap)) {
  const audio = new Audio(src);
  audioElements[id] = audio;
}

// Handle play/pause and button text toggle
function togglePlayPause(buttonId) {
  const audio = audioElements[buttonId];
  const button = document.getElementById(buttonId);

  if (audio.paused) {
    // Pause all other audio
    for (const otherAudio of Object.values(audioElements)) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
    }

    // Play selected audio and update button text
    audio.play();
    button.textContent = "Pause";
  } else {
    // Pause the current audio and update button text
    audio.pause();
    button.textContent = "Play";
  }
}
