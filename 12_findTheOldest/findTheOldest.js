const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const currentYear = new Date().getFullYear();
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth :
        currentYear - person.yearOfBirth;

        if (!oldestPerson || age > oldestPerson.age) {
            oldestPerson = { name: person.name, age: age };
        }
        
        return oldestPerson;
    }, null)
};

// START
// Define a function findTheOldest that takes an array of people as input
//     INITIALIZE oldestPerson to null or undefined
//     REDUCE people TO oldestPerson:
//         CALCULATE age = yearOfDeath (if available) or currentYear - yearOfBirth
//         IF oldestPerson is null or undefined THEN
//             SET oldestPerson to the current person
//         ELSE IF age of the current person is greater than age of the oldestPerson THEN
//             SET oldestPerson to the current person
//     RETURN oldestPerson
// END

// Do not edit below this line
module.exports = findTheOldest;
