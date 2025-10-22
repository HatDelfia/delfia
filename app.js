document.addEventListener("DOMContentLoaded", () => {
  const greetingBtn = document.getElementById("greetingBtn");
  const message = document.getElementById("message");
  const heartsContainer = document.getElementById("hearts-container");

  const greetings = [
    "Selamat pagi Delfiaa ❤️",
    "Semangat terus yaaa🌞",
    "Jangan makan makanan manis yaa, soalnya kamu udah manis 💕",
    "Jangan lupa sarapan yaa 🍳",
    "Sunrise kalah cantik sama kamuu ✨",
  ];

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }

  function showGreeting() {
    message.style.display = "block";
    message.textContent =
      greetings[Math.floor(Math.random() * greetings.length)];

    // Create multiple hearts
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createHeart();
      }, i * 300);
    }
  }

  greetingBtn.addEventListener("click", showGreeting);
});
