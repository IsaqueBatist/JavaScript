var now = new Date()
var hours = now.getHours()
var minutes = now.getMinutes()
var time = document.getElementById('hours')
var stats = document.getElementById('stats')
var boxshadow = document.getElementById('Container')
var icon = document.getElementById('icon')
time.innerHTML = `Agora são ${hours}:${minutes}`

if (hours >0 && hours<=5){

  stats.innerHTML = 'Boa Madrugada'
  document.body.style.backgroundImage = "url('imagens/Dawn.jpg')"
  boxshadow.style.boxShadow = '0px 0px 20px 5px var(--cor1)'
  icon.innerHTML = "<img src='icon/icons8-sol.svg' alt=''></img>"

} else if (hours >5 && hours <12){

  stats.innerHTML = 'Bom Dia'
  document.body.style.backgroundImage = "url('imagens/day.jpg')"
  boxshadow.style.boxShadow = '0px 0px 20px 5px var(--cor2)'

} else if (hours >=12 && hours <18){

  stats.innerHTML = 'Boa Tarde'
  document.body.style.backgroundImage = "url('imagens/afternoon.jpg')"
  boxshadow.style.boxShadow = '0px 0px 20px 5px var(--cor3)'

} else {

  stats.innerHTML = 'Boa Noite'
  document.body.style.backgroundImage = "url('night.jpg')"
  boxshadow.style.boxShadow = '0px 0px 20px 5px var(--cor4)'
  icon.innerHTML= "<img src='icon/Night_Landscape_icon-icons.com_54161.svg' alt=''></img>"

}
