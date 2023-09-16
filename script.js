const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let developers = data.filter(person => person.profession === "developer");
  developers.forEach(person => console.log(person.name));
}

// 2. Add Data
function addData() {
  let name = prompt("Enter name:");
  let age = parseInt(prompt("Enter age:"));
  let profession = prompt("Enter profession:");
  data.push({ name, age, profession });
}
// 3. Remove Admins
function removeAdmin() {
  data = data.filter(person => person.profession !== "admin");
}

// 4. Concatenate Array
function concatenateArray() {
  let dummyArray = [
    { name: "Alice", age: 30, profession: "designer" },
    { name: "Bob", age: 35, profession: "manager" },
  ];
  let concatenatedArray = data.concat(dummyArray);
  console.log(concatenatedArray);
}

// 5. Average Age
function averageAge() {
  let totalAge = data.reduce((sum, person) => sum + person.age, 0);
  let average = totalAge / data.length;
  console.log(`Average Age: ${average}`);
}

// 6. Age Check
function checkAgeAbove25() {
  let isAbove25 = data.some(person => person.age > 25);
  console.log(`Is there anyone above 25 old -? ${isAbove25 ? "Yes" : "No"}`);
}

// 7. Unique Professions
function uniqueProfessions() {
  let professions = [...new Set(data.map(person => person.profession))];
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  let john = data.find(person => person.name === "john");
  if (john) {
    john.profession = "manager";
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let professionCount = {
    developer: 0,
    admin: 0,
  };

  data.forEach(person => {
    if (person.profession === "developer") {
      professionCount.developer++;
    } else if (person.profession === "admin") {
      professionCount.admin++;
    }
  });

  console.log("Profession Count:", professionCount);
}
