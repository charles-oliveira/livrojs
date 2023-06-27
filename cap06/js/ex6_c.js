const form = document.querySelector('form')
const resp = document.querySelector('pre')

const candidatos = []

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.candidato.value
  const acertos = form.acertos.value

  candidatos.push({ nome, acertos })
  console.log(candidatos)

  form.reset()
  form.candidato.focus()

  form.btnListar.dispatchEvent(new Event('click'))
})

form.btnListar.addEventListener('click', () => {
  let lista = ''

  candidatos.forEach(candidato => {
    const { nome, acertos } = candidato
    lista += `${nome} - ${acertos} acertos\n`
  })

  resp.innerText = lista
})

form.btnAprovados.addEventListener('click', e => {
  e.preventDefault()

  const numAcertos = Number(prompt('Número de acertos para aprovação?'))
  let listaAprovados = ''

  for (const candidato of candidatos) {
    const { nome, acertos } = candidato
    if (acertos >= numAcertos) {
      listaAprovados += `${nome} - ${acertos} acertos\n`
    }

    resp.innerText = listaAprovados
  }
})
