const jeden = document.getElementById('one')
const dwa = document.getElementById('two')
const trzy = document.getElementById('three')
const cztery = document.getElementById('four')
const piec = document.getElementById('five')
const szesc = document.getElementById('six')
const siedem = document.getElementById('seven')
const osiem = document.getElementById('eight')
const dziewiec = document.getElementById('nine')
const zero = document.getElementById('zero')

function wstawienieLiczby(){
          strInt.push(`${input2}`)
          var zmniejszone = strInt.join("")
          //strInt.toString()
          currentInputOutput(`${zmniejszone}`)
          doLiczenia = zmniejszone
    
}
function jedenn (){
    input2 = 1
      wstawienieLiczby()
}
function dwaa(){
    input2 = 2
    wstawienieLiczby()
}
function trzyy(){
    input2 = 3
    wstawienieLiczby()
}
function czteryy(){
    input2 = 4
    wstawienieLiczby()
}
function piecc(){
    input2 = 5
    wstawienieLiczby()
}
function szescc(){
    input2 = 6
    wstawienieLiczby()
}
function siedemm(){
    input2 = 7
    wstawienieLiczby()
}
function osiemm(){
    input2 = 8
    wstawienieLiczby()
}
function dziewiecc(){
    input2 = 9
    wstawienieLiczby()
}
function zeroo(){
    input2 = 0
    wstawienieLiczby()
}





jeden.addEventListener('click',jedenn)
dwa.addEventListener('click',dwaa)
trzy.addEventListener('click',trzyy)
cztery.addEventListener('click',czteryy)
piec.addEventListener('click',piecc)
szesc.addEventListener('click',szescc)
siedem.addEventListener('click',siedemm)
osiem.addEventListener('click',osiemm)
dziewiec.addEventListener('click',dziewiecc)
zero.addEventListener('click',zeroo)
