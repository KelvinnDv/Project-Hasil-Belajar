// Belajar Bareng Array

var array = ['Hai nama saya Kelvin',7.00,'16 tahun',true,20];
console.log(array.join('-'));



var kelvin = array.includes('Hai nama saya Kelvin')
console.log (kelvin)


// Cara Kedua Membuat Array

arrayDua = []
arrayDua[0] = 'Hai'
arrayDua[1] = 'nama'
arrayDua[2] = 'saya'
arrayDua[3] = 'Kelvin'

arrayDua.splice(4,0,'dan ini adalah teman saya namanya Thirza')
console.log(arrayDua);





// Contoh Kasus
var umur = '16 tahun';
var kelas = '1 SMA';
var hobi = 'baca novel';
var crushSaya = 'Thirza Nur Zanetta';

alert (`Hai nama saya ${pacarSaya} umur saya ${umur} saya ${kelas}, hobi saya adalah ${hobi}.Saya adalah crushnya Kelvin`);

