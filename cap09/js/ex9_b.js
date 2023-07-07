const form = document.querySelector('form')
const resp = document.querySelector('pre')

let services = []

form.addEventListener('submit', e => {
  e.preventDefault()

  const service = form.service.value
  services.push(service)
  console.log(services)
  form.service.value = ''
  form.service.focus()

  // O localStorage só pode armazenar strings, para armazenar array/objects tem que converter p/ string
  localStorage.setItem('services', JSON.stringify(services))
})

form.executeService.addEventListener('click', () => {
  let services = JSON.parse(localStorage.getItem('services'))
  console.log(typeof services)

  if (!services || services.length === 0) {
    resp.innerText = `
          -------------------------
          Não há serviços pendentes.
          -------------------------`
  } else {
    const pegarPrimeiroElemento = services.shift()
    resp.innerText = `
          --------------------
          Serviço em Execução:
          --------------------
          ${pegarPrimeiroElemento}
          `
    localStorage.setItem('services', JSON.stringify(services))
  }
})
