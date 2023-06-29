const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const senha = form.senha.value
  const erros = []

  // verifica se o tamanho da senha é válido
  if (senha.length < 8 || senha.length > 15) {
    erros.push('Possuir entre 8 e 15 caracteres')
  }

  // verifica se possui números
  if (senha.match(/[0-9]/g) == null) {
    erros.push('Possuir números (no mínimo, 1)')
  }

  // verifica se não possui letras minúsculas
  if (!senha.match(/[a-z]/g)) {
    erros.push('Possuir letras minúsculas (no mínimo, 1)')
  }

  // verifica se possui letras maiúsculas ou apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push('Possuir letras maiúsculas (no mínimo, 2)')
  }

  // Verifica se não possui símbolos ou '_'
  if (!senha.match(/[\W|_]/g)) {
    erros.push('Possuir símbolos (no mínimo, 1)')
  }

  // se o vetor está vazio (significa que não foram encontrados erros)
  if (erros.length == 0) {
    resp.innerText = 'Ok! Senha Válida!'
  } else {
    resp.innerText = `Erro.. A senha deve ${erros.join(`, `)}`
  }
})
