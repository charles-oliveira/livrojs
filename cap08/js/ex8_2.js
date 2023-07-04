const form = document.querySelector('form')
const outResp1 = document.querySelector('#outResp1')
const outResp2 = document.querySelector('#outResp2')
const outResp3 = document.querySelector('#outResp3')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const modeloVeiculo = form.modeloVeiculo.value
  const ano = form.ano.value
  const preco = form.preco.value

  const classificacao = classificarVeiculo(ano) // chama funções e atribui
  const entrada = calcularEntrada(preco, classificacao) // ... retorno às variáveis
  const parcela = (preco - entrada) / 10 // usa retorno da função para cálculo

  outResp1.innerText = `${modeloVeiculo} - ${classificacao}`
  outResp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
  outResp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})

const classificarVeiculo = ano => {
  const anoAtual = new Date().getFullYear() // capta o ano atual
  console.log(anoAtual)
  let classificar
  if (ano == anoAtual) {
    classificar = 'Novo'
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classificar = 'Seminovo'
  } else {
    classificar = 'Usado'
  }
  return classificar
}

const calcularEntrada = (valor, status) =>
  status == 'Novo' ? valor * 0.5 : valor * 0.3
