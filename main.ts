let exponent1 = 0
let num1 = 0
let YesOrNo = false
let sum = 0
let num2 = 0
let exponent2 = 0
let sum1 = 0
let sumSQRT = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    exponent1 = num1 ** 2
    basic.showString("" + num1 + "^" + "2" + "=" + exponent1)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    num1 = randint(1, 10)
    basic.showNumber(num1)
})
input.onPinPressed(TouchPin.P2, function () {
    YesOrNo = Math.randomBoolean()
    if (true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
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
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    exponent2 = num2 ** 2
    basic.showString("" + num2 + "^" + "2" + "=" + exponent2)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    sum1 = exponent1 + exponent2
    basic.showString("" + exponent1 + "+" + exponent2 + "=" + sum1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sumSQRT = Math.round(Math.sqrt(sum1))
    basic.showString("" + sum1 + "SQRT" + "=" + "~" + sumSQRT)
})
