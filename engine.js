const canvas = document.getElementById('drawCanvas')
const ctx = canvas.getContext('2d')
const rainHeight = 40
const rainAngle = 0
const speed = 25
const fps = 60
let raindrops = []

// Need to set canvas width manually or it would just scale, not have actual pixels and thus will look blurry
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight

for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop())
    drawRain(raindrops[i])
}

function drawRain(raindrop){
    ctx.beginPath()
    ctx.moveTo(raindrop.x, raindrop.y)
    ctx.lineTo(raindrop.x + (raindrop.dx * rainHeight), raindrop.y + (raindrop.dy * rainHeight))
    ctx.lineCap = "round"
    ctx.strokeStyle = "white"
    ctx.stroke()
}

function createRaindrop(){
    let x = getRandomInt(0, window.innerWidth - rainAngle)
    let spd = getRandomInt(speed, speed+5)
    let variation = getRandomInt(-2, 3)
    // dx is dependent of each drops speed * tan of rainangle with some variation, js expected radians so converted them to rads
    let dx = Math.sin((rainAngle + variation) * (Math.PI / 180))
    let dy = Math.cos((rainAngle + variation) * (Math.PI / 180))
    // In case I wanna do a same slope rain
    // let dx = speed * Math.tan((rainAngle) * (Math.PI / 180))
    let y = 10
    return {x, y, dx, dy, spd}
}

function animateRain(lastCall){
    if (lastCall > 1000/fps){
        console.log(lastCall)
        // lastCall = Date.now()
    }else{

    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];
        if(raindrop.x > canvas.width || raindrop.y > canvas.height){
            raindrop.x = getRandomInt(0, window.innerWidth - rainAngle)
            raindrop.y = getRandomInt(0, window.innerHeight/2)
        }else{
            raindrop.x += raindrop.dx * raindrop.spd
            raindrop.y += raindrop.dy * raindrop.spd
        }
        drawRain(raindrop)
    }

    console.log(performance.now())

    requestAnimationFrame(animateRain)
    // setTimeout(() => {
    //     requestAnimationFrame(animateRain)
    // }, 1000/fps)
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

animateRain()