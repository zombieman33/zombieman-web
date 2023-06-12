document.querySelector('.clear-button')
  .addEventListener('click', () => {
    clearDisplay();
  });

document.querySelector('.slash-button')
  .addEventListener('click', () => {
    appendToDisplay('/');
  });

document.querySelector('.x-button')
  .addEventListener('click', () => {
    appendToDisplay('*');
  });

document.querySelector('.dot-button')
  .addEventListener('click', () => {
    appendToDisplay('.');
  });

document.querySelector('.first-button')
  .addEventListener('click', () => {
    appendToDisplay('1');
  });

document.querySelector('.second-button')
  .addEventListener('click', () => {
    appendToDisplay('2');
  });

document.querySelector('.third-button')
  .addEventListener('click', () => {
    appendToDisplay('3');
  });

document.querySelector('.dash-button')
  .addEventListener('click', () => {
    appendToDisplay('-');
  });

document.querySelector('.fourth-button')
  .addEventListener('click', () => {
    appendToDisplay('4');
  });

document.querySelector('.fifth-button')
  .addEventListener('click', () => {
    appendToDisplay('5');
  });

document.querySelector('.sixth-button')
  .addEventListener('click', () => {
    appendToDisplay('6');
  });

document.querySelector('.plus-button')
  .addEventListener('click', () => {
    appendToDisplay('+');
  });

document.querySelector('.seventh-button')
  .addEventListener('click', () => {
    appendToDisplay('7');
  });
  
document.querySelector('.eigth-button')
  .addEventListener('click', () => {
    appendToDisplay('8');
  });
  
document.querySelector('.ninth-button')
  .addEventListener('click', () => {
    appendToDisplay('9');
  });
  
document.querySelector('.zero-button')
  .addEventListener('click', () => {
    appendToDisplay('0');
  });

document.querySelector('.button-long')
  .addEventListener('click', () => {
    clearLast();
  });

document.querySelector('.equals-button')
  .addEventListener('click', () => {
    calculate();
  });


const display = document.getElementById('display');

function appendToDisplay(value) {
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '';
}

function clearLast() {
  const currentDisplay = display.innerHTML;
  display.innerHTML = currentDisplay.slice(0, -1);
}

function calculate() {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (error) {
    display.innerHTML = 'Error';
    setTimeout(() => {
      clearDisplay();
    }, 1 * 1000);
    
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  switch (key) {
    case '0':
      appendToDisplay('0');
      break;
    case '1':
      appendToDisplay('1');
      break;
    case '2':
      appendToDisplay('2');
      break;
    case '3':
      appendToDisplay('3');
      break;
    case '4':
      appendToDisplay('4');
      break;
    case '5':
      appendToDisplay('5');
      break;
    case '6':
      appendToDisplay('6');
      break;
    case '7':
      appendToDisplay('7');
      break;
    case '8':
      appendToDisplay('8');
      break;
    case '9':
      appendToDisplay('9');
      break;
    case '+':
      appendToDisplay('+');
      break;
    case '-':
      appendToDisplay('-');
      break;
    case '*':
      appendToDisplay('*');
      break;
    case '/':
      appendToDisplay('/');
      break;
    case '.':
      appendToDisplay('.');
      break;
    case 'Enter':
      calculate();
      break;
    case 'Delete':
      clearDisplay();
      break;
    case 'Escape':
      clearDisplay();
      break;
    case 'Backspace':
      clearLast();
      break;
  }
});