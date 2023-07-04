const prompt = require('prompt-sync')() // importamos o módulo prompt-sync

const vinhos = [] // vetor de vinhos

// Função Utilitária

function titulo(texto) {
  console.log()
  console.log(texto)
  console.log('='.repeat(40))
}

// FUNÇÃO INCLUIR

function incluir() {
  titulo('===< Inclusão de Vinhos >===')

  const marca = prompt('Marca...: ')
  const tipo = prompt('Tipo...: ')
  const preco = Number(prompt('Preço R$: '))
  vinhos.push({ marca, tipo, preco }) // insere um objeto no vetor
  console.log('Ok! vinho cadastrado com sucesso!')
}

// FUNÇÃO LISTAR

function listar() {
  titulo('===< Lista de vinhos Cadastrados >===')
  console.log('Marca............... Tipo................ Preço R$:')

  for (const vinho of vinhos) {
    console.log(
      `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco
        .toFixed(2)
        .padStart(9)}`
    )
  }
}

// FUNÇÃO PESQUISAR

function pesquisar() {
  titulo('===< Pesquisar por Tipo deVinho >===')

  const pesq = prompt('Tipo: ')

  let contador = 0
  console.log('Marca.............. Tipo.............. Preço R$:')

  for (const vinho of vinhos) {
    if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
      console.log(
        `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco
          .toFixed(2)
          .padStart(9)}`
      )
      contador++ // se entrou no if, incrementa o contador
    }
  }

  // se percorreu todos os vinhos e contador continua == 0, significa que não há
  if (contador == 0) {
    console.log(`Obs.: Não há vinhos cadastrados do tipo "${tipo}"`)
  }
}

// FUNÇÃO CALCULAR MÉDIA

function calcularMedia() {
  titulo('===< Média e Destaques do Cadastro de Vinhos >===')

  const num = vinhos.length // obtém o número de elementos do vetor
  if (num == 0) {
    console.log('Não há vinhos cadastrados')
    return
  }

  let total = 0
  for (const vinho of vinhos) {
    total += vinho.preco
  }

  const media = total / num // calcular o preço médio

  const vinhos2 = [...vinhos] // cria uma cópia do vetor original

  vinhos2.sort((a, b) => a.preco - b.preco) // ordena o preco

  const menor = vinhos2[0] // menor preço é o primeiro (posição 0)
  const maior = vinhos2[num - 1] // maior preço é o último (posição num-1)

  console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
  console.log(`Menor valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
  console.log(`Maior valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}

do {
  titulo('====< Menu Principal >====')
  console.log('1. Inclusão de Vinhos')
  console.log('2. Listagem de Vinhos')
  console.log('3. Pesquisar por Tipo')
  console.log('4. Média e Destaques')
  console.log('5. Sair')
  const opcao = Number(prompt('Opção: '))

  if (opcao == 1) {
    incluir()
  } else if (opcao == 2) {
    listar()
  } else if (opcao == 3) {
    pesquisar()
  } else if (opcao == 4) {
    calcularMedia()
  } else if (opcao == 5) {
    break
  } else {
    console.log('Opção inválida!')
  }
} while (true)
