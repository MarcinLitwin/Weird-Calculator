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
  poprzednieDzialanie = "+"
}

function subtract() {
  const podaneLiczby = getUserInput();
  wynik = wynik - podaneLiczby;
  currentResultOutput(wynik);
  poprzednieDzialanie = "-"
  document.getElementById('input').value = '';
}

function multiply() {
  const podaneLiczby = getUserInput();
  if (wynik == 0) {
    wynik++;
  }
  wynik = podaneLiczby * wynik;
  currentResultOutput(wynik);
  poprzednieDzialanie = "*"
  document.getElementById('input').value = '';
}

function divide() {
  const podaneLiczby = getUserInput();
  wynik = podaneLiczby;
  currentResultOutput(wynik);
  poprzednieDzialanie = "/"
  document.getElementById('input').value = '';
}

function reset() {
  const nowyWynik = 0;
  wynik = nowyWynik;
  currentResultOutput(nowyWynik);
  poprzednieDzialanie = " "
}

function naszWynik(){
    const podaneLiczby = getUserInput();
    
    if (poprzednieDzialanie == "+"){
        wynik = podaneLiczby + wynik;
        currentResultOutput(wynik);
    }
    else if (poprzednieDzialanie== "-"){
            wynik = wynik - podaneLiczby;
            currentResultOutput(wynik);
        }
        else if (poprzednieDzialanie== "*"){
                wynik = podaneLiczby * wynik;
                currentResultOutput(wynik);
        
            }
          else if (poprzednieDzialanie== "/"){
                if (podaneLiczby == 0) {
                  alert('nie mozna dzielic przez zero');
                }
                wynik = wynik / podaneLiczby;
                currentResultOutput(wynik);
            }
            else{
                return
            }
          
        
    

   logEntries = " "
    document.getElementById('input').value = '';
}


function puste(){
    const podaneLiczby = getUserInput();
    if (podaneLiczby==" "){
        podaneLiczby = wynik
    }
}



wynikRownania.addEventListener('click',naszWynik)
numberAdd.addEventListener('click', add);
numberSubstract.addEventListener('click', subtract);
numberMultiply.addEventListener('click', multiply);
numberDivide.addEventListener('click', divide);
numberReset.addEventListener('click', reset);
