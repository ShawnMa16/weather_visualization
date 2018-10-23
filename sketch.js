let snow = []
let thunder = []
let fog = []
let rain = []
let sand = []

let elements = [snow, thunder, fog, rain, sand]

function setup() {
	background(0, 0, 0)
	createCanvas(900, 900)
	noStroke()


	getWeathers(20, 100, 50, 300, 200)
}

function draw() {

	background(0, 0, 0)

	elements.forEach((element, index) => {
		element.forEach((particle, number) => {
			particle.move()
			if (index == 1) {
				particle.thunder()
			} else {
				particle.display()
			}
		})
	})
}

function getWeathers(sizeOfSnow, sizeOfThunder, sizeOfFog, sizeofRain, sizeOfSand) {
	
	let total = [sizeOfSnow, sizeOfThunder, sizeOfFog, sizeofRain, sizeOfSand]
	total.forEach((size, type) => {
		elements[type] = []
		for (let i = 0; i < size; i++ ) {
			let element = new Particle(size, type)
			elements[type].push(element)
		}
	})

	// background(0, 0, 0)
}
