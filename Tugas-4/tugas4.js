// Soal 1
console.log("LOOPING PERTAMA");
var counter_maju = 2;
var counter_mundur = 20;
var const_teks1 = "I love coding";
var const_teks2 = "I will become a frontend developer";

while (counter_maju <= 20) {
	console.log(counter_maju + " - " + const_teks1);
	counter_maju += 2;
}

console.log("LOOPING KEDUA");
while (counter_mundur >= 2) {
	console.log(counter_mundur + " - " + const_teks2);
	counter_mundur -= 2;
}
console.log("\n");

// Soal 2
for (var counter = 1; counter <= 20; counter++) {
	if (counter % 3 === 0 && counter % 2 === 1) {
		console.log(counter + " - " + "I Love Coding");
	} else if (counter % 2 === 0) {
		console.log(counter + " - " + "Berkualitas");
	} else if (counter % 2 === 1) {
		console.log(counter + " - " + "Santai");
	}
}
console.log("\n");

// Soal 3
var counter1 = 1;
while (counter1 <= 7) {
	counter2 = 1;
	tampung = "";
	while (counter2 <= counter1) {
		tampung += "#";
		counter2 += 1;
	}
	console.log(tampung);
	counter1 += 1;
}
console.log("\n");

// Soal 4
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));
console.log("\n");

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
urut = daftarBuah.sort();
var counter = 0;
while (counter < urut.length) {
	console.log(urut[counter]);
	counter += 1;
}