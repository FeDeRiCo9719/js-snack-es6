/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


// 1.Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const Bikes = [
    {
        nome: 'alpha',
        peso: 20
    },

    {
        nome: 'beta',
        peso: 17
    },

    {
        nome: 'gamma',
        peso: 18
    },

    {
        nome: 'delta',
        peso: 14
    }
]

// 2.Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let bike = Bikes[2];

for ( let i = 0; i < Bikes.length; i++ ) { // => cicla 4 volte 

    // ( se 20 < 18  |  se 17 < 18 =>  bike.peso = 17 |  se 18 < 17  |  se 14 < 17 =>  bike.peso = 14 )  =>  bike.peso = 14
    if ( Bikes[i].peso < bike.peso ) {  
        
        bike = Bikes[i];
    }
}

console.log( `La bici più leggera è la bici ${bike.nome} e ha un peso di ${bike.peso} gr` );


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// const Biciclette = {
//     nome: 'alpha',
//     peso: 20
// };
// const {nome, peso} = Biciclette;
// console.log( nome, peso );


// const bikes = ['one', 'two', 'three'];
// const [we, ue] = bikes;
// console.log(we, ue);




