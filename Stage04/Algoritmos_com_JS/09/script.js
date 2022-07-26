/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
  nome
  idade
  peso
  altura

  Escreva uma lista contendo o nome dos pacientes suas idades alturas e pessos

 */

let patients = [
  {
    nome: 'Maria',
    idade: 50,
    peso: 65,
    altura: 175
  },

  {
    nome: 'Felipe',
    idade: 25,
    peso: 80,
    altura: 180
  },

  {
    nome: 'Carla',
    idade: 16,
    altura: 160,
    peso: 55
  }
]

patientsList = []

/*
O for irá rodar para cada objeto de patients, 
O patiente receberá o objeto contido na lista patients
 */
for (const patient of patients) {
  patientsList.push(
    `O paciente ${patient.nome} tem ${patient.idade} anos, pesa ${patient.peso}kg e mede ${patient.altura}cm   \n`
  )
}

alert(patientsList)
