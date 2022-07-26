/*
    Jogo da advinhação

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas

 */
// ----------------------- Do While
let userChoose = Number(
  prompt('Advinhe o número que estou pensando? Está entre 0 e 10')
)

const randomNumber = Math.round(Math.random() * 10)

let attemps = 1

while (randomNumber != userChoose) {
  userChoose = Number(prompt('Erro, tente novamente:'))
  attemps++
}

let correctAlert = attemps > 1 ? 'tentativas' : 'tentativa'

alert(
  `Parabéns! O núemro que eu pensei foi ${randomNumber} e você advinhou o número em ${attemps} ${correctAlert}`
)
/*// ----------------------- Do While
let userNumber = Number(
  prompt('Advinhe o número que estou pensando ? Está entre 0 e 10')
)

let randomNumber = Math.random() * 10
randomNumber = randomNumber.toFixed(0)
let correct = false

let tries = 0
do {
  tries = tries + 1
  if (userNumber == randomNumber) {
    alert('Parabens! Você advinhou o número em ' + tries)
    correct = true
  } else {
    userNumber = Number(prompt('Erro, tente novamente:' + randomNumber))
  }
} while (!correct)
 */
