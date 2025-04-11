document.addEventListener("click", function playAudio() {
  const audio = document.getElementById("bg-music");
  audio.play();
  document.removeEventListener("click", playAudio);
});


document.querySelector('.map-container iframe').addEventListener('click', function() {
  window.open('https://www.google.com/maps?q=St+Peter\'s+Church,+New+York', '_blank');
});
