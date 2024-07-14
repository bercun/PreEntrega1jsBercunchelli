// funcion para jugar al piedra papel o tijera

// iniciar variables
let computer = compuChois();
let user = "";  
let attemp = 0;
let win = 0;   
let lose = 0;
let draw = true;

// funcion para que la comoputadora elija una opcion

function compuChois() {
    let computerChoice =["piedra", "papel", "tijera"];
    let random = Math.floor(Math.random() * 3);
    let computer = computerChoice[random];
    // alert("La computadora eligio: " + computer);
    return computer;
}
// funcion para que el usuario elija una opcion
function userChoise() {
    let userChoice = prompt("Elige: piedra, papel o tijera").toLowerCase();
    if (userChoice === "piedra" || userChoice === "papel" || userChoice === "tijera") {
        return userChoice;
    } else {
        alert("Por favor elige una opcion valida");
        return userChoise();
    }
    return userChoice;
}

// funcion para iniciar la comprobacion del juego
function gameStart() {
    user = userChoise();
    computer = compuChois();
    if (user === computer) {
        draw = true;
        alert("Empate");
        attemp++;
        if (attemp === 3) {
            alert("Jugaste " + attemp + " veces, ganaste " + win + " veces y perdiste " + lose + " veces");
            return;
        }
        gameStart();
    } else if (user === "piedra" && computer === "tijera" || user === "papel" && computer === "piedra" || user === "tijera" && computer === "papel") {
        win++;
        draw = false;
        attempt++;
        if (attempt === 3) {
            alert("Jugaste " + attemp + " veces, ganaste " + win + " veces y perdiste " + lose + " veces");
            return;
        }
        alert("Ganaste"+ " La computadora eligio: " + computer);
    } else {
        lose++;
        draw = false;
        attempt++;
        alert("Perdiste");
        gameStart();    
    }
    attemp++;
    if (draw === true) {
        gameStart();
    } else {
        alert("Jugaste " + attemp + " veces, ganaste " + win + " veces y perdiste " + lose + " veces");
        gameStart();
    }
}

gameStart();