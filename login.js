const botaoLogin = document.getElementById("btn-login")
//login freelancer
let nomeFree = "Rodrigo"
let emailFree = "Rodrigofaria@gmail.com"
let cpfFree = "04252736215"
let telefoneFree = "31940028922"
let placaFree = "BTS 7006"
let fotoFree = ""
let senhaFree = "12345"
//login usuario 
let nomeUsu = "Cleide"
let emailUsu = "Cleidesouza@gmail.com"
let telefoneUsu = "31970705645"
let senhaUsu = "12345"
let fotoUsu = ""
//login
botaoLogin.addEventListener("click", function login(){
    let emailLogin = document.getElementById("email-login").value
    let senhaLogin = document.getElementById("senha-login").value
    if(emailLogin === emailFree && senhaLogin === senhaFree){
        alert("Login Efetuado com sucesso!!")
        window.location.href = "paginicialmotoboy.html"
    } else if(emailLogin === emailUsu && senhaLogin === senhaUsu){
        alert("Login Efetuado com sucesso!!")
        window.location.href = "paginicial.html"
    } else{
        alert("Usuario não encontrado! Tente novamente")
    }
})