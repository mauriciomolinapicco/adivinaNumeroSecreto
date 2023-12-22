/*Crear una aplicación adivina_numero_secreto que contenga el código del juego:
● Genera un número aleatorio entre 1 y 100 para que el usuario lo adivine.
● Pide al usuario que ingrese un número y compáralo con el número generado.
● Proporciona retroalimentación al usuario si el número es demasiado alto o demasiado bajo.
● Continúa solicitando números al usuario hasta que adivine el número correcto.
● Muestra un mensaje de felicitaciones cuando el usuario adivina el número. 
*/
const readline = require('readline-sync');
const Chance = require('chance');

const chance = new Chance();

let numeroSecreto = chance.integer({ min: 1, max: 100 });

let numeroElegido = 0;
console.log(numeroSecreto);

while(numeroElegido != numeroSecreto) {

    numeroElegido = readline.question("Ingrese un numero: ")

    if(numeroElegido > numeroSecreto) {
        console.log('Too high');
    }
    else if(numeroElegido < numeroSecreto) {
        console.log('Too low');
    }
    
}
console.log('Felicitaciones pa')