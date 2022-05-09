const wynikPoczatkowy = 0
let wynik = wynikPoczatkowy

function getUserInput(){
    return parseInt(userInput.value)
}

function add (){
    const podaneLiczby = getUserInput()
    wynik = podaneLiczby + wynik
    currentResultOutput(wynik)
    document.getElementById('input').value = ''
}

function subtract (){
    const podaneLiczby = getUserInput()
    wynik = wynik - podaneLiczby
    currentResultOutput(wynik)
    document.getElementById('input').value = ''

}

function multiply (){
    const podaneLiczby = getUserInput()
    if (wynik == 0){
         wynik ++
    }
    wynik = podaneLiczby * wynik
    currentResultOutput(wynik)
    document.getElementById('input').value = ''


}

function divide (){
    const podaneLiczby = getUserInput()
    if (podaneLiczby ==0){
        alert('nie mozna dzielic przez zero')
    }
    wynik = wynik / podaneLiczby
    currentResultOutput(wynik)
    document.getElementById('input').value = ''

}

function reset(){
    const nowyWynik = 0
    wynik = nowyWynik
    currentResultOutput(nowyWynik)
}



numberAdd.addEventListener('click',add)
numberSubstract.addEventListener('click',subtract)
numberMultiply.addEventListener('click',multiply)
numberDivide.addEventListener('click',divide)
numberReset.addEventListener('click',reset)