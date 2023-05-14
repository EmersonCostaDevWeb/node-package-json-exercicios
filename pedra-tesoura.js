const computador = process.argv[2]
const desenvolvedor = process.argv[3]
const computadorjoga = ["pedra", "papel", "tesoura"]
const escolha = computadorjoga[Math.floor(Math.random() * computadorjoga.length)]

if(desenvolvedor!== undefined){
    console.log("Por favor, escolha pedra, papel ou tesoura!")
} else if(desenvolvedor === "pedra"){
    escolha === "pedra" ? console.log("Empate.") :
    escolha === "papel" ? console.log("Derrota.") :
    escolha === "tesoura" ? console.log('Vitoria!') : console.log("Tente novamente.")
} else if(desenvolvedor === "papel"){
    escolha === "pedra" ? console.log("Vitoria!") :
    escolha === "papel" ? console.log("Empate.") :
    escolha === "tesoura" ? console.log('Derrota') : console.log("Tente novamente.")
} else if(desenvolvedor === "tesoura"){
    escolha === "pedra" ? console.log("Derrota") :
    escolha === "papel" ? console.log("Vitoria!") :
    escolha === "tesoura" ? console.log('Empate') : console.log("Tente novamente.")
}

