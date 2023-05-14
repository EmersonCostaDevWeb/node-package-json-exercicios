function getRandomInteger(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

const numeroAleatorio =getRandomInteger(2,25)
if(numeroAleatorio % 2 ==0){
    console.log("numero par", numeroAleatorio);
}else{
    console.log("numero impar", numeroAleatorio);
}
 