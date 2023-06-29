const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const mensagem = form.mensagem.value.toLowerCase().replace(/ /g, '')
  const mensagemInvertida = mensagem.toLowerCase().split('').reverse().join('')

  const resposta =
    mensagem === mensagemInvertida ? 'É um palíndromo' : 'Não é um palíndromo'

  resp.textContent = `${form.mensagem.value.toUpperCase()} ${resposta}`
})
