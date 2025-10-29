let arr = [2, 4, 6, -3, 5, 7];

function sommeJusquaNomberNegatif() {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element > 0) {
            sum += arr[index];
        } else {
           return sum;
        }
    }
}

console.log(sommeJusquaNomberNegatif());
