var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
let time = 10000;
let index = 0;

function janjiBacaBuku() {
	readBooksPromise(time, books[index])
		.then(function(sisaWaktu) {
			time = sisaWaktu;
			index += 1;
			if (index < books.length) {
				janjiBacaBuku();
			}
		})
		.catch(function(error) {
			console.log(error.message);
		})
}

// Soal 2
console.log("--- Soal 2 ---");
janjiBacaBuku();