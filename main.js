// funcion para jugar al piedra papel o tijera

// iniciar variables


let computer = compuChoise();
let user = " ";  
let attemp = 0;
let win = 0;   
let lose = 0;
let draw = true;

console.log(computer + " " + user + " " + attemp + " " + win + " " + lose + " " + draw    
);

// funcion para que la comoputadora elija una opcion

function compuChoise() {
    let computerChoice =["piedra", "papel", "tijera"];
    let random = Math.floor(Math.random() * 3);
    let computer = computerChoice[random];
    // alert("La computadora eligio: " + computer);
    return computer;
}
// funcion para que el usuario elija una opcion
function userChoise() {
    let user = prompt("Elige: piedra, papel o tijera").toLowerCase();
    if (user === "piedra" || user === "papel" || user === "tijera") {
        // alert("vos elegiste: " + user);
        return user;
    } else {
        alert("Por favor elige una opcion valida");
        return userChoise();
    }
    return user;
}

// funcion para iniciar la comprobacion del juego
function gameStart() {
    user = userChoise();
    computer = compuChoise();
    if (user === computer) {
        draw = true;
        alert("Empate");
        attemp++;
        if (attemp === 3) {
            alert("Jugaste " + attemp + " veces, ganaste " + win + " veces y perdiste " + lose + " veces");
            return;
        }
    } else if (user === "piedra" && computer === "tijera" || user === "papel" && computer === "piedra" || user === "tijera" && computer === "papel") {
        win++;
        draw = false;
        attemp++;
        if (attemp === 3) {
            alert("Jugaste " + attemp + " veces, ganaste " + win + " veces y perdiste " + lose + " veces");
            alert("Ganaste"+ " La computadora eligio: " + computer);
            return;
        }
        
    } else {
        lose++;
        draw = false;
        attemp++;
        alert("Perdiste");
        gameStart();    
    }
}

gameStart();