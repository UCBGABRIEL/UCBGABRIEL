/**
 * 
 * @param {Number} a um numero inteiro
 * @param {Number} b um numero inteiro
 * @return {Number} a soma entre a e b
 */

function somar(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

module.exports = {
    somar, 
    subtrair,  
    multiplicar, 
    dividir
};

