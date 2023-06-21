//TODO : Callback
//! INGAT: Callback adalah "Function yang di kirimkan sebagai parameter pada function yang lain."

//* Callback
//* "Function yang di eksekusi setelah fungsi lain selesai dijalankan."

//* Callback
//* Synchronous Callback
function halo (nama) {
    alert (`Hai ${nama}...ada yang bisa saya bantu?`);
}

function tampilkanPesan  (callback) {
    const  nama = prompt ('Masukkan Nama  :')
    callback (nama);
}

tampilkanPesan (halo);

//* Contoh

const santri = [
    {
    "Nama" : "Muhammad Kelvin Raditya+",
    "Nrl" : "0851 7445 4113",
    "Email" : "Muhammadkelvinraditya@gmail.com",
    "Jurusan" : "Tehnik Informatika",
    "Kelas" : "1 SMA "
    },
    {
    "Nama" : "Tasya Nur Hidayat+",
    "Nrl" : "0812 9277 8567",
    "Email" : "Tasyanurzanetta@gmail.com",
    "Jurusan" : "Agribisnis Pengolahan Hasil Pertanian",
    "Kelas" : "1 SMA",
    },
    {
    "Nama" : "Della Sabrina+",
    "Nrl" : "0895 4879 8546",
    "Email" : "Dellasabrina@gmail.com",
    "Jurusan" : "Agribisnis Taman Pangan dan Hortikultura"
    },
];

console.log ('Mulai berhubungan');
santri.forEach (m => {
    for (let i = 0; i < 10000000; i++) {
        let date = new Date ();
    }
    console.log(m.Nama)
});
console.log('Hamil...');

//* Asynchoronous Callback
// function getDataSantri(url,success,error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if ( xhr.readyState === 4) {
//             if (xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if (xhr.status === 404 ) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('Mulai')
// getDataSantri('data/santri.json',(result) => {
//    const santri = JSON.parse(result);
//    santri.forEach (m => console.log(m.nama));
// }, () => {
// });
// console.log('Selesai');

//* Callback Part 2



