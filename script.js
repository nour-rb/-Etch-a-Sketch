const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  container.appendChild(square);
  square.classList.add('square');
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.background = 'red';
  });
});

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input;
  do {
    input = prompt("Enter grid size (maximum: 100)");
    if (input === null){
    alert("You cancelled. Please enter a number between 1 and 100.")
  } else if (isNaN(input) || input > 100 || input < 1){
    alert("Invalid input. Please enter a number between 1 and 100.");
  }} while (input === null || isNaN(input) || input < 1 || input > 100);

  console.log(`You chose: ${input}`);
})
