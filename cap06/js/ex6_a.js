const form = document.querySelector('form')
const resp = document.querySelector('pre')

const clubes = []

form.addEventListener('submit', e => {
  e.preventDefault()

  const clube = form.clube.value
  clubes.push(`${clube.charAt(0).toUpperCase()}${clube.slice(1)}`)

  form.clube.value = ''
  form.clube.focus()

  form.btnListar.dispatchEvent(new Event('click'))
})

form.btnListar.addEventListener('click', () => {
  if (clubes.length === 0) {
    resp.textContent = 'Nenhum clube cadastrado; por favor cadastre um clube.'
    return
  }
  let lista = ''
  clubes.forEach((clube, i) => {
    lista += `${i + 1} - ${clube}\n`
  })
  resp.textContent = lista
})

form.btnTabela.addEventListener('click', () => {
  if (clubes.length % 2 == 1) {
    resp.textContent = 'Número ímpar de clubes; por favor cadastre um clube.'
    return
  }

  const reversedClubes = [...clubes].reverse() // cria uma cópia do array clubes e inverte a ordem dos elementos
  const tabela = []

  for (let i = 0; i < clubes.length / 2; i++) {
    tabela.push(`${clubes[i]} x ${reversedClubes[i]}`)
  }

  resp.textContent = tabela.join('\n')
})
