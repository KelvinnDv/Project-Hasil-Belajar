// Ambil semua elemen video;
 const videos = Array.from(document.querySelectorAll ('[data-duration]'));
 

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
 const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
 
// Ambil durasi masing masing video
 .map(item => item.dataset.duration)

// Ubah durasi menjadi float, ubah menit menjadi detik 
 .map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return parts [0] * 60 + parts[1];
 })

// Jumlahkan semua detik 
 .reduce((total, detik)  => total + detik);

// Ubah formatnya jadi jam menit detik
 const jam  = Math.floor(jsLanjut / 3600); 
 const jsLanjutan = jsLanjut - jam * 3600;
 const menit = Math.floor(jsLanjut / 60);
 const detik = jsLanjut - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
const jmlVideo  = videos.filter(video => video .textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jsLanjut);



