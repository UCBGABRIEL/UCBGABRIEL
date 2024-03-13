function calcularOperacoes(){
 
const numero1 = 10; // Não altera o valor, é constante
var numero2 = 20;
let numero3 = 40;
numero3 = 60; // Por ser let pode alterar o valor assim

const totaladicao = numero1 + numero2;
const totaldividido = numero1 / numero2;
const totalmultiplicado = numero1 * numero2;
const totalsubtraido = numero1 - numero2;

console.log ('Resultado de', numero1, '+',  numero2, 'fica:', totaladicao); // 30
console.log('Resultado de', numero1, '-', numero2, 'fica:', totalsubtraido); // -10
console.log ('Resultado de', numero1, '*', numero2, 'fica:', totalmultiplicado); // 200
console.log ('Resultado de', numero1, '/', numero2, 'fica:', totaldividido); // 0.5

   
}

calcularOperacoes();