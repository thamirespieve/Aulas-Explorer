/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite a opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrado
    3. Sair do programa

    ----

    O programa deverá capturar o número digitada pelo usuário e mostrar o seguintes canérios:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
      Se não houver nenhum item cadastrado, mostrar a mensage:
        "Não existem itens cadastrados"
    
    Caso o usuário digite 3, a aplicação deverá ser encerrada.

 */

// ---------------WHILE
let options

let itemsList = []

// while (options != 3) {
//   options = Number(
//     prompt(`
//   Olá usuário! Digite a opção desejada

//   1. Cadastrar um item na lista
//   2. Mostrar itens cadastrado
//   3. Sair do programa`)
//   )

//   if (options == 1) {
//     let item = prompt('Qual o nome do item ?')

//     itemsList.push(item)
//   } else if (options == 2) {
//     if (itemsList.length == 0) {
//       alert('Não existem itens cadastrados')
//     } else {
//       alert(itemsList)
//     }
//   } else {
//     alert('Goof bye !!')
//   }
// }

// ---------------DO WHILE

// do {
//   options = Number(
//     prompt(`
//   Olá usuário! Digite a opção desejada

//   1. Cadastrar um item na lista
//   2. Mostrar itens cadastrado
//   3. Sair do programa
//   `)
//   )

//   if (options == 1) {
//     let item = prompt('Qual item você deseja inserir ?')

//     itemsList.push(item)
//   } else if (options == 2) {
//     if (itemsList.length == 0) alert('Não existem itens cadastrados')
//     else alert(itemsList)
//   } else {
//     alert('Good Bye!!')
//   }
// } while (options != 3)

// --------------- Switch

while (options != 3) {
  options = Number(
    prompt(`
   Olá usuário! Digite a opção desejada
  
   1. Cadastrar um item na lista
   2. Mostrar itens cadastrado
   3. Sair do programa
   `)
  )
  switch (options) {
    case 1:
      let item = prompt('Qual item você deseja inserir ?')
      itemsList.push(item)
      break
    case 2:
      if (itemsList.length == 0) alert('Não existem itens cadastrados')
      else alert(itemsList)
      break
    case 3:
      alert('Tchau')
      break
    default:
      alert('Opção inválida')
      break
  }
}
