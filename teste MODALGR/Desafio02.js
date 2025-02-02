const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma frase para contar as palavras: ", (frase) => {
  if (frase && frase.trim() !== "") {
    const fraseTratada = frase.trim();
    
   
    const palavras = fraseTratada.split(" ").filter(palavra => palavra !== "");
    
    console.log("Quantidade de palavras: " + palavras.length);
  } else {
    console.log("Nenhuma frase foi digitada.");
  }
  
  rl.close();
});
