const botaoAcessibilidade =
document.getElementById("btn-acessibilidade");

const painelAcessibilidade =
document.getElementById("painel-acessibilidade");

const aumentarFonte =
document.getElementById("aumentar-fonte");

const diminuirFonte =
document.getElementById("diminuir-fonte");

const altoContraste =
document.getElementById("alto-contraste");

let tamanhoFonte = 100;

/* Abrir painel */

botaoAcessibilidade.addEventListener("click", () => {

    painelAcessibilidade.classList.toggle("ativo");

});

/* Aumentar fonte */

aumentarFonte.addEventListener("click", () => {

    tamanhoFonte += 10;

    document.body.style.fontSize =
    tamanhoFonte + "%";

});

/* Diminuir fonte */

diminuirFonte.addEventListener("click", () => {

    if(tamanhoFonte > 70){

        tamanhoFonte -= 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    }

});

/* Alto contraste */

altoContraste.addEventListener("click", () => {

    document.body.classList.toggle(
        "modo-contraste"
    );

});

/* Fechar painel clicando fora */

document.addEventListener("click", (e) => {

    if(
        !painelAcessibilidade.contains(e.target) &&
        !botaoAcessibilidade.contains(e.target)
    ){
        painelAcessibilidade.classList.remove(
            "ativo"
        );
    }

});