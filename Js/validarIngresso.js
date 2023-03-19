/* PAGINA INGRESSOS */

var usuarioNome = document.getElementById("nome");
var labelNome = document.getElementById("label__nome");

var usuarioEmail = document.getElementById("email");
var labelEmail = document.getElementById("label__email");

let tipoIngresso = document.getElementById("tipo-ingressos");

const erroGrupo = document.querySelector(".erro__numero");

var numIngresso = document.getElementById("numero-pessoas");
var labelNumIngresso = document.getElementById("label__quantidade");

var setorEscolhido = document.getElementById("setor_desejado");

// Adicionando evento de escuta para validar o campo Nome Completo
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


function quantia() {
    if (numIngresso.value <= 0) {
        numIngresso.setAttribute('style', 'border: 2px solid red')
        labelNumIngresso.innerHTML = 'Quantidade deve ser maior que "Zero" '
    } else {
        numIngresso.setAttribute('style', 'border: 2px solid green')
        labelNumIngresso.innerHTML = 'Quantidade'
    }
}


function validar() {    
    if (tipoIngresso.options[tipoIngresso.selectedIndex].value == 'grupo' && numIngresso.value <= 4) {
        numIngresso.setAttribute('style', 'border: 2px solid red')
        erroGrupo.setAttribute('style', 'display: block')

    } else {
        numIngresso.setAttribute('style', 'border: 2px solid green')
        erroGrupo.setAttribute('style', 'display: none')
    }
}


numIngresso.addEventListener('keyup', () => {
    quantia();
    validar();
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
        quantidade: numIngresso.value,
        setor: setorEscolhido.value
    }

    dados.push(userRegistro);

    localStorage.setItem("dadosFormulario", JSON.stringify(dados));
    function carregar(){
        var nomeCliente = document.querySelector("#nome-cliente");
        var setorDoIngresso = document.querySelector("#setorCadeiras");
        nomeCliente.textContent = userRegistro.nome;
        setorDoIngresso.textContent = userRegistro.setor;
    }
   
} 


const eviaFormulario = document.getElementById("submit__btn");


eviaFormulario.addEventListener("click", () => {
    exibeNomes();
    validar();
    window.location.href = '../paginas/ingressoFinal.html';
    carregar()
})
