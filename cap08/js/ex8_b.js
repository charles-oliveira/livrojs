const form = document.querySelector('form')
const resp = document.querySelector('h3')

const validarNome = nome => {
  if (
    nome.includes('a') ||
    nome.includes('e') ||
    nome.includes('i') ||
    nome.includes('o') ||
    nome.includes('u')
  ) {
    return true
  } else {
    return false
  }
}

const obterSobrenome = nome => {
  const nomes = nome.split(' ')

  let ultimoSobrenome = ''
  for (const sobrenome of nomes) {
    ultimoSobrenome = sobrenome
  }
  return ultimoSobrenome
}

const contarVogais = nome => {
  const vogais = ['a', 'e', 'i', 'o', 'u']
  let contador = 0
  for (const letra of nome.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++
    }
  }
  return contador.toString().padStart(2, '0')
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.aluno.value

  if (!validarNome(nome)) {
    resp.innerText = 'Nome inválido, é preciso conter vogais.'
    return
  }

  resp.innerText = `Senha Inicial: ${obterSobrenome(nome)}${contarVogais(nome)}`
})
