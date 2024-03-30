
function contar() {
  let ini = document.getElementById('iinicio')
  let fim = document.getElementById('ifim')
  let passo = document.getElementById('ipasso')
  let resp = document.getElementById('cont')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    resp.innerHTML = `Ímpossível contar`
    alert('[ERRO] Falta de dados')

  } else {
    resp.innerHTML = "Contando: <br>"
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      alert('Passo inválido, Considerando passo 1')
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        resp.innerHTML += `${c} &#x1F449`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        resp.innerHTML += `${c} &#x1F449`
      }
    }
    resp.innerHTML += `&#x1F3C1`
  }
}