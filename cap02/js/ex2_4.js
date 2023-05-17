const form = document.querySelector('form')
const resp = document.querySelector('h3')
console.log(resp)

form.addEventListener('submit', e => {
  e.preventDefault()
  const quilo = Number(form.inQuilo.value)
  const consumo = Number(form.inConsumo.value)

  const valor = (quilo / 1000) * consumo
  console.log(valor)
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`
})
