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


/* PAGINA INGRESSOS */
var usuarioNome = document.getElementById("nome");
var labelNome = document.getElementById("label__nome");

var usuarioEmail = document.getElementById("email");
var labelEmail = document.getElementById("label__email");

let tipoIngresso = document.getElementById("tipo-ingressos");
/* let valorIngresso = tipoIngresso.options[tipoIngresso.selectedIndex].value; */

const erroGrupo = document.querySelector(".erro__numero");

var numIngresso = document.getElementById("numero-pessoas");
var labelNumIngresso = document.getElementById("label__quantidade")

usuarioNome.addEventListener('keyup', () => {
    if (usuarioNome.value.length < 3) {
        usuarioNome.setAttribute('style', 'border: 2px solid red')
        labelNome.innerHTML = 'Nome Completo: * minimo 3 caracteres '
    } else {
        usuarioNome.setAttribute('style', 'border: 2px solid green')
        labelNome.innerHTML = 'Nome Completo:'
    }
})

usuarioEmail.addEventListener('keyup', () => {
    if (!usuarioEmail.value.match(/^[A-Za-z\._\-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        usuarioEmail.setAttribute('style', 'border: 2px solid red')
        labelEmail.innerHTML = 'Email inválido '
    } else {
        usuarioEmail.setAttribute('style', 'border: 2px solid green')
        labelEmail.innerHTML = 'Email:'
    }
})

function validar() {
    if (numIngresso.value <= 0) {
        numIngresso.setAttribute('style', 'border: 2px solid red')
        labelNumIngresso.innerHTML = 'Quantidade deve ser maior que "Zero" '
    } else {
        numIngresso.setAttribute('style', 'border: 2px solid green')
        labelNumIngresso.innerHTML = 'Quantidade'
    }
    
    if (tipoIngresso.options[tipoIngresso.selectedIndex].value == 'grupo' && numIngresso.value <= 4) {
        numIngresso.setAttribute('style', 'border: 2px solid red')
        erroGrupo.setAttribute('style', 'display: block')

    } else {
        numIngresso.setAttribute('style', 'border: 2px solid green')
        erroGrupo.setAttribute('style', 'display: none')
    }
}

numIngresso.addEventListener('focusout', () => {
    validar()
})

tipoIngresso.addEventListener('focusout', () => {
    validar()
})





/* localStorage section */
function exibeNomes() {

    var dados = JSON.parse(localStorage.getItem("dadosFormulario"));

    if(dados == null) {
        localStorage.setItem("dadosFormulario", "[]");
        dados = [];
    }

    var userRegistro = {
        nome: usuarioNome.value,
        email: usuarioEmail.value,
        tipo: tipoIngresso.value,
        quantidade: numIngresso.value
    }

    dados.push(userRegistro);

    localStorage.setItem("dadosFormulario", JSON.stringify(dados));
}


const eviaFormulario = document.getElementById("submit__btn");

eviaFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    exibeNomes();
})
