// Nullable conversion
// you are given an object with properties that may contain null or undefined values. Your task is to implement a function called convertNullableValues that checks if any of the properties in the object contains null or undefined. If a property is null convert it to zero and if a property is undefined convert it to an empty string. Return the modified object.
const convertNullableValues = (object) => {
    for(let key in object){
        if(object[key] === null){
            object[key] = 0;
        }else if(object[key] === undefined) {
            object[key] = '';
        }
    }
    return object;
}

const object = {
    julia: 20,
    james: null,
    address: undefined,
    country: "rwanda"
}
console.log(convertNullableValues(object))