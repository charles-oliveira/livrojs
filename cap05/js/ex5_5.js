const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = '' // string com a resposta a ser exibida
let numContas = 0 // inicializa o contador...
let valTotal = 0 // e acumulador (variáveis globais)

form.addEventListener('submit', e => {
  e.preventDefault()

  const descricao = form.descricao.value
  const valor = Number(form.valor.value)

  numContas++ // adiciona valores ao contador e acumulador
  valTotal += valor
  resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)} \n`
  console.log(resposta)
  resp1.innerText = `${resposta} -------------------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

  form.descricao.value = ''
  form.valor.value = ''
  form.descricao.focus() // posiciona no campo descrição do form
})
