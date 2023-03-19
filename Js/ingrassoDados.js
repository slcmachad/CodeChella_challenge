var dads = JSON.parse(localStorage.getItem("dadosFormulario"));

var nomeCliente = document.querySelector("#nome-cliente");
var tipodeIngresso = document.querySelector("#tipoIngresso");
var localCadeiras = document.querySelector("#setorCadeiras");

if (dads && dads.length > 0) {
  const ultimoRegistro = dads.pop();
  nomeCliente.textContent = ultimoRegistro.nome;
  tipodeIngresso.textContent = ultimoRegistro.tipo;
  localCadeiras.textContent = ultimoRegistro.setor;
}