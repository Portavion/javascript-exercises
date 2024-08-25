const findTheOldest = function(originalArray) {
    let ageArray = [];
    let date = new Date();
    originalArray.forEach(person => {
        if (person.yearOfDeath !== undefined){
            ageArray.push({name:person.name, age:(person.yearOfDeath - person.yearOfBirth)});
        }
        else{
            ageArray.push({name:person.name, age:(date.getFullYear() - person.yearOfBirth)});
        }
    })
    ageArray.sort((a,b) => (a.age-b.age)>=0 ? -1 : 1);
    console.log(ageArray);
    return ageArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
