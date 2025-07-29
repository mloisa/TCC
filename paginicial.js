document.addEventListener("DOMContentLoaded", function pedido() {
    let sem_pedidos = document.getElementById("sem_pedidos")
    let aceito = document.getElementById("pedido")
    const botao = document.getElementById("enviar")
    let foto = document.getElementById("foto")
    botao.addEventListener("click", function pedido() {
        const endereco = document.getElementById("endereco_retirada")
        const destino = document.getElementById("endereco_destino")
        const agendarData = document.getElementById("entrega_dia")
        const agendarHora = document.getElementById("entrega_hora")
        const prazoData = document.getElementById("prazo_dia")
        const prazoHora = document.getElementById("prazo_hora")
        alert("Pedido cadastrado com sucesso!! Em espera")
        prazoHora.value = ""
        prazoData.value = ""
        agendarHora.value = ""
        agendarData.value = ""
        destino.value = ""
        endereco.value = ""
        sem_pedidos.classList.remove("displayblock")
        aceito.classList.remove("displaynone")
        aceito.classList.add("displayblock")
        sem_pedidos.classList.add("displaynone")
    })
})
