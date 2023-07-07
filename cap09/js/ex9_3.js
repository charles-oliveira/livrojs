const form = document.querySelector('form')
const resp = document.querySelector('pre')

form.addEventListener('submit', e => {
  e.preventDefault()

  const apostador = form.apostador.value
  const peso = Number(form.peso.value)

  if (verApostaExiste(peso)) {
    alert('Alguém já apostou este peso, informe outro...')
    form.peso.focus()
    return
  }

  let apostas = {}
  if (localStorage.getItem('melanciaApostas')) {
    apostas = JSON.parse(localStorage.getItem('melanciaApostas'))
  }

  apostas[apostador] = peso
  localStorage.setItem('melanciaApostas', JSON.stringify(apostas))

  mostrarApostas()
  form.reset()
  form.apostador.focus()
})

const verApostaExiste = peso => {
  if (localStorage.getItem('melanciaApostas')) {
    const apostas = JSON.parse(localStorage.getItem('melanciaApostas'))
    return Object.values(apostas).includes(peso)
  } else {
    return false
  }
}

const mostrarApostas = () => {
  if (!localStorage.getItem('melanciaApostas')) {
    resp.innerText = ''
    return
  }

  const apostas = JSON.parse(localStorage.getItem('melanciaApostas'))

  let linhas = ''
  for (const [apostador, peso] of Object.entries(apostas)) {
    linhas += `${apostador} - ${peso}gr <br />`
  }

  resp.innerHTML = linhas
}

window.addEventListener('load', mostrarApostas)

form.btnVencedor.addEventListener('click', () => {
  if (!localStorage.getItem('melanciaApostas')) {
    alert('Não há apostas cadastradas')
    return
  }

  const pesoCorreto = Number(prompt('Qual o peso correto da melancia?'))

  if (pesoCorreto === 0 || isNaN(pesoCorreto)) return

  const apostas = JSON.parse(localStorage.getItem('melanciaApostas'))

  let vencedorNome = ''
  let vencedorPeso = Infinity

  for (const [apostador, peso] of Object.entries(apostas)) {
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
    const difAposta = Math.abs(peso - pesoCorreto)

    if (difAposta <= difVencedor) {
      vencedorNome = apostador
      vencedorPeso = peso
    }
  }

  let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`
  mensagem += `\n-----------------------------------------`
  mensagem += `\nVencedor: ${vencedorNome}`
  mensagem += `\nAposta: ${vencedorPeso}gr`
  alert(mensagem)
})

form.btnLimpar.addEventListener('click', () => {
  if (confirm('Deseja realmente limpar as apostas?')) {
    localStorage.removeItem('melanciaApostas')
    mostrarApostas()
  }
})
