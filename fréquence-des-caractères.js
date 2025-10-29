

let fréquenceDesCaractèresObjet = {};

function fréquenceDesCaractères(mot) {
    for (let index = 0; index < mot.length; index++) {

        if (fréquenceDesCaractèresObjet[mot[index]] == null) {
            fréquenceDesCaractèresObjet[mot[index]] = 1;
        } else {
            fréquenceDesCaractèresObjet[mot[index]] += 1;
        }
    }

    return fréquenceDesCaractèresObjet;
}

console.log(fréquenceDesCaractères('hello'));


