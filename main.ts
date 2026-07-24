let Number1 = 0
let Number2 = 0
input.onButtonPressed(Button.A, function () {
    Number1 = 0
    basic.showNumber(Number1)
})
input.onButtonPressed(Button.B, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(Number1 + Number2)
})
