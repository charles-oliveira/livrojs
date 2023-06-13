const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', e => {
  e.preventDefault()

  const val = Number(frm.inValor.value)
  const raiz = Math.sqrt(val)
  if (Number.isInteger(raiz)) {
    // raiz % 1 == 0
    resp.innerText = `Raiz: ${raiz}`
  } else {
    resp.innerText = `Não há raiz exata para ${val}`
  }
})
