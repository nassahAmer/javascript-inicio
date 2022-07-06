
const item = document.getElementById("btn-adicionar");
item.addEventListener("click", adicionar);

function adicionar() {
    let item = document.getElementById("item").value;
    console.log(item);
    let lista = document.getElementById("lista").innerHTML;
    if(item != "") {
        lista = lista + "<li><input type='checkbox' id='check'><label for='check'>" + item + "</label></li>";
        document.getElementById("lista").innerHTML = lista;
    } else {
        alert("Digite o item a ser inserido na lista!");
    }
}