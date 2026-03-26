const wallpapers = [
    // "bgs/wallpaper1.jpg",
    "bgs/wallpaper2.webp"
];
const background = document.querySelector("#backgroundDiv");

let dayObject = new Date()
let currentDay = `${dayObject.getDate()}-${dayObject.getMonth() + 1}-${dayObject.getFullYear()}`
// Always gives an index value based on current date
let imageIndex = (generateHash(currentDay) % wallpapers.length)

background.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${wallpapers[imageIndex]})`


function generateHash(string) {
    let hash = 0
    for(const i of string){
        //This is basically saying leftshift by 5(which means multiply by 32) - hash(to get *31) + charCode
        hash = (hash << 5) - hash + i.charCodeAt(0)
        hash |= 0; // Constrain to 32bit integer
        
    }
    return Math.abs(hash) //returning absolute cause it's SIGNED, so it can get negative and JS doesn't accept negative indexes
}