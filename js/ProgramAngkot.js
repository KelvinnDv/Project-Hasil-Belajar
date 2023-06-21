var penumpang = ["Kelvin", "Tasya", "Jannah"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //! Jika angkot kosong
  if (penumpang.length == 0) {
    console.log(1);
    //* Tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //*Tambahkkan isi array dan keluar dari function
    return penumpang;
  } else {
    //? Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      //TODO jika ada kursi kosong
      if (penumpang[i] == undefined) {
        console.log(2);

        //* tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        //* kembalika isi array dan keluar dari function
        return penumpang;
      }
      //TODO jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        console.log(3);

        //* tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        //* kembalikan isi array dan keluar dari function
        return penumpang;
      }
      //TODO jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        console.log(4);

        //* tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        //* kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong.");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot.");
        return penumpang;
      }
    }
  }
  return penumpang;
};

console.log(penumpang);

tambahPenumpang("Mirna", penumpang);
tambahPenumpang("Fira 01", penumpang);
tambahPenumpang("Della", penumpang);
tambahPenumpang("Aisyah", penumpang);
tambahPenumpang("Farhah", penumpang);
tambahPenumpang("Fira 02", penumpang);
tambahPenumpang("Kak Ika", penumpang);
tambahPenumpang("Ismi", penumpang);

console.log(penumpang);
