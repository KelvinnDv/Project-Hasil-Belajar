// Object Literal
var santri = {
  nama: "Muhammad Kelvin Raditya",
  umur: 16,
  kelas: "1 SMA",
  nilaiUas: [90, 89, 95, 97, 85],
  alamat: {
    jalan: "Jln.Bakung Raya",
    kecamatan: "Somba Opu",
    kabupaten: "Gowa",
  },

  nilaiKumutatif: function () {
    var total = 0;
    var nilai = this.nilaiUas;
    for (var i = 0; i < nilai.length; i++) {
      total += nilai[i];
    }
    return total / nilai.length;
  },
};
santri.nilaiKumutatif();

var santri2 = {
  nama: "Rezky",
  umur: 15,
  kelas: 1,
  alamat: {
    kabupaten: "Gowa",
    jalan: "jln.Mangka Daeng Bombong",
    kecamtan: "Somba Opu",
  },
};

var santri3 = {
  nama: "Firman",
  umur: 15,
  jenisKelamin: "Laki laki",
  kota: "Makassar",
  alamat: {
    jalan: "Bakung Raya",
    rumah: "Baruga Samata",
    Kodepos: 1225159233,
  },
};

// Function Decleration
function buatObjectSantri(nama, umur, kelas, gender) {
  var ikhwan = {};
  ikhwan.nama = nama;
  ikhwan.umur = umur;
  ikhwan.kelas = kelas;
  ikhwan.gender = gender;
  return ikhwan;
}

var ikhwan1 = buatObjectSantri("Fitrah", 16, "1 SMK", "Laki laki");

// Constructor
function Ustadzah(nama, umur, gender, hobi) {
  this.nama = nama;
  this.umur = umur;
  this.gender = gender;
  this.hobi = hobi;
}

var ikhwan2 = new Ustad("Kak Riswan", 16, "Laki laki", "Membaca Buku");

// This
console.log(ikhwan2);
console.log(santri);



