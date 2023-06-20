const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  e.preventDefault()

  const numero = form.numero.value
  let temDivisor = 0
  // percorre os possíveis divisores de num
  for (let i = 2; i <= numero / 2; i++) {
    // se tem divisor
    if (numero % i === 0) {
      temDivisor = 1 // muda o flag
      break // sai da repetição
    }
  }
  if (numero > 1 && !temDivisor) {
    resp.innerText = `${numero} é primo`
  } else {
    resp.innerText = `${numero} não é primo.`
  }
})
