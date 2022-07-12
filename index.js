function myEach (collection, alert){
   for (let value in collection){
       alert(collection[value])
   }
    return collection
}

function myMap (collection, callback){
    let collArray = Object.values(collection)
    let newArray = collArray.map(e => callback(e))
    return newArray
}

function myReduce(collection, callback, acc){
    let collArray = Object.values(collection)
    if (!acc) {
        acc = collArray[0]
        collArray = collArray.slice(1)
    };
    for (let i =0; i<collArray.length; i++){
acc = callback(acc, collArray[i], collArray)
    }
return acc}

function myFind (collection, predicate){
    let collArray = Object.values(collection)
    for (let i=0; i<collArray.length; i++){
        if(predicate(collArray[i])){
            return collArray[i]
        }
    }
}

function myFilter (collection, predicate){
    let collArray = Object.values(collection);
    let newArray =[]
    collArray.forEach(element => {
        if (predicate(element)){
            newArray.push(element)
        }
    });
    return newArray  
}

function mySize(collection){
    let collArray = Object.values(collection);
    return collArray.length
}

function myFirst(array, num) {
    if (!num){
        return array[0]
    }
    else{
        return array.slice(0, num)
    }

}

function myLast(array, num){
    let last = array.length -1
    let arraynum = array.length-num
if (!num){
    return array[last]
}
return array.slice(arraynum)
}

function myKeys(object) {
return Object.keys(object)
}

function myValues(object){
    return Object.values(object)

}