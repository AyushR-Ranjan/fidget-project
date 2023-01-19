let num1 = 0
let sum = 0
let num2 = 0
let exponent1 = 0
let exponent2 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    num1 = randint(1, 10)
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    sum = num1 * num2
    basic.showString("" + num1 + "x" + num2 + "=" + sum,100)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    num2 = randint(1, 10)
    basic.showNumber(num2)
})
input.onGesture(Gesture.Shake, function () {
    exponent1 = num1 ** 2
    exponent2 = num2 ** 2
})
