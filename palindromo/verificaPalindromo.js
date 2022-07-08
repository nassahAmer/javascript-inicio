// Solução 01
function verificaPalindromo(string) {
    if(!string) return "String inexistente";

    // .split("") -> separa a string por letra
    // .reverse() -> inverte a posição das letras da string
    // .join("") -> une novamente as letras em uma única string
    return string.split("").reverse().join("") === string;
}

let verificado = verificaPalindromo("ana");
console.log(verificado);

// Solução 02
function verificaPalindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
}

console.log(verificaPalindromo2("abba"));