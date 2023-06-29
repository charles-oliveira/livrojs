const prompt = require('prompt-sync')() // pacote para entrada de valores

const alturaArvore = Number(
  prompt('Altura da Árvore (número de linhas): ') // lê o número de linhas (altura)
)

console.log('') // deixa uma linha em branco

// inicia repetição
for (let i = 1; i <= alturaArvore; i++) {
  const espacos = 30 + (alturaArvore - i) // calcula espaços do inicío
  console.log(' '.repeat(espacos) + '*'.repeat(i * 2)) // exibe cada linha
}

const troncoEspacos = 30 + alturaArvore - 1 // calcula espaços do tronco
console.log(' '.repeat(troncoEspacos) + '**')
