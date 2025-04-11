window.addEventListener('load', function () {
  const audio = document.querySelector('audio');
  audio.muted = false;
  audio.play();
});





document.querySelector('.map-container iframe').addEventListener('click', function() {
  window.open('https://www.google.com/maps?q=St+Peter\'s+Church,+New+York', '_blank');
});
