function limite () {
    if (x == 4 || y == 4) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    x += 1
    basic.showNumber(x)
    limite()
    basic.pause(200)
    if (!(validarC())) {
        basic.showIcon(IconNames.No)
    }
})
function validarC () {
    if (x <= 4 && y <= 4) {
        basic.clearScreen()
        led.plot(x, y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("x" + x + " " + "y" + y)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    y += 1
    basic.showNumber(y)
    limite()
    basic.pause(200)
    if (!(validarC())) {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
    y += -1
    basic.showNumber(y)
    limite()
    basic.pause(200)
    if (!(validarC())) {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.West)
    x += -1
    basic.showNumber(x)
    limite()
    basic.pause(200)
    if (!(validarC())) {
        basic.showIcon(IconNames.No)
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, x)
