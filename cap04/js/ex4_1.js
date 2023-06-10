const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', e => {
  e.preventDefault() // evita o envio do formulário
  const nome = frm.inName.value // capta o valor do input nome
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  // Processamento
  const media = (nota1 + nota2) / 2
  // Condições
  if (media >= 7) {
    resp2.innerText = `Parabéns, ${nome}! você foi aprovado(a)!`
    resp2.style.color = 'blue'
  } else if (media >= 4) {
    resp2.innerText = `Atenção ${nome}. Você está em exame.`
    resp2.style.color = 'green'
  } else {
    resp2.innerText = `Ops ${nome}... você foi reprovado(a).`
    resp2.style.color = 'red'
  }
})
