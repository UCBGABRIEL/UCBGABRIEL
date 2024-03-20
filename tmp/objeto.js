let calculadora = {
    numeroA: 0,
    numeroB: 0,
    somar: function(){
        return this.numeroA + this.numeroB;
    }
}

calculadora.numeroA = 2;
calculadora.numeroB = 3;

 const pessoa = {
    nome: "Gabriel",
    idade: 23,
    profissao: "Programador",
    cpf: 12345678910,
    telefone: 61999999999


}


for (const key in pessoa){
    console.log(key + ' - ' + pessoa[key]);

}

let arr = [0, 1, 2, 11, 56, 60]; //PODE TER TODO TIPO DE VALOR NO ARRAY, BOOLEAN, INT ...
console.log(arr);

for (const key in arr){
    console.log(key + ' - ' + arr[key]);

}

for(let i = 0; i< arr.length; i++){
    console.log(i + ' - ' + arr[i]);
}

let matriz = [[1,2], [3,4]];

