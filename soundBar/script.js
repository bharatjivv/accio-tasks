const audios = [
  document.getElementById("audio0"),
  document.getElementById("audio1"),
  document.getElementById("audio2"),
];

function playSound(index) {
  stopSounds();
  const audio = audios[index];
  if (audio) {
    audio.play().catch(error => {
      console.error("Playback failed:", error);
      alert("Audio playback failed.");
    });
  }
}

function stopSounds() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}