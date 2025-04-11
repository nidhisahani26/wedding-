
  document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");

    // User interaction needed for autoplay in browser
    const enableAudio = () => {
      audio.play().catch((e) => console.log("Autoplay failed:", e));
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
  });

document.querySelector('.map-container iframe').addEventListener('click', function() {
  window.open('https://www.google.com/maps?q=St+Peter\'s+Church,+New+York', '_blank');
});
