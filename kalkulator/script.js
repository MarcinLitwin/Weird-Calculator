//const userInput = document.getElementById('input');
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

const ourInput = document.getElementById('input2')


function currentResultOutput(result) {
  resultOutput.textContent = result;
}

function currentInputOutput(input2) {
  ourInput.textContent = input2;
}

      
      var strInt = []
      let doLiczenia = 0;
  let input2
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
    else if (name >= "0" && name<="9"){
       input2 = name
      strInt.push(`${input2}`)
      var zmniejszone = strInt.join("")
      //strInt.toString()
      currentInputOutput(`${zmniejszone}`)
      doLiczenia = zmniejszone

    }
    else {
      return;
    }
    
  
  },
  false
);

function getUserInput(){
  return parseInt(doLiczenia);

}