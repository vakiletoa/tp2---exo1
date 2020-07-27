let posX0 = 0
let posX1 = 1
let posX2 = 2
let posX3 = 3
let posX4 = 4
let direction = 0
let liste: number = [posX0, posX1, posX2, posX3, posX4]
led.plot(posX0, 0)
led.plot(posX1, 1)
led.plot(posX2, 2)
led.plot(posX3, 3)
led.plot(posX4, 4)
basic.forever(function () {
    led.unplot(liste, 0)
})
