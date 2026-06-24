const findTheOldest = function(people) {
const getAge = function(person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    return new Date().getFullYear() - person.yearOfBirth;
  }
};

    const oldest = people.reduce((accumulator, current) => {
  const currentAge = getAge(current);
  const accumulatorAge = getAge(accumulator);
  return currentAge > accumulatorAge ? current : accumulator;
});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
