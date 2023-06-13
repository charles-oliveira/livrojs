const prompt = require('prompt-sync')()
const pessoas = Number(prompt('Informe o número de pessoas: '))
const peixes = Number(prompt('Informe a quantidade de peixes obtido: '))

let pagar
if (peixes <= pessoas) {
  pagar = pessoas * 20
} else {
  pagar = pessoas * 20 - (pessoas - peixes) * 12
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)
