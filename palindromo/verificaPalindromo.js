// ATIVIDADE 1
// Solução 01
// function verificaPalindromo(string) {
//     if(!string) return "String inexistente";

//     // .split("") -> separa a string por letra
//     // .reverse() -> inverte a posição das letras da string
//     // .join("") -> une novamente as letras em uma única string
//     return string.split("").reverse().join("") === string;
// }

// let verificado = verificaPalindromo("ana");
// console.log(verificado);

// // Solução 02
// function verificaPalindromo2(string) {
//     if(!string) return "String inexistente";

//     for(let i = 0; i < string.length / 2; i++) {
//         if(string[i] !== string[string.length - 1 - i]) return false;
//     }

//     return true;
// }

// console.log(verificaPalindromo2("abba"));

// ATIVIDADE 2
function substituiPares(array) {

    if(!array || !array.length) return -1;

    for(let i = 0; i < array.length; i++){
        // console.log("array[" + i + "] = " + array[i]);
        if(array[i] === 0) {
            console.log("Você já é zero!");
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
let arr2 = [];
console.log(substituiPares(undefined));