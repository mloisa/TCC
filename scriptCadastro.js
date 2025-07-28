const botaoFree = document.getElementById("botaoFree")
//variaveis freelancer
let nomeFree = ""
let emailFree = ""
let cpfFree = ""
let telefoneFree = ""
let placaFree = ""
let fotoFree = ""
let senhaFree = ""
//Cadastro Free
botaoFree.addEventListener("click", function cadastroFree(){
    nomeFree = document.getElementById("nome").value
    emailFree = document.getElementById("email").value
    cpfFree = document.getElementById("cpf").value
    telefoneFree = document.getElementById("telefone").value
    placaFree = document.getElementById("placa").value
    fotoFree = document.getElementById("foto").value
    senhaFree = document.getElementById("senha").value
    let contadorcpf = cpfFree.length
    let contadortell = telefoneFree.length
    let contadorplaca = placaFree.length
    if (nomeFree == "" || emailFree == "" || cpfFree == "" || telefoneFree == "" || placaFree == "" || fotoFree == "" || senhaFree == "") {
        alert("Dados Insuficientes!!")
    } else if (contadorcpf != 11) {
        alert("CPF Inválido")
    } else if (contadortell != 11) {
        alert("Número Incompleto")
    } else if (contadorplaca != 8) {
        alert("Placa Incompleta, favor conferir o espaço!")
    } else {
        alert("Cadastro concluido com sucesso")
        window.location.href = "paginicialmotoboy.html"
    }
})


