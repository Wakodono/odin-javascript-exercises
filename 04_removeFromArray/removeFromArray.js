const removeFromArray = function(arr, ...valuesToRemove) {
    valuesToRemove.forEach(value => {
        while (arr.includes(value)) {
            const index = arr.indexOf(value);
            arr.splice(index, 1);
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
