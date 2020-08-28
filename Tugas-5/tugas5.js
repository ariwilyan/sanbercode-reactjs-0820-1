// Soal 1
function halo() {
	return "Halo Sanbers!";
}
console.log("--- Soal 1 ---");
console.log(halo()); // "Halo Sanbers!"
console.log();

// Soal 2
function kalikan(parameter1, parameter2) {
	return parameter1 * parameter2;
}
 
var num1 = 12;
var num2 = 4;
 
var hasilKali = kalikan(num1, num2);
console.log("--- Soal 2 ---");
console.log(hasilKali); // 48
console.log();

// Soal 3
function introduce(nama, umur, alamat, hobi) {
	return "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!";
}
 
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log("--- Soal 3 ---");
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"
console.log();

// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = {};
objectDaftarPeserta.nama = arrayDaftarPeserta[0];
objectDaftarPeserta.jenis_kelamin = arrayDaftarPeserta[1];
objectDaftarPeserta.hobi = arrayDaftarPeserta[2];
objectDaftarPeserta.tahun_lahir = arrayDaftarPeserta[3];
console.log("--- Soal 4 ---");
console.log(objectDaftarPeserta);
console.log();

// Soal 5
// 1.nama: strawberry
//   warna: merah
//   ada bijinya: tidak
//   harga: 9000 
// 2.nama: jeruk
//   warna: oranye
//   ada bijinya: ada
//   harga: 8000
// 3.nama: Semangka
//   warna: Hijau & Merah
//   ada bijinya: ada
//   harga: 10000
// 4.nama: Pisang
//   warna: Kuning
//   ada bijinya: tidak
//   harga: 5000
var nama_buah = ["strawberry", "jeruk", "Semangka", "Pisang"];
var warna_buah = ["merah", "oranye", "Hijau & Merah", "Kuning"];
var biji_buah = [false, true, true, false];
var harga_buah = [9000, 8000, 10000, 5000];
arrayOfObjectBuah = [];
counter = 0;
while (counter < nama_buah.length) {
	objectBuah = {};
	objectBuah.nama = nama_buah[counter];
	objectBuah.warna = warna_buah[counter];
	objectBuah.ada_bijinya = biji_buah[counter];
	objectBuah.harga = harga_buah[counter];
	arrayOfObjectBuah.push(objectBuah);
	counter += 1;
}
console.log("--- Soal 5 ---");
console.log(arrayOfObjectBuah[0]);
console.log();

// Soal 6
var dataFilm = [];

function tambahDataFilm(nama_film, durasi_film, genre_film, tahun_film) {
	tampungObject = {};
	tampungObject.nama = nama_film; // tipe String
	tampungObject.durasi = durasi_film; // tipe Number atau Integer (satuan dalam menit untuk durasi)
	tampungObject.genre = genre_film; // tipe String
	tampungObject.tahun = tahun_film; // tipe Number atau Integer
	dataFilm.push(tampungObject);
}
console.log("--- Soal 6 ---");
tambahDataFilm("The Conjuring", 112, "Horror", 2013);
tambahDataFilm("Insidious: The Last Key", 103, "Horror", 2018);
tambahDataFilm("Wonder Woman", 141, "Live-Action", 2017);
console.log(dataFilm);