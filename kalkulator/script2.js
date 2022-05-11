const wynikPoczatkowy = 0;
let wynik = wynikPoczatkowy;
const logEntries = 0;
let poprzednieDzialanie = logEntries;
const czyPotega = 0;
let czyPotegaX = czyPotega;
/*function getUserInput() {
  return parseInt(userInput.value);
}
*/

function usuwanieWyniku(){
  currentInputOutput(0);
  strInt = []
}
function add() {
  const podaneLiczby = getUserInput();
  wynik = podaneLiczby + wynik;
  currentResultOutput(wynik);
  usuwanieWyniku();
    poprzednieDzialanie = '+';
}

function subtract() {
  const podaneLiczby = getUserInput();
  wynik = wynik - podaneLiczby;
  currentResultOutput(wynik);
  poprzednieDzialanie = '-';
  usuwanieWyniku()}

function multiply() {
  const podaneLiczby = getUserInput();
  let czyZero = wynik;

  if (czyZero == 0) {
    wynik = podaneLiczby;
    currentResultOutput(wynik);
    poprzednieDzialanie = '*';
    usuwanieWyniku();
    } else {
    wynik = podaneLiczby * wynik;
    currentResultOutput(wynik);
    poprzednieDzialanie = '*';
    usuwanieWyniku();  }
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
    usuwanieWyniku();
    } else {
    wynik = wynik / podaneLiczby;
    currentResultOutput(wynik);
    poprzednieDzialanie = '/';
    usuwanieWyniku();
    }
}

function potegowanie() {
  const podaneLiczby = getUserInput();
  wynik = podaneLiczby * podaneLiczby;
  currentResultOutput(wynik);
  usuwanieWyniku();
    //poprzednieDzialanie = 'potega';
}

function reset() {
  const nowyWynik = 0;
  wynik = nowyWynik;
  currentResultOutput(nowyWynik);
  poprzednieDzialanie = ' ';
}

function potegowanieX() {
  const podaneLiczby = getUserInput();
  wynik = podaneLiczby;
  currentResultOutput(wynik);
  usuwanieWyniku();
    czyPotegaX = '1';
}
function pierwiastkowanieX() {
  const podaneLiczby = getUserInput();
  wynik = podaneLiczby;
  currentResultOutput(wynik);
  usuwanieWyniku();
    czyPotegaX = '2';
}

function pierwiastkowanie() {
  const podaneLiczby = getUserInput();
  wynik = Math.sqrt(podaneLiczby);
  currentResultOutput(wynik);
  usuwanieWyniku();

}

function naszWynik() {
  const podaneLiczby = getUserInput();
  let dzialanie = poprzednieDzialanie;
  if (dzialanie == '+') {
    wynik = podaneLiczby + wynik;
    currentResultOutput(wynik);
usuwanieWyniku();
    logEntries = ' ';
    poprzednieDzialanie = ' ';
  } else if (dzialanie == '-') {
    wynik = wynik - podaneLiczby;
    currentResultOutput(wynik);
    usuwanieWyniku();
        logEntries = ' ';
        poprzednieDzialanie = ' ';
  } else if (dzialanie == '*') {
    wynik = podaneLiczby * wynik;
    currentResultOutput(wynik);
    usuwanieWyniku();
        logEntries = ' ';
  } else if (dzialanie == '/') {
    wynik = wynik / podaneLiczby;
    currentResultOutput(wynik);
    usuwanieWyniku();
    poprzednieDzialanie = ' ';
        logEntries = ' ';
  } else if (czyPotegaX == '1') {
    wynik = wynik ** podaneLiczby;
    currentResultOutput(wynik);
    usuwanieWyniku();
    poprzednieDzialanie = ' ';
    czyPotegaX = '0';

    }
  else if (czyPotegaX == '2') {
    wynik = Math.pow(wynik, 1/podaneLiczby);
    currentResultOutput(wynik);
    usuwanieWyniku();
    poprzednieDzialanie = ' ';
    czyPotegaX = '0';
    }
}

wynikRownania.addEventListener('click', naszWynik);
numberAdd.addEventListener('click', add);
numberSubstract.addEventListener('click', subtract);
numberMultiply.addEventListener('click', multiply);
numberDivide.addEventListener('click', divide);
numberReset.addEventListener('click', reset);
numberPotega.addEventListener('click', potegowanie);
numberPotegaX.addEventListener('click', potegowanieX);
numberPierwiastek.addEventListener('click',pierwiastkowanie)
numberPierwiastekX.addEventListener('click',pierwiastkowanieX)