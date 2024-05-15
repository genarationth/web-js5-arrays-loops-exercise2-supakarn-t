// Part 1 - start queue
let people = ["Sofia", "David", "Juan"];

// Part 2 - 2 pp enter and 1st pp leave
people.push("Sara", "Augustin");
people.shift();
console.log(people);

// Part 3 - 1 pp enter behind 1st pp and 1 pp enter (at end)
people.splice(1, 0, "Renata");
people.push("Elena");
console.log(people);
