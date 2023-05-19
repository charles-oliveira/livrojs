// Entrada: Ração em kg. + consumo diário em gr.
const prompt = require('prompt-sync')()
const racao = Number(prompt('Peso da Ração (kg): '))
const consumoDiario = Number(prompt('Consumo diário (gr): '))
// Processamento: Duração da ração em dias + sobra
const gramas = racao * 1000
const racaoDias = Math.floor(gramas / consumoDiario)
const sobra = gramas % consumoDiario
// Saída: Duração em dias + a sobra
console.log(`Duração: ${racaoDias} dias`)
console.log(`Sobra: ${sobra}gr`)
