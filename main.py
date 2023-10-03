strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.show_rainbow(1, 360)

def on_forever():
    strip.set_brightness(30)
    strip.rotate(1)
    basic.pause(50)
    strip.show()
basic.forever(on_forever)
