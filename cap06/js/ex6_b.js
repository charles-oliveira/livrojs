const form = document.querySelector('form')
const resp = document.querySelector('h3')
const resp2 = document.querySelector('h4')

const numeros = []

form.addEventListener('submit', e => {
  e.preventDefault()

  const numero = Number(form.numero.value)
  numeros.push(numero)

  form.numero.value = ''
  form.numero.focus()

  resp2.innerHTML = `Números: ${numeros.join(', ')}`
})

form.btnOrdem.addEventListener('click', e => {
  e.preventDefault()

  const numOrdenados = [...numeros].sort((a, b) => a - b)
  const numerosString = numeros.join('')
  console.log(numerosString)
  const numOrdenadosString = numOrdenados.join('')
  console.log(numOrdenadosString)

  if (numerosString !== numOrdenadosString) {
    resp.innerText = `Números: ${numeros.join(', ')}`
    resp2.innerText = `Atenção... Números não estão ordenados!`
  } else {
    resp.innerText = `Números: ${numOrdenados.join(', ')}`
    resp2.innerText = `Números ordenados!`
  }
})
