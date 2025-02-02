// Função para gerar um número inteiro aleatório entre 'min' e 'max' (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const totalNumeros = 50;
  
  const numeros = [];
  
  for (let i = 0; i < totalNumeros; i++) {
    numeros.push(getRandomInt(1, 100));
  }
  
  const multiplosDe3 = [];
  const naoMultiplosDe3 = [];
  
  for (let numero of numeros) {
    if (numero % 3 === 0) {
      multiplosDe3.push(numero);
    } else {
      naoMultiplosDe3.push(numero);
    }
  }
  
  console.log("Vetor de números gerados:");
  console.log(numeros);
  console.log("\nNúmeros que são múltiplos de 3:");
  console.log(multiplosDe3);
  console.log("\nNúmeros que não são múltiplos de 3:");
  console.log(naoMultiplosDe3);
  