const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  e.preventDefault()

  const ladoA = Number(form.ladoA.value)
  const ladoB = Number(form.ladoB.value)
  const ladoC = Number(form.ladoC.value)

  if (ladoA != ladoB + ladoC || ladoB != ladoA + ladoC) {
    resp1.innerText = 'Lados podem formar um triângulo'

    let tipo
    if (ladoA === ladoB && ladoB === ladoC) {
      tipo = 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      tipo = 'Isósceles'
    } else {
      tipo = 'Escaleno'
    }
    resp2.innerText = `Tipo: ${tipo}`
  } else {
    resp1.innerText = 'Os lados não podem formar um triângulo'
    resp2.innerText = ''
  }
})
