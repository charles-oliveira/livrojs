// Entradas:  salário  e tempo que o func. trab. na empresa
const prompt = require('prompt-sync')()
const salario = Number(prompt('Salário R$: '))
const tempo = Number(prompt('Tempo (anos): '))
// Processamento: a cada quatro anos de trabalho, 1 quadriênio.
const quadrienio = Math.floor(tempo / 4)
const acrescimo = (salario * quadrienio) / 100
const valorTotalAno = acrescimo * 12
// Saída: informar quantidade de quadriênios que o func. tem + salário c/ acréscimo
console.log(`Quadriênio(s): ${quadrienio}`)
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)
console.log(
  `Isso significa um aumento anual no seu orçamento de R$: ${valorTotalAno.toFixed(
    2
  )}`
)
