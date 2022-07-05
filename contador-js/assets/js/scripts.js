// Guarda o elemento inteiro que possui ID currentNumber
var currentNumberWrapper = document.getElementById('currentNumber1');
// Variável com valor que será modificado no innerHTML
var currentNumber = 0;

// Função incremento
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// Função decremento 
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// Usando addEventListener
const element1 = document.getElementById("aumentar");
element1.addEventListener("click", aumentar);

const element2 = document.getElementById("diminuir");
element2.addEventListener("click", diminuir);

var cont = 0;

function aumentar() {
    cont = cont + 1;
    if(cont >=0 ){
        document.getElementById("currentNumber2").style.color = "black";
        document.getElementById("currentNumber2").innerHTML = cont;
    } else {
        document.getElementById("currentNumber2").innerHTML = cont;
    }
}

function diminuir() {
    cont = cont - 1;
    if(cont < 0){
        document.getElementById("currentNumber2").style.color = "red";
        document.getElementById("currentNumber2").innerHTML = cont;
    } else {
        document.getElementById("currentNumber2").innerHTML = cont;
    }
}