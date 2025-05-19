function carinho(){
const audio = new Audio("deixa.ogg");
audio.play();
console.log("funciona")
}

let bucks = document.getElementById("bucks-count")
let level = document.getElementById("level")

const leftButton = document.getElementById("left-button")
const rightButton = document.getElementById("right-button")

function goToBedRoom(){
    let container = document.getElementById("container")
    let comodo = document.getElementById("comodo")
    container.style.backgroundColor = 'pink';
    comodo.innerHTML = 'Quarto'
    rightButton.style.display = 'none'
    
}