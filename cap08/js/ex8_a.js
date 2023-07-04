const form = document.querySelector('form')
const resp = document.querySelector('pre')

const retornarTracos = nomeAtleta => {
  let tracos = ''
  // percorrer o nome do atleta
  for (let i = 0; i < nomeAtleta.length; i++) {
    // retorna traços abaixo do nome desconsiderando os espaços
    if (nomeAtleta[i] === ' ') {
      // se for espaço
      tracos += ' ' // adiciona espaço
    } else {
      tracos += '-' // adiciona traço
    }
  }
  return tracos
}

const categorizarAluno = idade => {
  let categoria = ''
  if (idade <= 12) {
    categoria += 'Infantil'
  } else if (idade <= 18) {
    categoria += 'Juvenil'
  } else {
    categoria += 'Adulto'
  }
  return categoria
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const nomeAtleta = form.nome.value
  const idade = Number(form.idade.value)

  resp.innerText = `
    ${nomeAtleta}
    ${retornarTracos(nomeAtleta)}
    Categoria: ${categorizarAluno(idade)}
`
})
