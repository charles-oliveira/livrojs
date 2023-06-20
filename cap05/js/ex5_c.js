const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()

  const num = Number(form.numero.value)
  let sum = 0
  let divisores = []
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisores.push(i)
      sum += i
    }
  }
  console.log(divisores)

  if (sum === num) {
    resp1.innerText = `Divisores do ${num}: ${divisores.join(
      ', '
    )}. Soma(${sum})`
    resp2.innerText = `${num} É um número Perfeito.`
  } else {
    resp2.innerText = `${num} Não é um número Perfeito.`
  }
})
