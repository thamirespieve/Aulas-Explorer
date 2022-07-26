/*

Capturar 2 numeros e fazer as opreações matemáticas de:
  - soma,
  - subtração,
  - multiplicacção, 
  - divisão
  - resto da divisão
E para cada operação, mostrar um alerta com o resultado
 */

alert(
  'Entre com dois numeros para executar as seguintes operações matemáticas: soma, subtração, multiplicação, divisão e resto da divisão'
)

let numberOne = Number(prompt('Informe o primeiro número: '))
let numberTwo = Number(prompt('Informe o segundo número: '))
// numberOne = Number(numberOne)
// numberTwo = Number(numberTwo)
const sum = numberOne + numberTwo
const subt = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo
const potencia = numberOne ** numberTwo

alert(`A soma dos números ${numberOne} e ${numberTwo} é ${sum}`)
alert(`A subtração dos números ${numberOne} e ${numberTwo} é ${subt}`)
alert(
  'A multiplicação dos numeros ' + numberOne + ' e ' + numberTwo + ' é ' + mult
)
alert('A divisão dos números ' + numberOne + ' e ' + numberTwo + ' é ' + div)
alert('O resto da divisão é ' + rest)
alert(` ${numberOne} elevado a ${numberTwo} é ${potencia}`)
