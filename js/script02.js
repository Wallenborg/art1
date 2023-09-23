// Function to generate a random integer between min and max (inclusive of min and max)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to place a new box
function placeRandomBox() {
  const box = document.createElement("div");
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const boxSize = 10; // Size of the box (1x1 pixel)

  // Generate random positions and color for the box
  const leftPosition = getRandomInt(0, screenWidth - boxSize);
  const topPosition = getRandomInt(0, screenHeight - boxSize);
  const color = getRandomColor();

  // Random z-index between 1 and 100
  const zIndex = getRandomInt(1, 100);

  // Set the box with random properties
  box.style.position = "absolute";
  box.style.left = `${leftPosition}px`;
  box.style.top = `${topPosition}px`;
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = color;
  box.style.zIndex = zIndex;

  // Add the box to the body element
  document.body.appendChild(box);
}

// Function to continuously place new boxes every half a second
function generateRandomBoxes() {
  console.log("Generating random boxes...");
  setInterval(placeRandomBox, 500); // 500 ms = 0.5 seconds
}

// Start the program when the webpage is loaded
window.onload = generateRandomBoxes;
