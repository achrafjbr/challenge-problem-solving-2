let arr = [1, 2, 2, 3, 4, 4, 5, 5];

let obj = new Object();
let newArr = [];

function supprimerDoublons() {
    for (let index = 0; index < arr.length; index++) {
        let value = arr[index];
        if (obj.hasOwnProperty(value) == false) {
            newArr.push(value);
            obj[value] = index;
        }
    }

    return newArr;
}

console.log(supprimerDoublons());
