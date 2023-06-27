const form = document.querySelector('form')
const resp = document.querySelector('h3')
const pre = document.querySelector('pre')

const pacientes = [] // declara array global

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.paciente.value
  pacientes.push(nome) // adiciona nome no final do vetor/array
  let lista = ''
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`
  }
  pre.innerText = lista // exibe a lista de pacientes na página
  form.paciente.value = '' // limpa o conteúdo do campo do formulário
  form.paciente.focus() // posiciona o cursor no campo
})

form.btnUrgencia.addEventListener('click', e => {
  if (!form.checkValidity()) {
    alert('Informe o nome do paciente a ser atendido em caráter de urgência.')
    form.paciente.focus()
    return
  }

  const nome = form.paciente.value
  pacientes.unshift(nome)
  let lista = ''
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
  pre.innerText = lista
  form.paciente.value = ''
  form.paciente.focus()
})

form.btnAtender.addEventListener('click', e => {
  if (pacientes.length == 0) {
    alert('Não há pacientes na lista de espera')
    form.paciente.focus()
    return
  }
  const atender = pacientes.shift()
  resp.innerText = atender
  let lista = ''
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
  pre.innerText = lista
})
