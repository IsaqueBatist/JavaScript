function verificar() {
  var now = new Date()
  var ano = now.getFullYear()
  var fano = document.getElementById('inascimento')
  var res = document.querySelector('p#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('Verifique os dados e tente novamente')
  } else {
    var sex = document.getElementsByName('Sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    if (sex[0].checked) {
      genero = 'Homem'
    } else {
      genero = 'Mulher'
    }
    res.innerHTML = `${genero} de ${idade} anos`

  }
}