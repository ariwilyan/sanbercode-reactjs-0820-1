// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var tampung = kataKedua[0].toUpperCase().concat(kataKedua.substr(1));
console.log(kataPertama + " " + tampung + " " + kataKetiga + " " + kataKeempat.toUpperCase() + "\n");

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
console.log("Jumlah: " + (parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat)) + "\n");

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substr(15, 3); // do your own! 
var kataKeempat = kalimat.substr(19, 5); // do your own! 
var kataKelima = kalimat.substring(25); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima + "\n");

// Soal 4
var nilai = 85; // saya pilih angka 85

if (nilai >= 80) {
	console.log('A\n');
} else if (nilai >= 70 && nilai < 80) {
	console.log('B\n');
} else if (nilai >= 60 && nilai < 70) {
	console.log('C\n');
} else if (nilai >= 50 && nilai < 60) {
	console.log('D\n');
} else if (nilai < 50) {
	console.log('E\n');
}

// Soal 5
var tanggal = 3;
var bulan = 1;
var tahun = 1998;

switch(bulan) {
	case 1: {
		bulan = "Januari";
		break;
	}
	case 2: {
		bulan = "Februari";
		break;
	}
	case 3: {
		bulan = "Maret";
		break;
	}
	case 4: {
		bulan = "April";
		break;
	}
	case 5: {
		bulan = "Mei";
		break;
	}
	case 6: {
		bulan = "Juni";
		break;
	}
	case 7: {
		bulan = "Juli";
		break;
	}
	case 8: {
		bulan = "Agustus";
		break;
	}
	case 9: {
		bulan = "September";
		break;
	}
	case 10: {
		bulan = "Oktober";
		break;
	}
	case 11: {
		bulan = "November";
		break;
	}
	case 12: {
		bulan = "Desember";
		break;
	}
	default: {
		bulan = "invalid";
		break;
	}
}
console.log(tanggal.toString() + " " + bulan + " " + tahun.toString());