const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()
  const num = Number(form.numero.value)
  const resultado = num % 2 == 0 ? 'Par' : 'Ímpar'

  // código com estrutura "completa"
  //   if (num % 2 == 0) {
  //     resp.innerText = `${num} é Par.`
  //   } else {
  //     resp.innerText = `${num} é Ímpar.`
  //   }

  resp.innerText = `${num} é ${resultado}`
})
