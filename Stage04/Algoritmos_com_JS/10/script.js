/*
 Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima 

 "Paciente X possui o IMC de: Y"

 Onde X é o nome do paciente de Y é o IMC desse paciente

 Crie uma função para fazer o cálculo de IMC

 */

let patients = [
  {
    name: 'Maria',
    age: 50,
    weight: 60,
    height: 160
  },

  {
    name: 'Marcos',
    age: 35,
    weight: 80,
    height: 165
  },

  {
    name: 'João',
    age: 25,
    weight: 90,
    height: 180
  }
]

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function printIMC(patient) {
  return ` Paciente ${patient.name} possui o IMC de
  ${calcIMC(patient.weight, patient.height)}`
}

for (const patient of patients) {
  alert(printIMC(patient))
}
