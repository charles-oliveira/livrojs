const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()
  const nome = form.inNome.value
  resp.innerText = `Olá, ${nome}`
})
