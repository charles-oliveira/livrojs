const form = document.querySelector('form')
// const resp = document.querySelector('h3')

const TAXA_MULTA = 2 / 100 // multa por atraso
const TAXA_JUROS = 0.33 / 100 // juros por dia de atraso

form.addEventListener('submit', e => {
  e.preventDefault()

  const dataVencimento = form.dataVencimento.value
  const valor = Number(form.valorConta.value)

  const hoje = new Date()
  const vencimento = new Date()

  const partes = dataVencimento.split('-') // data vem no formato aaaa-mm-dd
  vencimento.setDate(Number(partes[2])) // capta o dia do vencimento
  vencimento.setMonth(Number(partes[1]) - 1)
  vencimento.setFullYear(Number(partes[0]))

  const atraso = hoje - vencimento // calcula a diferença de dias entre datas (em ms)
  let multa = 0
  let juros = 0

  if (atraso > 0) {
    const dias = atraso / 86400000
    multa = valor * TAXA_MULTA // calcula multa juros
    juros = valor * TAXA_JUROS * dias
  }

  const total = valor + multa + juros // calcula o total

  form.valorMulta.value = multa.toFixed(2)
  form.valorJuros.value = juros.toFixed(2)
  form.valorPagar.value = total.toFixed(2)
})
