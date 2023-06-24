export function checkForObjectInArray(object, array){
    for(let i=0; i<array.length; i++){
        if(array[i].name===object.name&&array[i].size===object.size){
        return i
        }
    }
        return false
    }