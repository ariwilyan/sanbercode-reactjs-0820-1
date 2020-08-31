// Soal 1
/// Luas Lingkaran
let luasLingkaran = (jarijari) => {
	const phi = 3.14;
	return phi * (jarijari * jarijari);
}
/// Keliling Lingkaran
let kelilingLingkaran = (jarijari) => {
	const phi = 3.14;
	return 2 * phi * jarijari;
}
console.log("--- Soal 1 ---");
console.log("Luas Lingkaran: " + luasLingkaran(10));
console.log("Keliling Lingkaran: " + kelilingLingkaran(20));
console.log();

// Soal 2
let kalimat = "";
const tambahKata = (kata) => {
	kalimat += `${kata} `;
}
console.log("--- Soal 2 ---");
tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
console.log(kalimat);
tambahKata("frontend");
tambahKata("developer");
console.log(kalimat);
console.log();

// Soal 3
// const newFunction = function literal(firstName, lastName){
// 	return {
// 		firstName: firstName,
// 		lastName: lastName,
// 		fullName: function(){
// 			console.log(firstName + " " + lastName)
// 			return 
// 		}
// 	}
// }
 
// //Driver Code 
// newFunction("William", "Imoh").fullName()

/// Convert ES6
const newFunction = function literal(firstName, lastName) { // tetap pakai literal, jangan dihiraukan. Fokus ubah ke object literal nya saja
	return {
		firstName,
		lastName,
		fullName: () => {
			console.log(`${firstName} ${lastName}`);
		}
	}
}
// Driver Code
console.log("--- Soal 3 ---");
newFunction("William", "Imoh").fullName();
console.log();

// Soal 4
const newObject = {
	firstName: "Harry",
	lastName: "Potter Holt",
	destination: "Hogwarts React Conf",
	occupation: "Deve-wizard Avocado",
	spell: "Vimulus Renderus!!!"
}
/// ES5
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

/// ES6
const {firstName, lastName, destination, occupation} = newObject;
// Driver code
console.log("--- Soal 4 ---");
console.log(firstName, lastName, destination, occupation);
console.log();

// Soal 5
/// ES5
// const west = ["Will", "Chris", "Sam", "Holly"]
// const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)
// //Driver Code
// console.log(combined)

/// ES6
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
// Driver Code
console.log("--- Soal 5 ---");
console.log(combined);