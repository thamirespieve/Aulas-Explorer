/*
Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
*/

alert('Faça a soma de dois números')
let numberOne = prompt('Entre como primeiro valor: ')
let numberTwo = prompt('Entre com o segundo valor: ')
let result = Number(numberOne) + Number(numberTwo)

alert(
  'O resultado da soma dos numeros, ' +
    numberOne +
    ' e ' +
    numberTwo +
    ' é: ' +
    result
)

alert(`O resultado da soma dos numeros ${numberOne} e ${numberTwo} é ${result}`)
