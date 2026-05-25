const removeFromArray = function(arr, num) {
    const itemIndex = arr.indexOf(num);
    const removed = arr.splice(itemIndex, 1);
    return arr;
};

const array = [1, 2, 3, 4]

console.log(removeFromArray(array, 1));

// Do not edit below this line
module.exports = removeFromArray;
