/* PAGINA PRINCIPAL */

const menuHamburguer = document.getElementById("hamburguer");
const menuItens = document.querySelector(".menu");

menuHamburguer.addEventListener("click", function () {
    menuItens.classList.toggle("active");
})

/* PAGINA INFORMAÇÕES */

const resp = document.querySelectorAll(".conteudo__perguntas");

for(let i = 0; i < resp.length; i++) {
    resp[i].addEventListener("click", function () {
        this.classList.toggle("aberto");
    })
}
