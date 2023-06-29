const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  // Obtém o nome informado e retira espaços em branco do início e final da string
  const nome = form.cracha.value.trim()

  if (!nome.includes(' ')) {
    // se o nome não (!) possuir espaços
    alert('Informe o nome completo...')
    return
  }

  const priEspaco = nome.indexOf(' ') // posição do primeiro espaço
  const ultEspaco = nome.lastIndexOf(' ')
  const cracha = `${nome.substr(0, priEspaco)} ${nome.substr(ultEspaco)}`

  resp.innerText = `Crachá: ${cracha}`
})
