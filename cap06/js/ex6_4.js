const form = document.querySelector('form')
const resp = document.querySelector('pre')

const criancas = []

form.addEventListener('submit', e => {
  e.preventDefault()

  const nome = form.nomeCrianca.value
  const idade = Number(form.idadeCrianca.value)

  criancas.push({ nome, idade }) // adiciona um objeto ao array
  form.reset() // limpa os campos do formulário
  form.nomeCrianca.focus() // coloca o foco no campo nome
  form.btnListar.dispatchEvent(new Event('click')) // dispara o evento click no botão btnListar
})

form.btnListar.addEventListener('click', () => {
  if (criancas.length === 0) {
    alert('Não há crianças cadastradas')
    return
  }
  let lista = ''
  for (const crianca of criancas) {
    const { nome, idade } = crianca // desestruturação do objeto criança
    lista += `${nome} - ${idade} anos\n`
  }
  resp.innerText = lista // exibe a lista de crianças
})

form.btnResumir.addEventListener('click', () => {
  if (criancas.length === 0) {
    alert('Não há crianças cadastradas')
    return
  }
  const copia = [...criancas] // cria uma cópia do array criancas
  copia.sort((a, b) => a.idade - b.idade) // ordena a cópia pelo campo idade
  console.log(copia)
  let resumo = ''
  let aux = copia[0].idade // aux = menor idade do array
  let nomes = []
  for (const crianca of copia) {
    const { nome, idade } = crianca
    if (idade === aux) {
      nomes.push(nome)
    } else {
      resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
      resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
      resumo += `Nomes: ${nomes.join(', ')}\n\n`
      aux = idade
      nomes = []
      nomes.push(nome)
    }
  }
  resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
  resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
  resumo += `Nomes: ${nomes.join(', ')}\n\n`
  resp.innerText = resumo
})
