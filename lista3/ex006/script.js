var peso = Number(prompt("Digite a seu peso:"))
var altura = Number(prompt("Digite a sua altura:"))

var imc = peso / (altura ** 2) 

if (imc < 18.5) {
    alert ("Abaixo do peso")
}
else if (imc > 18.5 && imc < 24.9) {
    alert ("Peso normal")
}
else if (imc > 25 && imc < 29.9) {
    alert ("Sobrepeso")
}
else {
    alert ("Obesidade")
}

