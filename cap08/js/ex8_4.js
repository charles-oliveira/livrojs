const form = document.querySelector('form')
const resp = document.querySelector('pre')

const itens = []

form.rbPizza.addEventListener('click', () => {
  form.bebida.className = 'oculta'
  form.pizza.className = 'exibe'
})

form.rbBebida.addEventListener('click', () => {
  form.pizza.className = 'oculta'
  form.bebida.className = 'exibe'
})

form.detalhesItem.addEventListener('focus', () => {
  if (form.rbPizza.checked) {
    const pizza = form.pizza.value
    const num = pizza == 'media' ? 2 : pizza == 'grande' ? 3 : 4
    form.detalhesItem.placeholder = `Até ${num} sabores`
  }
})

form.detalhesItem.addEventListener('blur', () => {
  form.detalhesItem.placeholder = ''
})

form.addEventListener('submit', e => {
  e.preventDefault()
  let produto

  if (form.rbPizza.checked) {
    const num = form.pizza.selectedIndex // obtém nº de item selecionado
    produto = form.pizza.options[num].text // texto do item selecionado
  } else {
    const num = form.bebida.selectedIndex
    produto = form.bebida.options[num].text
  }

  const detalhes = form.detalhesItem.value // conteúdo do Detalhes
  itens.push(`${produto} - ${detalhes} `) // adiciona ao vetor
  resp.innerText = itens.join('\n') // exibe os itens do pedido

  form.reset()
  form.rbPizza.dispatchEvent(new Event('click'))
})
