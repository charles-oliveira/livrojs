const form = document.querySelector('form')
const resp = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()

  const dataInfracao = form.infracao.value
  console.log(dataInfracao)
  const valMulta = form.valMulta.value
  const pgtoDesconto = valMulta - valMulta * 0.2

  const data = new Date()
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()

  const prazoNoventaDias = dataInfracao + (mes + 3)
  console.log(prazoNoventaDias)

  if (dataInfracao <= prazoNoventaDias) {
    resp.innerText = `Data Limite para o Pagto com Desconto: ${dia}/${
      mes + 3
    }/${ano}`
    resp2.innerText = `Valor com Desconto R$: ${pgtoDesconto.toFixed(2)}`
  }
})
