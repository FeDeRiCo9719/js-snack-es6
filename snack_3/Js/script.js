/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b)
// function myFunction( arr, num1, num2 ) {

//     const Array = [];

//     arr.forEach( function (item,index) {
//         if (index > num1 && index < num2) {
//             Array.push(item);
//         }
//     });
//     return Array;
// }

function myFunction_2( arr, num1, num2 ) {

    const Array = [];

    arr.forEach(
        (item, index) => {
            if (index > num1 && index < num2) {
                Array.push(item);
            }
        }
    );

    return Array;
}

// const myFunction_3 = ( arr, num1, num2 ) => {
//     return arr.filter(
//         (item,index) => {
            
//         }
//     );
// }

/*
programma
*/

// 1. input 
let Number_A = 4;
let Number_B = 9;
const array1 = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i', 'l'];

// // 2. Usiamo i nuovi metodi degli array foreach o filter
const NewArray = myFunction_2(array1, Number_A, Number_B );
console.log(NewArray);


