// funcion para jugar al piedra papel o tijera

// iniciar variables

let attemp = 0;  // intentos
let win = 0;   
let lose = 0;
let draw = 0; // empate


// funcion para que la comoputadora elija una opcion

function compuChoise() {
    let computerChoice =["piedra", "papel", "tijera"];
    let random = Math.floor(Math.random() * 3);
    let computer = computerChoice[random];
    return computer;
}
//  funcion para que el usuario elija una opcion
function userChoise() {
    let user = prompt("Elige: piedra, papel o tijera").toLowerCase();
    if (user === "piedra" || user === "papel" || user === "tijera") {
        return user;
    } else {
        console.log("Por favor elige una opcion valida");
        return userChoise();
    }
}
    

// funcion para iniciar la comprobacion del juego
function gameRules(user, computer) {
    if (user === computer) {
        return "Empate";
    }
    else if (user === "piedra" && computer === "tijera" || user === "papel" && computer === "piedra" || user === "tijera" && computer === "papel") {
        return "Ganaste";
    }
        
    else {
        return "Perdiste";
    }     
    
}

function gameStart(){
    while (attemp < 3){
        let computer = compuChoise();
        let user = userChoise();
        let result = gameRules(user, computer);
        console.log("La computadora eligio: " + computer);
        console.log("Tu elegiste: " + user);
        console.log("El resultado es: " + result);
        if (result === "Ganaste") {
            win++;
        } 
        else if (result === "Perdiste") {
            lose++;
        } 
        else {
            draw++;
        }
        attemp++;
        console.log("Intentos: " + attemp);
        console.log("Ganados: " + win);
        console.log("Perdidos: " + lose);
        console.log("Empates: " + draw);
        
        
        let playAgain = confirm("Quieres jugar de nuevo?");
        if (playAgain) {
            gameStart();
        } 
        else {
            attemp = 0;
            console.log("Gracias por jugar");
            break;
        }    
    }
    if (attemp === 3) {
        if (win > lose) {
            console.log("Felicidades ganaste el juego");
        }
        else if (win < lose) {
            console.log("Perdiste el juego");
        }
        else {
            console.log("Empataste el juego");
            console.log("Fin del juego");
        }
    }
}

gameStart()