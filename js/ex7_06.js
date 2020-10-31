var itens = [] //Vetor global para armazenar os itens do pedido

function trocarItem() {
  var inPizza = document.querySelector("#inPizza");
  var inBebida = document.querySelector("#inBebida");

  if(rbPizza.checked) {
    inPizza.className = "exibe";
    inBebida.className = "oculta";
  }else {
    inPizza.className = "oculta";
    inBebida.className = "exibe";
  }
}

var rbPizza = document.querySelector("#rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.querySelector("#rbBebida");
rbBebida.addEventListener("change", trocarItem)

function mostrarNumSabores() {
  if(rbPizza.checked) {
    var pizza = inPizza.value;
    var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
    inDetalhes.placeholder = `Até ${num} sabores`;
  }
}

var inDetalhes = document.querySelector("#inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

// Cria função (anônima) ao evento blur (quando o campo perde o foco)
inDetalhes.addEventListener("blur", function() {
  inDetalhes.placeholder = "";
})

// Cria funcção (anônima) associada ao evento keypress
inDetalhes.addEventListener("keypress", function(tecla) {
  if(tecla.keyCode == 13) {
    adicionarItem();
  }
});

function adicionarItem() {
  var inPizza = document.querySelector("#inPizza");
  var inBebida = document.querySelector("#inBebida");
  var outPedido = document.querySelector("#outPedido");

  if(rbPizza.checked) {
    var num = inPizza.selectedIndex; // Obtém nº do item seleciondado
    var produto = inPizza.options[num].text; // Texto do item selecionado
  }else {
    var num = inBebida.selectedIndex;
    var produto = inBebida.options[num].text;
  }

  var detalhes = inDetalhes.value;
  itens.push(`${produto} (${detalhes})`);
  outPedido.textContent = itens.join("\n");
  limparCampos();
}

var btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
  rbPizza.checked = true;
  inBebida.className = "oculta";
  inPizza.className = "exibe";
  inPizza.selectedIndex = 0;
  inDetalhes.value = "";
  rbPizza.focus();
}



