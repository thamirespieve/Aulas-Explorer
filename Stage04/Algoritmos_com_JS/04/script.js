/*
  Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno.

  A media positiva é maior igual a 6
  Se o aluno passou no bimestre, dar os parabéns

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na provar de recuperação

  Em ambos os casos, mostre uma mensagem com o nome do aluno e anota

 */

const name = prompt('Qual é o seu nome ?')

let firstGrade = Number(prompt('Informe sua primeira nota: '))
let secondGrade = Number(prompt('Informe sua segunda nota: '))
let thirdGrade = Number(prompt('Informe sua terceira nota: '))

let mean = (firstGrade + secondGrade + thirdGrade) / 3

mean = mean.toFixed(2)

if (mean >= 6) {
  alert(` Parabéns ${name} você passou !!! \n Sua média foi ${mean}`)
} else {
  alert(
    name + ' estude para sua prova de recuperação! Sua média foi de: ' + mean
  )
}
