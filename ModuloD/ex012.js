var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora <12){
  console.log('Bom dia')
} else if(hora<=18){
  console.log('Bota tarde')
} else {
  console.log('Boa noite')
}