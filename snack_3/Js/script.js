/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

// 1. Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b)
function myFunction( arr, num1, num2 ) {

    const NewArray = [];

    arr.forEach( function (item,index) {
        if (index > num1 && index < num2) {
            NewArray.push(item);
        }
    });
    return NewArray;
}


// 2. input 
let Number_A = 4;
let Number_B = 118;
const array1 = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i', 'l'];

// // 3. Usiamo i nuovi metodi degli array foreach o filter
console.log( myFunction(array1, Number_A, Number_B ) );

