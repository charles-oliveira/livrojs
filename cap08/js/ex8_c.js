const form = document.querySelector('form')
let resp1 = document.querySelector('#respOut1')
let resp2 = document.querySelector('#respOut2')

form.rbSim.addEventListener('click', () => {
  form.tipoConvenio.className = 'exibe'
  form.rbNao.checked = false
})
form.rbNao.addEventListener('click', () => {
  form.tipoConvenio.className = 'oculta'
  form.rbSim.checked = false
})

form.addEventListener('submit', e => {
  e.preventDefault()

  const valVacina = form.valVacina.value
  console.log(valVacina)

  const semConvenio = valVacina * 0.1
  const descAmigosAnimais = valVacina * 0.2 // 20% de desconto
  const descSaudeAnimal = valVacina * 0.5

  if (form.rbSim.checked) {
    const num = form.tipoConvenio.selectedIndex
    const convenio = form.tipoConvenio.options[num].text
    if (convenio == 'Amigos dos Animais') {
      resp1.innerText = `
      Desconto R$: ${descAmigosAnimais}
      Valor a pagar R$: ${valVacina - descAmigosAnimais}
      `
    } else if (convenio == 'Saúde Animal') {
      resp1.innerText = `
      Desconto R$: ${descSaudeAnimal}
      Valor a pagar R$: ${valVacina - descSaudeAnimal}
      `
    }
  } else {
    resp1.innerText = `
    Desconto R$: ${semConvenio}
    Valor a pagar: R$ ${valVacina - semConvenio}
    `
  }

  form.reset()
  form.rbSim.dispatchEvent(new Event('click'))
})
