const form = document.querySelector('form')
const dvQuadro = document.querySelector('#divQuadro')

form.addEventListener('submit', e => {
  e.preventDefault()

  const tarefa = form.tarefa.value

  const h5 = document.createElement('h5') // cria o elemento HTML h5
  const texto = document.createTextNode(tarefa) //cria um texto
  h5.appendChild(texto) // define que texto será filho de h5
  dvQuadro.appendChild(h5) // e que h5 será filho de divQuadro

  form.terefa.value = ''
  form.tarefa.focus()
})

form.btSelecionar.addEventListener('click', () => {
  // O querySelectorAll retorna um vetor
  const tarefas = document.querySelectorAll('h5') // obtém tags h5 da página

  if (tarefas.length == 0) {
    alert('Não há tarefas para selecionar')
    return
  }

  let aux = -1 // var auxilixar p/ indicar linha selecionada

  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].className == 'tarefa-selecionada') {
      tarefas[i].className = 'tarefa-normal'
      aux = i
      break
    }
  }
  // se a linha selecionada é a última, irá voltar para a primeira
  if (aux == tarefas.length - 1) {
    aux = -1
  }

  tarefas[aux + 1].className = 'tarefa-selecionada'
})

form.btRetirar.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('h5')

  let aux = -1

  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == 'tarefa-selecionada') {
      aux = i
    }
  })

  if (aux == -1) {
    alert('Selecione uma tarefa para removê-la...')
    return
  }

  if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
    dvQuadro.removeChild(tarefas[aux])
  }
})

form.btGravar.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('h5')

  if (tarefas.length == 0) {
    alert('Não há tarefas para serem salvas')
    return
  }

  let dados = ''
  tarefas.forEach(tarefa => {
    dados += `${tarefa.innerText} ; `
  })

  localStorage.setItem('tarefasDia', dados.slice(0, -1))

  if (localStorage.getItem('tarefasDias')) {
    alert('Ok! tarefas salvas!')
  }
})

window.addEventListener('load', () => {
  if (localStorage.getItem('tarefasDia')) {
    const dados = localStorage.getItem('tarefasDia').split(';')

    dados.forEach(dado => {
      const h5 = document.createElement('h5')
      const texto = document.createTextNode(dado)
      h5.appendChild(texto)
      dvQuadro.appendChild(h5)
    })
  }
})
