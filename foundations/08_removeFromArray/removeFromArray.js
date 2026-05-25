const removeFromArray = function(arr, ...theNums) {
    const filter = arr.filter(removed => !theNums.includes(removed));
    return filter;
};

const array = [1, 2, 3, 4]

console.log(removeFromArray(array, 2, 1));

// Do not edit below this line
module.exports = removeFromArray;
