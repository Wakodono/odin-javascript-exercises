const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const strToBeChecked = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleaned string is a palindrome
    const reversed = strToBeChecked.split('').reverse().join('');
    return strToBeChecked === reversed;
};


// Do not edit below this line
module.exports = palindromes;
