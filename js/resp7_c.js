function trocarConv() {
  if(rdSim.checked) {
    inConv.className = "exibe";
  }else {
    inConv.className = "oculta";
  }
}

var rdSim = document.querySelector("#rdSim");
rdSim.addEventListener("change", trocarConv);

var rdNao = document.querySelector("#rdNao");
rdNao.addEventListener("change", trocarConv);

function calcularDesconto() {
  var inValor = document.querySelector("#inValor");
  var valor = Number(inValor.value);

  if(valor == "" || isNaN(valor)) {
    alert("Preencha o campo corretamente.");
    inValor.focus();
    return;    
  }

  if(rdSim.checked) {
    var desc = (conv.value == "amigoAnimal") ? 0.2 : (conv.value == "saudeAnimal") ? 0.5 : "";    
  }else {
    var desc = 0.1;    
  }
  
  desc *= valor;
  valor -= desc;

  document.querySelector("#outDesc").textContent = `Desconto: R$ ${desc.toFixed(2)}`;
  document.querySelector("#outTotal").textContent = `A pagar: R$ ${valor.toFixed(2)}`;

}

var btCalc = document.querySelector("#btCalc");
btCalc.addEventListener("click", calcularDesconto);

//================================================================
// Resposta do livro

// function calcularVacina() {
//   var inValor = document.getElementById("inValor");
//   var selConvenio = document.getElementById("selConvenio");
//   var outDesconto = document.getElementById("outDesconto");
//   var outPagar = document.getElementById("outPagar");

//   var valor = Number(inValor.value);

//   if (valor == 0 || isNaN(valor)) {
//     alert("Informe o valor corretamente");
//     inValor.focus();
//     return;
//   }

//   var desconto;

//   if (rbSim.checked) {
//     if (selConvenio.value == "amigo") {
//       desconto = calcularDesconto(valor, 20);
//     } else {
//       desconto = calcularDesconto(valor, 50);
//     }
//   } else {
//     desconto = calcularDesconto(valor, 10);
//   }

//   outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2);
//   outPagar.textContent = "A Pagar R$: " + (valor-desconto).toFixed(2);
// }
// var btCalcular = document.getElementById("btCalcular");
// btCalcular.addEventListener("click", calcularVacina);

// function calcularDesconto(valor, taxa) {
//   return valor * (taxa/100);
// }

// var rbSim = document.getElementById("rbSim");
// rbSim.addEventListener("change", function() {
//   var pConvenio = document.getElementById("pConvenio");
//   pConvenio.className = "exibeLinha";                     // exibe o parágrafo em uma linha (display: block)
// });

// var rbNao = document.getElementById("rbNao");
// rbNao.addEventListener("change", function() {
//   var pConvenio = document.getElementById("pConvenio");
//   pConvenio.className = "oculta";
// });
