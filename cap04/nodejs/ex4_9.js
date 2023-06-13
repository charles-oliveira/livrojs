const prompt = require('prompt-sync')()
const numero = Number(prompt('Número (centena): '))

// Verifica se o número é uma centena
if (numero < 100 || numero >= 1000) {
  console.log('Err... deve ser uma centena')
}

const num1 = Math.floor(numero / 100) // obtém primeiro número
const sobra = numero % 100 // O que sobra (dezena)
const num2 = Math.floor(sobra / 10) // obtém segundo número
const num3 = sobra % 10
console.log(`Número invertido: ${num3}${num2}${num1}`)
