const prompt = require('prompt-sync')()

const formula = prompt('Digite uma expressão matemática: ')

let abre = 0
let fecha = 0

for (simbolo of formula) {
  if (simbolo == '(') {
    abre++
  } else if (simbolo == ')') {
    fecha++
  }
  if (fecha > abre) {
    console.log(`A quantidade de "(" não pode ser maior do que ")"`)
    break
  }
}

if (abre == fecha) {
  console.log('Ok! A fórmula está correta! (em relação ao uso dos parênteses)')
} else {
  console.log('Erro... Formula Incorreta!')
}
