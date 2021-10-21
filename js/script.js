/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21 */

/* ask the utent his name */
let name = prompt("Insert your name here");

/* ask the utent his last name */
let lastName = prompt("Insert your last name here");

/* ask the utent his favorite color */
let favoriteColor = prompt("Insert your name here");

/* create the variable with the text+password */
let password = `${name}${lastName}${favoriteColor}21`;

/* print in html the password result */
document.getElementById("psw").innerHTML = `Your assigned password is: ${password}`;
