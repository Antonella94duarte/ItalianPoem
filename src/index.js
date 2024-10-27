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

function displayPoem(response) {
  console.log("entro aqui");
  console.log(response.data);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "eaf3cd516tefa3421cb01712o34b3a18";
  let prompt =
    "You are an expert in romantic poems and love writing short poems. Your mission is to generate a 4-5 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title in the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";
  let context = `User instructions: Generate a Italian poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

// Start effect when page loads
window.onload = startFlowers;
