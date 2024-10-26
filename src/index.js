function createFlower() {
  const flower = document.createElement("div");
  flower.innerHTML = "🌸";
  flower.className = "flower";

  // Random initial position on the X axis
  flower.style.left = Math.random() * window.innerWidth + "px";

  // Random size
  const size = 15 + Math.random() * 15;
  flower.style.fontSize = size + "px";

  document.getElementById("flower-container").appendChild(flower);

  // Remove flower after animation
  setTimeout(() => {
    flower.remove();
  }, 10000);
}

// Create flowers every so often
function startFlowers() {
  setInterval(createFlower, 300); // Creates a new flower every 300ms

  // Create some initial flowers
  for (let i = 0; i < 15; i++) {
    createFlower();
  }
}

// Start effect when page loads
window.onload = startFlowers;

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tomba dice alla rosa",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
