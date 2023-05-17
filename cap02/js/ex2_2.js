const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()
  const titulo = form.inTitulo.value
  const duracao = Number(form.inDuracao.value)

  const horas = Math.floor(duracao / 60)
  console.log(horas)
  const minutos = duracao % 60 // Exemplo: 99 % 60 = 39
  console.log(minutos)

  resp1.innerText = titulo
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s).`
})
