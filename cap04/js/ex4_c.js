const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()

  const valor = form.valor.value

  let minutos
  let troco
  if (valor >= 1 && valor < 1.75) {
    minutos = 30
    troco = valor - 1
  } else if (valor >= 1.75 && valor < 3) {
    minutos = 60
    troco = valor - 1.75
  } else if (valor >= 3) {
    minutos = 120
    troco = valor - 3
  } else {
    alert('O valor é insuficiente!')
  }
  resp1.innerText = `Tempo: ${minutos} min`
  resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
})
