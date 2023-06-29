const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const funcionario = form.funcionario.value
  const partes = funcionario.split(' ')

  let email = ''
  const tam = partes.length

  // percorre os itens do vetor (exceto o último)
  for (let i = 0; i < tam - 1; i++) {
    email += partes[i].at(0)
  }

  email += `${partes[tam - 1]}@empresa.com.br`
  resp.innerText = `E-mail: ${email.toLowerCase()}`
})
