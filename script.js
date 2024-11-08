// Initialize WaveSurfer
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#fff',
    progressColor: '#f00',
    cursorColor: 'transparent',
    height: 80,
});

// Load your audio file from Google Drive
wavesurfer.load('https://drive.google.com/uc?export=download&id=15NXnmjsToLBfAHM-BUuHe_i81teApXXO');

// Play/pause toggle functionality
document.getElementById('play-btn').addEventListener('click', () => {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        document.getElementById('play-btn').textContent = 'Play';
    } else {
        wavesurfer.play();
        document.getElementById('play-btn').textContent = 'Pause';
    }
});

