let tipoIngresso = document.getElementById("tipo-ingresso")

function comprar() {
    let quantidade = parseInt(document.getElementById("qtd").value)
    let pista = document.getElementById("qtd-pista")
    let cadeiraSuperior = document.getElementById("qtd-superior")
    let cadeiraInferior = document.getElementById("qtd-inferior")
    
    if(tipoIngresso.value === "pista") {
        comprarIngresso(pista, quantidade)
    }
    
    if(tipoIngresso.value === "superior") {
        comprarIngresso(cadeiraSuperior, quantidade)
    }

    if(tipoIngresso.value === "inferior") {
        comprarIngresso(cadeiraInferior, quantidade)
    }
}

function comprarIngresso(tipo, qtd) {
    let qtdIngresso =  parseInt(tipo.textContent);
    let comprarBt = document.getElementById("button");
    qtdIngresso = qtdIngresso - qtd;
    tipo.textContent = qtdIngresso;

    if(qtdIngresso == 0) {
        comprarBt.setAttribute("disabled", "true");
    }

    if(qtdIngresso < qtd) {
        if(tipo.textContent.includes(`pipi`)) {
            comprarBt.setAttribute("disabled", "true");
        } else {
            comprarBt.removeAttribute("disabled", "true");
        }
        tipo.innerHTML = `pipi`;
    }

    if(isNaN(qtd) || isNaN(qtdIngresso)) {
        tipo.innerHTML = `bobão`
    }


}



document.addEventListener("keypress", function(evento) {
    if(evento.key === "Enter") {
        comprar()
    }
})



