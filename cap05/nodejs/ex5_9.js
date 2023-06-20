const prompt = require('prompt-sync')()

const produto = prompt('Nome do produto: ')
const etiquetas = Number(prompt('Nº de Etiquetas: '))

for (let i = 1; i <= etiquetas / 2; i++) {
  console.log(`${produto.padEnd(30, '.')} ${produto.padEnd(5)}`)
}
if (etiquetas % 2 == 1) {
  console.produto
}
