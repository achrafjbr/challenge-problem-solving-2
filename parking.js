let places = [1, 1, 0, 1, 0];


function premierPlaceLibre() {
    for (let index = 0; index < places.length; index++) {
       if(places[index] == 0){
            return index;
       }if(places[index]==0 && index ==0){
            return 0;
       }
    }
}

console.log(premierPlaceLibre());
