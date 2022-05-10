const userInput = document.getElementById('input');
const numberAdd = document.getElementById('add');
const numberSubstract = document.getElementById('subtract');
const numberMultiply = document.getElementById('multiply');
const numberDivide = document.getElementById('divide');
const wynikRownania = document.getElementById('rownaSie');
const numberPotega = document.getElementById('potega');
const numberPotegaX = document.getElementById('potegax');
const numberPierwiastek = document.getElementById('pierwiastek')
const numberPierwiastekX = document.getElementById('pierwiastekX')

const resultOutput = document.getElementById('result');

const numberReset = document.getElementById('zerowanie');

function currentResultOutput(result) {
  resultOutput.textContent = result;
}

document.addEventListener(
  'keypress',
  (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (name == '+') {
      add();
    } else if (name == '-') {
      subtract();
    } else if (name == '/') {
      divide();
    } else if (name == '*') {
      multiply();
    } else if (name == '=') {
      naszWynik();
    } 
    else if (name == "r"){
      pierwiastkowanieX()
    }
    else if (name == "p"){
      potegowanieX()
    }
    
    else {
      return;
    }
  },
  false
);
