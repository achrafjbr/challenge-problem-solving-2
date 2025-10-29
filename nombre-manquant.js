
let manquantArray = [1, 2, 3, 5];

function manquant() {

    for (let index = 1; index < manquantArray.length; index++) {
        let previousElement = manquantArray[index - 1];
        let currentElement = manquantArray[index];

        if( currentElement-1 != previousElement ){
            return previousElement+1;
        }

    }

}

console.log(manquant());
