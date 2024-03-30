function calcular() {
  var num = document.getElementById('inum')
  var resp = document.getElementById('tabuada')
  resp.innerHTML = ''
  if (num.value.length == 0) {
    alert('Por favor, digite um número')
  } else {
    var n = Number(num.value)
    for (c = 1; c <= 10; c++) {
      resp.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
    }
  }
}