
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function startProcess() {
  rl.question('Digite o valor da multa por dia: ', (inputMulta) => {
    try {
      const multaPorDia = parseFloat(inputMulta);
      
      if (isNaN(multaPorDia) || multaPorDia < 1.00) {
        console.log('Erro: Por favor, digite um valor válido para a multa. O valor deve ser maior ou igual a R$1,00.');
        return startProcess(); 
      }

      rl.question('Digite o número de dias de atraso: ', (inputDias) => {
        try {
          
          const diasAtraso = parseFloat(inputDias);
          
          if (isNaN(diasAtraso) || diasAtraso <= 0) {
            console.log('Erro: Por favor, digite um número válido de dias.');
            return startProcess(); 
          }

          let totalMulta = multaPorDia * diasAtraso;
          totalMulta = Math.max(totalMulta, 1.00);

          console.log(`O valor da multa para ${diasAtraso} dias de atraso é: R$${totalMulta.toFixed(2)}`);

          rl.question('Deseja realizar outro cálculo? (s/n): ', (resposta) => {
            if (resposta.trim().toLowerCase() === 's') {
              startProcess();
            } else {
              console.log('Encerrando o programa.');
              rl.close();
            }
          });
        } catch (erroDias) {
          console.error('Erro ao processar o número de dias:', erroDias);
          return startProcess(); 
        }
      });
    } catch (erroMulta) {
      console.error('Erro ao processar o valor da multa:', erroMulta);
      return startProcess(); 
    }
  });
}

startProcess();