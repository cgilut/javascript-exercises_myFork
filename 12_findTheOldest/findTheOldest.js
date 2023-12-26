const findTheOldest = function(people) {

  // let peopleAge = people
  let currentYear = new Date().getFullYear()
  let age
  let maxAge = 0
  let oldestPerson = ""

  for (let i = 0; i < people.length; i++) {

    let person = people[i]


    if (!('yearOfDeath' in person) || person.yearOfDeath == ""){
      age = currentYear - person.yearOfBirth
    } else {
      age = person.yearOfDeath - person.yearOfBirth
    }
    person.age = age

    if (age > maxAge) {
      maxAge = age
      oldestPerson = person
    }
  }
  return oldestPerson;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
