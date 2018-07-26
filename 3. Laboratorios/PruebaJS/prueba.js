
console.log(2 + 2);

function randomGenerator(callback){
    var quantity = 10, randoms = [];
    
    for(var i = 0; i < quantity; i++) {
        randoms.push(Math.floor((Math.random() * 10) + 1));
    }

    return typeof(callback) !== "undefined"? callback(randoms): randoms;
}
console.log(typeof(callback));