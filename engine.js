const canvas = document.getElementById('drawCanvas')
const ctx = canvas.getContext('2d')
const rainHeight = 40
const rainAngle = 45
const speed = 10
let raindrops = []

// Need to set canvas width manually or it would just scale, not have actual pixels and thus will look blurry
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight

for (let i = 0; i < 10; i++) {
    raindrops.push(createRaindrop())
    drawRain(raindrops[i])
}

function drawRain(raindrop){
    ctx.beginPath()
    ctx.moveTo(raindrop.x, raindrop.y)
    ctx.lineTo(raindrop.x + raindrop.dx, rainHeight)
    ctx.lineCap = "round"
    ctx.strokeStyle = "white"
    ctx.stroke()
}

function createRaindrop(){
    let x = getRandomInt(0, window.innerWidth - rainAngle)
    let spd = getRandomInt(speed, speed+10)
    let variation = getRandomInt(-2, 3)
    // dx is dependent of each drops speed * tan of rainangle with some variation, js expected radians so converted them to rads
    let dx = spd * Math.tan((rainAngle + variation) * (Math.PI / 180))
    // In case I wanna do a same slope rain
    // let dx = speed * Math.tan((rainAngle) * (Math.PI / 180))
    let y = 10
    return {x, y, spd, dx}
}

function animateRain(){
    requestAnimationFrame(animateRain)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRain()
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}