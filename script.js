
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  if (music) {
    music.play().catch(() => {
      console.log("Autoplay blocked. Try interacting with the page first.");
    });
  }
});

document.querySelector('.map-container iframe').addEventListener('click', function() {
  window.open('https://www.google.com/maps?q=St+Peter\'s+Church,+New+York', '_blank');
});
