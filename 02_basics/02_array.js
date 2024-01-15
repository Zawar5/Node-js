const marvel_heros = ["Asad", "Ahad", "Zawar"]

const dc_heros = ["Mobeen", "Arsh", "Ali"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const myrealAnotherArr = another_array.flat(Infinity)

console.log(myrealAnotherArr);

// console.log(Array.isArray("Zawar"));

console.log(Array.from("Zawar")); // Conver into arry via From function

console.log(Array.from({name: "Zawar"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
