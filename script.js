const container = document.querySelector('#container');

getGrid(16);

function getGrid(size) {
  container.innerHTML = '';
  const squareSize = 960 / size;
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', () => {
      square.style.background = 'red';
    });

    container.appendChild(square);
  }
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input;
  do {
    input = prompt("Enter grid size (maximum: 100)");
    if (input === null) {
      alert("You cancelled. Please enter a number between 1 and 100.");
    } else if (isNaN(input) || input > 100 || input < 1) {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
  } while (input === null || isNaN(input) || input < 1 || input > 100);

  console.log(`You chose: ${input}`);
  getGrid(Number(input));
});
