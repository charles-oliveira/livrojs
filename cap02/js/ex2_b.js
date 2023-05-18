const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()
  const valorMinuto = Number(form.inValor.value)
  const tempoUso = Number(form.inTempo.value)

  const tempoTotal = tempoUso / 15
  const totalPagar = Math.ceil(tempoTotal) * valorMinuto

  resp.innerText = `Valor a Pagar R$: ${totalPagar.toFixed(2)}`
})
