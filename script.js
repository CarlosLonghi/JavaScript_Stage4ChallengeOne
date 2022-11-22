const numberOne = Number(prompt('Informe o primeiro número:'))
const numberTwo = Number(prompt('Informe o segundo número:'))

const sum = function () {
  return numberOne + numberTwo
}
let sumResult = sum()

const subtraction = function () {
  return numberOne - numberTwo
}

const multiplication = function () {
  return numberOne * numberTwo
}

const division = function () {
  return (numberOne / numberTwo).toFixed(2)
}

const rest = function () {
  return numberOne % numberTwo
}

alert(`A soma de ${numberOne} + ${numberTwo} é: ${sum()}.`)
alert(`A subtração de ${numberOne} - ${numberTwo} é: ${subtraction()}.`)
alert(`A multiplicação de ${numberOne} X ${numberTwo} é: ${multiplication()}.`)
alert(`A divisão de ${numberOne} / ${numberTwo} é: ${division()}.`)
alert(`O Resto de ${numberOne} % ${numberTwo} é: ${rest()}.`)

if (sum() % 2 == 0) {
  alert('A soma dos dois números resulta em um número Par: ' + sum())
} else if (sum() / 2 != 0) {
  alert('A soma dos dois números resulta em um número Impar: ' + sum())
}

if (numberOne == numberTwo) {
  alert('Os números inseridos são iguais!')
} else {
  alert('Os números inseridos são diferentes!')
}
