// Cria referência ao formulário e onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', e => {
  e.preventDefault()

  const nome = frm.inName.value
  const masculino = frm.inMasculino.checked
  const altura = frm.inAltura.value

  //   let peso // declara a variável peso
  //   if (masculino) {
  //     peso = 22 * Math.pow(altura, 2) // eleva ao quadrado
  //   } else {
  //     peso = 21 * Math.pow(altura, 2)
  //   }

  // Usando o operador ternário
  const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

  resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(3)} kg.`
  frm.addEventListener('reset', e => {
    resp.innerText = ''
  })
})
