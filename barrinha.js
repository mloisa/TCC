var barra1 = document.getElementById("barra1");
var barra2 = document.getElementById("barra2");
var texto = document.getElementById("status_entrega");
var botao = document.getElementById("botaoprogresso");
var etapa2 = document.getElementById("etapa2")
var etapa3 = document.getElementById("etapa3")
var cor1 = document.getElementById("cor1")
var cor2 = document.getElementById("cor2")

let i = 0;

function progresso() {
    if (i === 0) {
        barra1.style.width = "100%";
        texto.textContent = "Transporte iniciado!"
        botao.textContent = "Finalizar entrega"
        etapa2.style.display = "none"
        cor1.style.display = "block"
    } else if (i === 1) {
        barra2.style.width = "100%";
        texto.textContent = "Entrega efetuada!"
        etapa3.style.display = "none"
        cor2.style.display = "block"
        botao.textContent = "Voltar à busca"
    }

    i++;
}