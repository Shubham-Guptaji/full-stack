// Check if customIncludes method is already defined
if (!Array.prototype.customIncludes) {

    // Define the customIncludes method
    Array.prototype.customIncludes = function(val) {
        for(let i = 0; i<this.length; i++){
            if(this[i] === val) return true
        }
        return false;
    };
}

// Defined the array of numbers.
const arr = [5,1,23,53,87];

// Calling the customIncludes method.
let fineOne = arr.customIncludes(23);
let findTwo = arr.customIncludes(37);

// logging the results.
console.log('first result', fineOne);
console.log('second result', findTwo);
