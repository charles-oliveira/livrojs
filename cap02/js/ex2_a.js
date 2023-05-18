const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')
const resp3 = document.querySelector('h5')

form.addEventListener('submit', e => {
  e.preventDefault()
  const medicamento = form.inMedicamento.value
  const preco = form.inPreco.value

  const promocao = Number(Math.floor(preco) * 2)
  const valDesconto = (preco % 2) * 2

  resp1.innerText = `Prmoção de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
  resp3.innerText = `Você teve um desconto de R$: ${valDesconto.toFixed(2)}`
})
