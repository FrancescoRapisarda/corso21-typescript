"use strict";
/**
 *
 * Costante di kaprekar     (6174)
 * Creare una funzione che accetta in ingresso un numero a quattro cifre,
 * con almeno due distinte (due cifre diverse). Deve restituirmi il numero
 * di iterazione necessarie per ottenere la costante di kaprekar.
 * Se le cifre sono tutte uguali restituire 1.
 *
 */
function kaprekarConstant(num) {
    const KAPREKAR_CONSTANT = 6174;
    function padNumber(n) {
        return n.toString().padStart(4, '0');
    }
    function kaprekarStep(n) {
        const numStr = padNumber(n);
        const ascending = parseInt(numStr.split('').sort().join(''), 10);
        const descending = parseInt(numStr.split('').sort((a, b) => b.localeCompare(a)).join(''), 10);
        const result = descending - ascending;
        console.log(`${descending} - ${ascending} = ${result}`);
        return result;
    }
    let currentNumber = num;
    let steps = 0;
    while (currentNumber !== KAPREKAR_CONSTANT) {
        currentNumber = kaprekarStep(currentNumber);
        steps++;
        if (steps > 100) {
            console.error("Il processo di Kaprekar non sembra convergere al numero costante 6174.");
            break;
        }
    }
    return steps;
}
// Esempio di utilizzo
const startingNumber = 3524;
const stepsToReach6174 = kaprekarConstant(startingNumber);
console.log(`Sono necessari ${stepsToReach6174} passaggi per raggiungere la costante di Kaprekar da ${startingNumber}.`);
