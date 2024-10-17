//Utils   
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//Box logic
const boxCountInput = document.querySelector('input[type="number"]');
const boxes = document.getElementById('boxes');

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;

  for (let i = 1; i <= amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.margin = '5px';
    newDiv.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(newDiv);

    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function clearInputNumber() {
  boxCountInput.value = '';
}

// LIsteners
document.querySelector('[data-create]').addEventListener('click', function (e) {
  const boxCount = parseInt(boxCountInput.value);
  if (boxCount > 1 && boxCount < 100) {
    createBoxes(boxCount);
    clearInputNumber();
  }  
});

document.querySelector('[data-destroy]').addEventListener('click', function (e) {
  destroyBoxes();
});
