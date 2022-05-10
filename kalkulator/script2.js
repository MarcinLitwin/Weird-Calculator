const wynikPoczatkowy = 0;
let wynik = wynikPoczatkowy;
const logEntries = 0;
let poprzednieDzialanie = logEntries;

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const podaneLiczby = getUserInput();
  wynik = podaneLiczby + wynik;
  currentResultOutput(wynik);
  document.getElementById('input').value = '';
  poprzednieDzialanie = '+';
}

function subtract() {
  const podaneLiczby = getUserInput();
  wynik = wynik - podaneLiczby;
  currentResultOutput(wynik);
  poprzednieDzialanie = '-';
  document.getElementById('input').value = '';
}

function multiply() {
  const podaneLiczby = getUserInput();
  let czyZero = wynik;

  if (czyZero == 0) {
    wynik = podaneLiczby;
    currentResultOutput(wynik);
    poprzednieDzialanie = '*';
    document.getElementById('input').value = '';
  } else {
    wynik = podaneLiczby * wynik;
    currentResultOutput(wynik);
    poprzednieDzialanie = '*';
    document.getElementById('input').value = '';
  }
}

function divide() {
  const podaneLiczby = getUserInput();
  let czyZero = wynik;
  if (podaneLiczby == 0) {
    alert('nie mozna dzielic przez zero');
  } else if (czyZero == 0) {
    wynik = podaneLiczby;
    currentResultOutput(wynik);
    poprzednieDzialanie = '/';
    document.getElementById('input').value = '';
  } else {
    wynik = wynik / podaneLiczby;
    currentResultOutput(wynik);
    poprzednieDzialanie = '/';
    document.getElementById('input').value = '';
  }
}

function reset() {
  const nowyWynik = 0;
  wynik = nowyWynik;
  currentResultOutput(nowyWynik);
  poprzednieDzialanie = ' ';
}

function naszWynik() {
  const podaneLiczby = getUserInput();
  let dzialanie = poprzednieDzialanie;
  if (dzialanie == '+') {
    wynik = podaneLiczby + wynik;
    currentResultOutput(wynik);
  } else if (dzialanie == '-') {
    wynik = wynik - podaneLiczby;
    currentResultOutput(wynik);
  } else if (dzialanie == '*') {
    wynik = podaneLiczby * wynik;
    currentResultOutput(wynik);
  } else if (dzialanie == '/') {
    wynik = wynik / podaneLiczby;
    currentResultOutput(wynik);
  } else {
    return;
  }

  logEntries = ' ';
  document.getElementById('input').value = '';
}

wynikRownania.addEventListener('click', naszWynik);
numberAdd.addEventListener('click', add);
numberSubstract.addEventListener('click', subtract);
numberMultiply.addEventListener('click', multiply);
numberDivide.addEventListener('click', divide);
numberReset.addEventListener('click', reset);
