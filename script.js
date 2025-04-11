window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  // autoplay will work only after user interacts anywhere on the page
  const enableAutoplay = () => {
    audio.play();
    document.removeEventListener("click", enableAutoplay);
  };

  document.addEventListener("click", enableAutoplay);
});

document.querySelector('.map-container iframe').addEventListener('click', function() {
  window.open('https://www.google.com/maps?q=St+Peter\'s+Church,+New+York', '_blank');
});
