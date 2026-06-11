
// ========================================
// AGROFORTE FUTURO SUSTENTÁVEL
// main.js
// ========================================

// ELEMENTOS

const botaoAcessibilidade = document.getElementById("btn-acessibilidade");
const painelAcessibilidade = document.getElementById("painel-acessibilidade");
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");
const altoContraste = document.getElementById("alto-contraste");

// ========================================
// CONFIGURAÇÕES INICIAIS
// ========================================

let tamanhoFonte =
parseInt(localStorage.getItem("fonte")) || 100;

document.documentElement.style.fontSize =
tamanhoFonte + "%";

// CONTRASTE SALVO

if(localStorage.getItem("contraste") === "ativo"){
    document.body.classList.add("modo-contraste");
}

// ========================================
// PAINEL DE ACESSIBILIDADE
// ========================================

if(botaoAcessibilidade){

    botaoAcessibilidade.addEventListener("click", () => {

        painelAcessibilidade.classList.toggle("ativo");

    });

}

// ========================================
// AUMENTAR FONTE
// ========================================

if(aumentarFonte){

    aumentarFonte.addEventListener("click", () => {

        if(tamanhoFonte < 180){

            tamanhoFonte += 10;

            document.documentElement.style.fontSize =
            tamanhoFonte + "%";

            localStorage.setItem(
                "fonte",
                tamanhoFonte
            );

        }

    });

}

// ========================================
// DIMINUIR FONTE
// ========================================

if(diminuirFonte){

    diminuirFonte.addEventListener("click", () => {

        if(tamanhoFonte > 70){

            tamanhoFonte -= 10;

            document.documentElement.style.fontSize =
            tamanhoFonte + "%";

            localStorage.setItem(
                "fonte",
                tamanhoFonte
            );

        }

    });

}

// ========================================
// ALTO CONTRASTE
// ========================================

if(altoContraste){

    altoContraste.addEventListener("click", () => {

        document.body.classList.toggle(
            "modo-contraste"
        );

        localStorage.setItem(
            "contraste",
            document.body.classList.contains(
                "modo-contraste"
            )
            ? "ativo"
            : "desativado"
        );

    });

}

// ========================================
// FECHAR PAINEL
// ========================================

document.addEventListener("click", (e) => {

    if(
        painelAcessibilidade &&
        botaoAcessibilidade &&
        !painelAcessibilidade.contains(e.target) &&
        !botaoAcessibilidade.contains(e.target)
    ){

        painelAcessibilidade.classList.remove("ativo");

    }

});

// ========================================
// REVEAL AO ROLAR
// ========================================

const elementosReveal =
document.querySelectorAll(".reveal");

function revelarElementos(){

    elementosReveal.forEach((elemento)=>{

        const topo =
        elemento.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            elemento.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revelarElementos
);

window.addEventListener(
"load",
revelarElementos
);

// ========================================
// EFEITO 3D + PARALLAX
// ========================================

const imagemPrincipal =
document.querySelector(".img-main");

const heroGlow =
document.querySelector(".hero-glow");

document.addEventListener(
"mousemove",
(e)=>{

    // FOTO 3D

    if(imagemPrincipal){

        const eixoX =
        (window.innerWidth / 2 - e.clientX) / 35;

        const eixoY =
        (window.innerHeight / 2 - e.clientY) / 35;

        imagemPrincipal.style.transform =

        `rotateY(${eixoX}deg)
         rotateX(${-eixoY}deg)
         scale(1.02)`;

    }

    // HERO GLOW

    if(heroGlow){

        const x = e.clientX / 30;
        const y = e.clientY / 30;

        heroGlow.style.transform =
        `translate(${x}px, ${y}px)`;

    }

});

// RESET FOTO

if(imagemPrincipal){

    imagemPrincipal.addEventListener(
    "mouseleave",
    ()=>{

        imagemPrincipal.style.transform =
        "rotateY(0deg) rotateX(0deg) scale(1)";

    });

}

// ========================================
// CONTADORES
// ========================================

const numeros =
document.querySelectorAll(".stat h3");

let contadorExecutado = false;

function animarContadores(){

    if(contadorExecutado) return;

    numeros.forEach((numero)=>{

        const texto =
        numero.textContent.replace("%","");

        const valorFinal =
        parseInt(texto);

        if(isNaN(valorFinal)) return;

        let atual = 0;

        const intervalo =
        setInterval(()=>{

            atual++;

            numero.textContent =
            atual + "%";

            if(atual >= valorFinal){

                numero.textContent =
                valorFinal + "%";

                clearInterval(intervalo);

            }

        },20);

    });

    contadorExecutado = true;

}

window.addEventListener(
"scroll",
()=>{

    const secao =
    document.querySelector("#impacto");

    if(!secao) return;

    const topo =
    secao.getBoundingClientRect().top;

    if(topo < window.innerHeight - 150){

        animarContadores();

    }

});

// ========================================
// CARDS 3D
// ========================================

const cards =
document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x / rect.width - 0.5) * 20;

        const rotateX =
        (0.5 - y / rect.height) * 20;

        card.style.transform =

        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// ========================================
// MENU SUAVE
// ========================================

document
.querySelectorAll('a[href^="#"]')
.forEach((link)=>{

    link.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const destino =
        document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});

// ========================================
// FIM
// ========================================

