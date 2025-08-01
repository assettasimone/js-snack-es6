/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bikes = [
    {
        nome: 'Colnago',
        peso: 6
    },
    {
        nome: 'Atala',
        peso: 3
    },
    {
        nome: 'Specialized',
        peso: 5
    },
    {
        nome: 'Merida',
        peso: 8
    }

]

console.log(bikes);

//dichiaro una variabile d'appoggio per vedere quale è la bici più leggera
let ligthBike = {
    nome: '',
    peso: 999999
};

//ciclo tutte le bici all'interno dell'array
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];

    //se la bici è più leggera della va
    if (ligthBike.peso > bike.peso) {
        ligthBike = bike;
    }
}

const outputEl = document.querySelector('.output')
console.log(outputEl);


outputEl.innerHTML = `
    <p>la bici più leggera è ${ligthBike.nome} con un peso di ${ligthBike.peso} kg</p>  `


/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 */

//dichiaro l'array di ogetti per le squadre di calcio
const soccerTeams = [
    {
        "nome": 'juventus',
        "punti fatti": 0,
        "falli subiti": 0
    },
    {
        "nome": 'Inter',
        "punti fatti": 0,
        "falli subiti": 0
    },
    {
        "nome": 'Milan',
        "punti fatti": 0,
        "falli subiti": 0
    },
    {
        "nome": 'Roma',
        "punti fatti": 0,
        "falli subiti": 0
    },
    {
        "nome": 'Sampdoria',
        "punti fatti": 0,
        "falli subiti": 0
    }

]

/* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
 */

for (let i = 0; i < soccerTeams.length; i++) {

    soccerTeams[i]["falli subiti"] = getRndInteger(0, 68);
    soccerTeams[i]["punti fatti"] = getRndInteger(0, 99);

}

console.log(soccerTeams);

/* Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const teamPenalty = [];

for (let i = 0; i < soccerTeams.length; i++) {

    const Team = soccerTeams[i];

    teamPenalty.push({
        "nome": Team["nome"],
        "falli subiti": Team["falli subiti"]
    })
}



console.log(teamPenalty);





//funzione Helper per numeri random

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}