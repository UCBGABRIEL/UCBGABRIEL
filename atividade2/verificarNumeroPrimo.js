function verificarNumeroPrimo(numero) {

    if (numero <= 1) {

        return false;

    }

    if (numero <= 3) {

        return true;

    }

    if (numero % 2 === 0 || numero % 3 === 0) {

        return false;

    }

    let i = 5; // A variável i é inicializada com 5, que é o primeiro número primo após 3.

    while (i * i <= numero) {

        if (numero % i === 0 || numero % (i + 2) === 0) {

            return false;

        }

        i += 6; // Adicionar 6 a i a cada iteração.

    }

    return true;

}


console.log(verificarNumeroPrimo(0)); // false

console.log(verificarNumeroPrimo(1)); // false

console.log(verificarNumeroPrimo(2)); // true

console.log(verificarNumeroPrimo(3)); // true

console.log(verificarNumeroPrimo(7)); // true

console.log(verificarNumeroPrimo(83)); // true

console.log(verificarNumeroPrimo(100)); // false

console.log(verificarNumeroPrimo(991)); // true

console.log(verificarNumeroPrimo(104729)); // true

console.log(verificarNumeroPrimo(14348907)); // false
