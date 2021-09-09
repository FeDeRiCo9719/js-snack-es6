/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/*
FUNCTION
*/ 
const numRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);   // codice su una riga sola
/*
const numRandom = (min, max) => {
    Math.floor(Math.random() * (max - min + 1) + min);
}
*/


// 1. Creare un array di oggetti di squadre di calcio.
// - Ogni squadra avrà diverse proprietà: nome, goal fatti, goal subiti.
// - Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const Teams = [
    {
        nome: 'team_A',
        goalFatti: 0,
        goalSubiti: 0
    },

    {
        nome: 'team_B',
        goalFatti: 0,
        goalSubiti: 0
    },

    {
        nome: 'team_C',
        goalFatti: 0,
        goalSubiti: 0
    },

    {
        nome: 'team_D',
        goalFatti: 0,
        goalSubiti: 0
    }
];

console.log (Teams);

// 2. Generare numeri random al posto degli 0 nelle proprietà: goal fatti e goal subiti.
for ( let i=0; i < Teams.length; i++ ) {

    Teams[i].goalFatti= numRandom(i, 5);
    Teams[i].goalSubiti= numRandom(0, 5);

    console.log( `goal Fatti ${Teams[i].goalFatti}` );
    console.log( `goal Subiti ${Teams[i].goalSubiti}` );
    console.log('');
}


// 3. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e goal subiti e stampiamo tutto in console.
// const [ {nome, goalSubiti}, {}, {}, {} ] = Teams;
// console.log (nome, goalSubiti);

const NewArray = [];

for ( let i=0; i < Teams.length; i++ ) {

    NewArray.push( Teams[i].nome );
    NewArray.push( Teams[i].goalSubiti );

}

console.log (NewArray);

