var tanya = true;
while (tanya == true) {
  // * Menagkap Pilihan Player //

  var p = prompt("Masukkan pilihanmu : Gajah, Semut Atau Orang");

  // ! Menangkap Pilihan Computer /   

  // TODO Membangkitkan Bilangan Random //
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Orang";
  } else {
    comp = "Semut";
  }

  var hasil = "";
  // TODO Menentukan Rules //

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "Gajah") {
    //     if (comp == 'Orang') {
    //         hasil = 'MENANG';
    //     } else {
    //         hasil = 'KALAH';
    //     }
    hasil = comp == "Orang" ? "MENANG" : "KALAH";
  } else if (p == "Orang") {
    hasil = comp == "Gajah" ? "KALAH" : "MENANG";
  } else if (p == "Semut") {
    hasil = comp == "Orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "Memasukkan pilihan yang salah!!";
  }

  // TODO Tampilkan Hasilya //
  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\nMaka hasilnya : Kamu " +
      hasil
  );

  tanya = confirm("Lagi?");

    
} 
     alert("Terima Kasih Sudah Bermain.");
 
 
