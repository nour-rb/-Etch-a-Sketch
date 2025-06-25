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
  const input = prompt("Enter grid size (maximum: 100)")
  if (input === null){
    alert("Please enter a number between 1 and 100.")
  }
})
