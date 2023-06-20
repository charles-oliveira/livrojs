const form = document.querySelector('form')
const resp = document.querySelector('#outResp')

form.addEventListener('submit', e => {
  e.preventDefault()

  const chinchilasIniciais = Number(form.chinchilas.value)
  const anos = Number(form.anos.value)

  let lista = ''

  if (chinchilasIniciais < 2) {
    alert('O número de Chinchilas deve ser maior ou igual a 2 (casal).')
    return
  }

  let chinchilas = chinchilasIniciais
  for (let i = 1; i <= anos; i++) {
    lista += `${i}º Ano: ${chinchilas} Chinchilas\n`
    if (i >= 1) {
      chinchilas *= 3
    }
  }

  resp.innerText = lista
})
