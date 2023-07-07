const form = document.querySelector('form')
const resp = document.querySelector('pre')

const listaDeCompras = []

const atualizarListaDeCompras = () => {
  let exibirLista = ''
  for (const produto of listaDeCompras.sort()) {
    exibirLista += `${produto}\n`
  }
  resp.innerText = `Produtos Adicionados:\n----------------------\n${exibirLista}`
}

const primeiraLetraMaiúscula = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const produto = form.produto.value
  listaDeCompras.push(primeiraLetraMaiúscula(produto))
  atualizarListaDeCompras()
  form.produto.value = ''
})

const btnLimparDados = form.limparDados
btnLimparDados.addEventListener('click', () => {
  listaDeCompras.length = 0
  resp.innerText = 'Lista de compras vazia.'
  form.produto.focus()
})
