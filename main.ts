function next_item () {
    if (true) {
        view += 1
    }
}
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
timeanddate.onDayChanged(function () {
    steps = 0
})
let steps = 0
let view = 0
let use = 1
basic.forever(function () {
    if (use == 1) {
        timeanddate.setTime(12, 0, 0, timeanddate.MornNight.PM)
        basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
    } else if (use == 2) {
        basic.showNumber(steps)
    } else {
    	
    }
})
