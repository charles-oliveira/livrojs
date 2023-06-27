const form = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

form.addEventListener('submit', e => {
  e.preventDefault()

  const numero = Number(form.numero.value)
  console.log(numero)
  if (numero === sorteado) {
    alert('Parabéns! Você acertou!')
    form.btnSubmit.disabled = true
    form.btnNovo.className = 'exibe'
    respDica.innerText = `Número Sorteado: ${sorteado}`
  } else {
    if (erros.includes(numero)) {
      alert(`Você não pode repetir o número ${numero}!`)
    } else {
      erros.push(numero)
      const numErros = erros.length
      const numChances = CHANCES - numErros
      respErros.innerText = `${numErros} (${erros.join(', ')})`
      respErros.innerText = numChances
      if (numChances == 0) {
        alert('Suas chances acabaram...')
        form.btnSubmit.disabled = true
        form.btnNovo.className = 'exibe'
        respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
      } else {
        const dica = numero < sorteado ? 'maior' : 'menor'
        respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
      }
    }
  }
  form.btnNovo.addEventListener('click', e => {
    location.reload()
  })
  form.numero.value = ''
  form.numero.focus()
})
