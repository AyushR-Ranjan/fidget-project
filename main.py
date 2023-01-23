num1 = 0
sum2 = 0
num2 = 0
exponent1 = 0
exponent2 = 0

def on_button_pressed_a():
    global num1
    basic.clear_screen()
    num1 = randint(1, 10)
    basic.show_number(num1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global sum2
    basic.clear_screen()
    sum2 = num1 * num2
    basic.show_string("" + str(num1) + "x" + str(num2) + "=" + str(sum2), 100)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global num2
    basic.clear_screen()
    num2 = randint(1, 10)
    basic.show_number(num2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global exponent1, exponent2
    exponent1 = num1 ** 2
    exponent2 = num2 ** 2
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
