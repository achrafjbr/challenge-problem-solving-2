
let arr = [1, 2, 3]

function tableauMiroir() {
    arr.push(...arr);

    

    let temp;
    let left = parseInt(arr.length/2);
    let rigth = arr.length-1;

    while (left < rigth) {
        temp = arr[left];
        arr[left] =  arr[rigth];
        arr[rigth] = temp;
        left++; rigth--;
    }

    return arr;
}

console.log(tableauMiroir());