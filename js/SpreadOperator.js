//TODO Spread Operator
// Memecah  iterables menjadi single element

const santri = ['Kelvin','Fitrah','Arham'];
console.log(...santri[2])

// Menggabungkan 2 array
const santriwati = ['Della','Mirna','Elsa'];
const santriwan = ['Kamal',"Ma'ruf",'Aswad'];
const kelasAphp = [...santriwan,...santriwati,...santri];

//! Hati-hati salah ketik
//! const kelasAphp = [santriwan,santriwati]
// Yang ada malah array di dalam array

// Meng-copy array
const santriMts = ['Nabil','Rasyid','Imun'];


//! Hati-hati keliru meng-copy array
//! santri1[0] = 'Nisa'; Jika melakukan hal seperti ini maka kedua variabel akan bersamaan terganti
//! const santri1 = santriMts

//* Yang seharusnya di lakukan ketika meng-copy array
 const santri1 = [...santriMts]; //* Jadi jika sudah seperti ini,maka biarpun variabel 1 d ganti maka tdk akan berpengaruh pada variabel kedua;

// Rest Parameter

function myFuct(a,b,c,...rest) {
   return arguments;
}

const ketua = ['Kelvin','Falah','Raditya'];
const wakil = ['Harun'];

console.log();





console.log(myFuct(1,2,3,4,5));






