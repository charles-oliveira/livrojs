const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const numero = form.numero.value
  let estrelas = ''
  for (let i = 1; i <= numero; i++) {
    // na posição ímpar do i: '★'
    if (i % 2 == 1) {
      estrelas += '★'
    } else {
      estrelas += '-'
    }
  }
  resp.innerText = estrelas
})
