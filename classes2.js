class car {
    constructor(name, colour, maxspeed) {
        this.name = name;
        this.colour = colour;
        this.maxspeed = maxspeed;
        this.speednow = 0
    }
    drive = () => {
        console.log('The engine started')
        this.speednow += 40

    }

    pickUp = () => {
        this.speednow += 20;
    }
    brake = () => {
        console.log('Dood, Hit the brakes!')
        this.speednow -= 30

    }
    stop = () => {
        console.log('Hey!Stop')
        this.speednow = 0
    }
    currentSpeed = () => console.log(`Now the speed is ${porsche.speednow} Km/hr`)
}


let tata = new car('Safari', 'White', 200)
// console.log(tata)
// tata.drive()
// tata.pickUp()
// tata.brake()
// tata.stop()
//   console.log(`Now the speed is ${tata.speednow} Km/hr`)

let porsche = new car('porsche', 'yellow', 250)
porsche.drive()

porsche.pickUp()
porsche.currentSpeed()
porsche.brake()
porsche.currentSpeed()
porsche.stop()
porsche.currentSpeed()