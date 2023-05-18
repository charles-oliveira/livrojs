const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()
  const produto = form.inProduto.value
  const preco = form.inPreco.value

  const promocao = preco * 3 - preco * 0.5

  resp1.innerText = `Creme Dental - Promoção: Leve 3 por R$: ${promocao.toFixed(
    2
  )}`
  resp2.innerText = `O 3º produto custa apenas R$: ${(preco * 0.5).toFixed(2)}`
})
