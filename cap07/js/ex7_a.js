const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const mensagem = form.mensagem.value
  const semEspaco = mensagem.split('')

  let listaPares = []
  let listaImpares = []

  for (let i = 0; i < semEspaco.length; i++) {
    if (i % 2 === 0) {
      listaPares.push(semEspaco[i])
    } else {
      listaImpares.push(semEspaco[i])
    }
  }

  const mensagemCriptografada = `${listaPares.join('')} ${listaImpares.join(
    ''
  )}`
  resp.innerText = mensagemCriptografada

  // Descriptografar a mensagem
  const palavras = mensagemCriptografada.split(' ')
  const letrasPares = palavras[0].split('')
  const letrasImpares = palavras[1].split('')

  let mensagemDescriptografada = ''
  const tamanhoMaiorLista = Math.max(letrasPares.length, letrasImpares.length)

  for (let i = 0; i < tamanhoMaiorLista; i++) {
    if (letrasPares[i]) {
      mensagemDescriptografada += letrasPares[i]
    }
    if (letrasImpares[i]) {
      mensagemDescriptografada += letrasImpares[i]
    }
  }
})
