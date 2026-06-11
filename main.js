// main.js

document.addEventListener("DOMContentLoaded", () => {
    inicializarAcessibilidade();
});

function inicializarAcessibilidade() {
    configurarNavegacaoPorTeclado();
    configurarAtalhos();
    console.log("Recursos de acessibilidade carregados.");
}

function configurarNavegacaoPorTeclado() {
    const elementosFocaveis = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]'
    );

    elementosFocaveis.forEach((elemento) => {
        elemento.addEventListener("focus", () => {
            elemento.style.outline = "3px solid #005fcc";
            elemento.style.outlineOffset = "2px";
        });

        elemento.addEventListener("blur", () => {
            elemento.style.outline = "";
            elemento.style.outlineOffset = "";
        });
    });
}

function configurarAtalhos() {
    document.addEventListener("keydown", (event) => {
        // Alt + 1 → Ir para o conteúdo principal
        if (event.altKey && event.key === "1") {
            const conteudo = document.getElementById("conteudo-principal");
            if (conteudo) {
                conteudo.focus();
                conteudo.scrollIntoView({ behavior: "smooth" });
            }
        }

        // Alt + 2 → Ir para o menu
        if (event.altKey && event.key === "2") {
            const menu = document.getElementById("menu-principal");
            if (menu) {
                menu.focus();
                menu.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
}