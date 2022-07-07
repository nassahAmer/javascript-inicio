const spanResultado = document.getElementById("span-resultado");

function verificar() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let soma = parseInt(num1) + parseInt(num2);

    if(num1 == ""){
        spanResultado.innerHTML = "Digite um número";
    } else if(!isNaN(num1)) {
        if(num1 != num2) {
            if(soma < 10){
                spanResultado.innerHTML = "Os números " + num1 + " e " + num2 + " não são iguais. Sua soma é " + soma + ", que é menor que 10";
            } else {
                spanResultado.innerHTML = "Os números " + num1 + " e " + num2 + " não são iguais. Sua soma é " + soma + ", que é maior que 10";
            }
        } else if(num1 == num2) {
            if(soma < 10){
                spanResultado.innerHTML = "Os números " + num1 + " e " + num2 + " são iguais. Sua soma é " + soma + ", que é menor que 10";
            } else {
                spanResultado.innerHTML = "Os números " + num1 + " e " + num2 + " são iguais. Sua soma é " + soma + ", que é maior que 10";
            }
        }
    } else {
        spanResultado.innerHTML = "Não é número!";
    }
}



// Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.