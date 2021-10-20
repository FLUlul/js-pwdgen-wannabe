/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21 */


let name = prompt("Insert your name here");
let lastName = prompt("Insert your last name here");
let favoriteColor = prompt("Insert your name here");

let password = `Your assigned password is: ${name}${lastName}${favoriteColor}21`;

document.getElementById("psw").innerHTML = password;
