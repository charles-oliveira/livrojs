const prompt = require('prompt-sync')()

const numeroParcelas = Number(prompt('Digite o número de parcelas: '))
const data = new Date()
const dia = data.getDate()
const mes = data.getMonth() + 1
const ano = data.getFullYear()

for (let i = 1; i <= numeroParcelas; i++) {
  console.log(`${i}º Parcela: ${dia}/${mes + i}/${ano}`)
}
