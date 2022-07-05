// Guarda o elemento inteiro que possui ID currentNumber
var currentNumberWrapper = document.getElementById('currentNumber');
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