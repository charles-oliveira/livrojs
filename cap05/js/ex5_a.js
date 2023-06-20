const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const fruta = form.fruta.value
  const num = form.numero.value

  let lista = ''
  for (let i = 1; i <= num; i++) {
    lista += fruta
    if (i < num) {
      lista += ' * '
    }
  }
  resp.innerText = lista
})
