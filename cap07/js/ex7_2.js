const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const fruta = form.fruta.value.toUpperCase() // capta o conteúdo do campo em maisculas
  let resposta = ''

  for (const letra of fruta) {
    if (letra == fruta.at(0)) {
      resposta += fruta.at(0)
    } else {
      resposta += ' _ '
    }
  }

  resp.innerText = resposta
  form.fruta.value = '*'.repeat(fruta.length)
})
