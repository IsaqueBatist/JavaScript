function parimpar(n){
  if (n%2==0){
    return 'par'
  } else {
    return 'ímpar'
  }
}

console.log(parimpar(13212))

function soma (n1=0,n2=0){
  return n1+n2
}
console.log(soma(1))

let v = function(x){
  return x*2
}
console.log(v(5))

function fact(n){
  let fat = 1
  for(let c = n; c>1; c--){
    fat *=c
  }
  return fat
}

console.log(fact(5))

function fatorial(n){
  if (n==1){
    return 1
  } else {
    return n * fatorial(n-1)
  }
}

console.log(fatorial(5))