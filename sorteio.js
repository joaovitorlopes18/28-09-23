// Array de letras que você deseja usar no sorteio
var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Função para sortear uma letra aleatória
function sortearLetra() {
  var indiceAleatorio = Math.floor(Math.random() * letras.length);
  return letras[indiceAleatorio];
}

// Exemplo de uso:
var letraSorteada = sortearLetra();
console.log("Letra sorteada: " + letraSorteada);
