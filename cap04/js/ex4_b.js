const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', e => {
  e.preventDefault()

  const velPermitida = Number(frm.velPermitida.value)
  const velCondutor = Number(frm.velCondutor.value)

  //   if (velCondutor > velPermitida * 1.2) {
  //     resp.innerText = `Multa Grave`
  //   } else if (velCondutor > velPermitida) {
  //     resp.innerText = `Multa Leve`
  //   } else {
  //     resp.innerText = `Sem Multa`
  //   }

  const resultado =
    velCondutor > velPermitida * 1.2
      ? 'Multa Grave'
      : velCondutor > velPermitida
      ? 'Multa Leve'
      : 'Sem Multa'

  resp.innerText = `Situação: ${resultado}`
})
