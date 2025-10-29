// 

let voyellesObject = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
};

function compteVoyelles(mot) {
    let voyellesCounteur = 0;
    for (let index = 0; index < mot.length; index++) {
        if (voyellesObject[mot[index]] != null) {
            voyellesCounteur++;
        }
    }

    return voyellesCounteur;

}

console.log(compteVoyelles('development'));
