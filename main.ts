basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
basic.forever(function () {
    if (input.isGesture(Gesture.FreeFall)) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.TShirt)
        basic.showIcon(IconNames.StickFigure)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.FreeFall)) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 220), music.PlaybackMode.UntilDone)
    }
})
