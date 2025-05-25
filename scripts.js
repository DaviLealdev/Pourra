function carinho() {
    //const audio = new Audio("src/audios/deixa.ogg");
    audio.play();
    console.log("funciona");
}

let bucks = document.getElementById("bucks-count");
let level = document.getElementById("level");

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const container = document.getElementById("container");
const comodo = document.getElementById("comodo");
const downBar = document.getElementById("downNavbar")
let comodoAtual = "Sala";

function atualizarComodo() {
    if (comodoAtual === "Sala") {
        comodo.innerText = "Sala";
        container.style.backgroundColor = "#f0f0f0";
        leftButton.style.display = "inline-block";
        rightButton.style.display = "inline-block";
        comodo.style.marginLeft = "0px"
        comodo.style.marginRight = "0px"
        downBar.innerHTML = `
        <div id="option1">
                 <img style="width: 80px;" src="src/images/porta de madeira.png" alt="">
                <br>
               <button>Brincar Lá Fora</button>
              
            </div>
            <div id="option2">
                <img style="width: 50px; padding: 5px; margin-left: 20px;" src="src/images/boneca_inflâvel-removebg-preview.png" alt="">
                <br>
                <button>Bonequinha</button>
            </div>
            <div id="option3">
                <img style="width: 70px;" src="src/images/maconha.png" alt="">
                <br>
                <button>Boca d'fumo</button>
            </div>`

    } else if (comodoAtual === "Cozinha") {
        comodo.innerText = "Cozinha";
        container.style.backgroundColor = "#276cff";
        leftButton.style.display = "none";
        rightButton.style.display = "inline-block";
        comodo.style.marginLeft = "300px"

         downBar.innerHTML = `
        <div id="option1">
                 <img style="width: 70px;" src="src/images/geladeira.png" alt="">
                <br>
               <button>Geladeira</button>
              
            </div>
            <div id="option2">
                <img style="width: 90px; padding: 5px; margin-left: 20px;" src="src/images/merda.png" alt="">
                <br>
                <button>Comidas</button>
            </div>
            <div id="option3">
                <img style="width: 100px;" src="src/images/baseadão-removebg-preview.png" alt="">
                <br>
                <button>Drogas</button>
            </div>`
    } else if (comodoAtual === "Quarto") {
        comodo.innerText = "Quarto";
        comodo
        container.style.backgroundColor = "pink";
        leftButton.style.display = "inline-block";
        rightButton.style.display = "none";
        comodo.style.marginRight = "300px"
         downBar.innerHTML = `
        <div id="option1">
                 <img style="width: 80px;" src="src/images/macumba.png" alt="">
                <br>
               <button>Macumba</button>
              
            </div>
            <div id="option2">
                <img style="width: 90px; padding: 5px; margin-left: 20px;" src="src/images/Gorda.png" alt="">
                <br>
                <button>História</button>
            </div>
            <div id="option3">
                <img style="width: 100px;" src="src/images/dildo.png" alt="">
                <br>
                <button>Punhetinha</button>
            </div>`
    }
}

// Clicou pra esquerda
leftButton.onclick = function () {
    if (comodoAtual === "Sala") {
        comodoAtual = "Cozinha";
    } else if (comodoAtual === "Quarto") {
        comodoAtual = "Sala";
    }
    atualizarComodo();
};

// Clicou pra direita
rightButton.onclick = function () {
    if (comodoAtual === "Sala") {
        comodoAtual = "Quarto";
    } else if (comodoAtual === "Cozinha") {
        comodoAtual = "Sala";
    }
    atualizarComodo();
};

// Inicializa na sala
atualizarComodo();
