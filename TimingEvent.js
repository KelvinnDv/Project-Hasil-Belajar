// setTimeOut()
// setInterval()

// const tes = setTimeout(function(){
//     console.log('Timing Event');
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function(){
//     clearTimeout(tes);
//     console.log('Selesai');
// });

//* Latihan1
//TODO : Membuat Program StopWacth
//! Perhatian...Bukan Untuk Pemula
//? Silahkan Jika Ingin Bertanya Di Akhir

const tanggalTujuan = new Date("Mar 28,2023 22:23:00").getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const teks = document.getElementById("teks");
  teks.innerHTML =
    `Waktu anda tinggal ${jam} jam ${menit} menit ${detik} detik lagi`;

  if (selisih <= 0) {
    clearInterval(hitungMundur);
    teks.innerHTML = "Waktu anda telah habis.";
  }
}, 1000);
