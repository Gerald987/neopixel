let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.setBrightness(2)
basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        strip.setBrightness(index)
        basic.pause(500)
        strip.show()
    }
})
