(() => {
  const heartCount = 35;

  for (let i = 0; i < heartCount; i++) {
    createHeart();
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    heart.style.fontSize = 8 + Math.random() * 14 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
      createHeart();
    }, 7000);
  }
})();
