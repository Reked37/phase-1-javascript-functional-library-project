// Test 1
function myEach(collection,alert){
    if(Array.isArray(collection) === true){
        collection.forEach(element => alert(element))
    }
    else{
        Object.values(collection).forEach(value=>alert(value))
    }
    return collection
}

// Test 2
function myMap(collection, multiply){
    let newMap =[]
    if(Array.isArray(collection) === true){
        newMap = collection.map(element => multiply(element))
    }
    else{
        newMap = Object.values(collection).map(value=>multiply(value))
    }
    // console.log(newMap)
    return newMap
}
// Test 3
function myReduce(collection, callback, startValue){
    let total = 0
    console.log('startValue:',startValue)
    if(Array.isArray(collection) == true){
        const newCollection = [...collection]
        if(startValue === undefined){
            startValue = collection[0]
            newCollection.shift()
            // console.log('collection:', collection)
            // console.log('startValue:', startValue)
        }
        // total = collection.reduce((acc, element) => {
        //     console.log('this is the accumlator:', acc)
        //     return callback(acc, element, startValue)
        // })
        for(let i=0;i<newCollection.length;i++){
             startValue =callback(startValue,newCollection[i])
            console.log('total:',startValue)
        }
       // console.log('total:', total)
        console.log('collection:', collection)
    }
    // else if(Array.isArray(collection) === true && start === Number){
    //     total = collection.reduce((acc, element) => callback(acc, element), start)
    //}
    else{
        total = Object.values(collection).reduce((acc, element) => callback(acc, element))
        return total
    }
    // console.log(total)
    return startValue
}

// Test 4
function myFind(collection, predicate){
    let value = ''
    if(Array.isArray(collection) === true){
        value = collection.find(element => predicate(element))
    }
    else{
        value = Object.values(collection).find(element=> predicate(element))
    }
    // console.log(value)
    return value
}
// Test 5
function myFilter(collection, predicate){
    let arrayValue = []
    if(Array.isArray(collection) === true){
        arrayValue = collection.filter(element => predicate(element))
    }
    else{
        arrayValue = Object.values(collection).filter(element=> predicate(element))
    }
    // console.log(arrayValue)
    return arrayValue
}
// Test 6
function mySize(collection){
    let newCollection =new Set();
    if(Array.isArray(collection) === true){
        newCollection = new Set(collection);
        return newCollection.size
    }
    else{
        let objValues= Object.values(collection)
        newCollection = new Set(objValues)
        return newCollection.size
    }
}
// Test 7
function myFirst(array, n){
    if(n >0){
        let total = array.slice(0,n)
        return total
    }else{
        //let total = array.slice(0,1)
        return array[0]
    }
}

// Test 8
function myLast(array, n){
    if(n>0){
        let total = array.slice(-n)
        console.log(total)
        return total
    }else{
        let total = array.slice(-1)
        console.log(total)
        return total[0]
    }
}

// Test 9
function myKeys(object){
    return Object.keys(object)
}

// Test 10
function myValues(object){
    return Object.values(object)
}

//Bonus
function mySortBy(array, callback){

}

//Bonus
function myFlatten(array,[shallow],newArr=[]){

}



