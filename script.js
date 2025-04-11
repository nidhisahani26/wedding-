const overlay = document.getElementById("overlay");
const btn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  overlay.style.display = "none";
  music.play();
});

document.querySelector('.map-container iframe').addEventListener('click', function() {
  window.open('https://www.google.com/maps?q=St+Peter\'s+Church,+New+York', '_blank');
});
