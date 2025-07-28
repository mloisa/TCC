//Variaveis Usuário
let nomeUsu = ""
let emailUsu = ""
let telefoneUsu = ""
let senhaUsu = ""
let fotoUsu = ""
const botaoUsu = document.getElementById("btn-usuario")

//cadastro Usuario
botaoUsu.addEventListener("click", function cadastroUsu(){
    nomeUsu = document.getElementById("nome").value
    emailUsu = document.getElementById("email").value
    telefoneUsu = document.getElementById("telefone").value
    senhaUsu = document.getElementById("senha").value
    fotoUsu = document.getElementById("foto").value
    let contadortell = telefoneUsu.length
    if (nomeUsu == "" || emailUsu == "" || senhaUsu == "") {
        alert("Dados Insuficientes!!!")
    }
    else if (contadortell == 0) {
        alert("Cadastro concluido com sucesso")
        window.location.href = "paginicial.html"
    }
    else if (contadortell != 11) {
        alert("Número Incompleto")
    }
    else {
        alert("Cadastro concluido com sucesso")
        window.location.href = "paginicial.html"
    }
})