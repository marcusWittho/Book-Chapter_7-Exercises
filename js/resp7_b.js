function validarNome() {
  var inNome = document.querySelector("input#inNome");
  var nome = inNome.value;

  if(nome == "" || nome.indexOf(" ") == -1) {
    alert("Preencha correteamente o campo.");
    inNome.focus();
    return;
  }

  document.querySelector("pre#outSenha").textContent = `${obterSobrenome(nome)}${contarVogais(nome)}`;
}

var btGerar = document.querySelector("input#btGerar");
btGerar.addEventListener("click", validarNome);

function obterSobrenome(nome) {
  var partes = nome.split(" ");
  var tam = partes.length;
  var ultNome = partes[tam -1];
  return ultNome;
}

function contarVogais(nome) {
  var vogais = ["a", "e", "i", "o", "u", "é", "ó", "ã"];
  var nomeMin = nome.toLowerCase();
  var v = 0;
  var cont = 0;
  for(let i = 0; i < nomeMin.length; i++) {
    for(let j = 0; j < vogais.length; j++) {
      if(nomeMin.charAt(i) == vogais[j]) {
        cont += 1;
      }
    }
  }
  return `0${cont}`;
}

inNome.addEventListener("keypress", function(tecla) {
  return (tecla.keyCode == 13 ? validarNome() : "");
})
//---------------------------------------------------------------------------------

// Resposta do Livro
/* function gerarSenha() {
  var inAluno = document.getElementById("inAluno");
  var outSenha = document.getElementById("outSenha");

  var aluno = inAluno.value;

  // o retorno de validarNome é utilizado no if
  if (aluno == "" || !validarNome(aluno)) {
    alert("Informe o nome completo do aluno");
    inAluno.focus();
    return;
  }

  // o retorno das funções é utilizado na exibição da resposta
  outSenha.textContent = "Senha Inicial: " + obterSobrenome(aluno) + contarVogais(aluno);
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarSenha);

function validarNome(nome) {
  // se houver espaço no nome...
  if (nome.indexOf(" ") >= 1) {
    return true;                   // ... retorna true
  } else {
    return false;
  }
}

function obterSobrenome(nome) {
  var ultimoEspaco = nome.lastIndexOf(" ");
  return nome.substr(ultimoEspaco + 1).toLowerCase();
}

function contarVogais(nome) {
  var num = 0;
  var letra;
  for (var i = 0; i < nome.length; i++) {
    letra = nome.charAt(i).toUpperCase();
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
      num++;
    }
  }
  return num < 10 ? "0" + num : num;
}

// outra forma de programar a função contarVogais()
function contarVogais2(nome) {
  var num = 0;
  var vogais = "AEIOU";
  var letra;
  for (var i = 0; i < nome.length; i++) {
    letra = nome.charAt(i).toUpperCase();
    if (vogais.indexOf(letra) >= 0) {
      num++;
    }
  }
  return num < 10 ? "0" + num : num;
} */