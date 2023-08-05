 // For..Of
 const santri = ['Kelvin','Falah','Raditya'];


 for (const m of  santri) {
    console.log(m); 
 }

 // String
 const nama = 'Kelvin';
 for (const k of nama){
    console.log(k);
 }

 // Contoh 1
 const temanBiasa = 'Thirza Nur Zanetta';
 for (const z of temanBiasa){
    console.log(z);
 }

 // Contoh 2
 const temanDekat = 'Jihan Khaerunnisa';
 for (const j of temanDekat){
    console.log(j);
 }

 // Contoh 3
 const temanMabar = 'Achmad Suhail';
 for (const a of temanMabar){
    console.log(a);
 }

// NodeList
const liNama = document.querySelectorAll('.nama');

liNama.forEach(n => console.log(n.innerHTML));

// Arguments
function jumlahkanAngka () {
    let jumlah = 0;
    for (b of arguments){
        jumlah += b;
    }
    return jumlah;
}



jumlahkanAngka (1,2,3,4,5);

console.log(jumlahkanAngka(1,2,3,4,5));

const array = ['Muhammad','Kelvin','Raditya'];
const array2 = ['Thirza','Nur','Zanetta'];
const join = [...array,'dan',...array2]
console.log(join)
 

const nama2 = document.querySelector('.nama')
const huruf = [...nama2.textContent].map(h => `<span>${h}</span>`).join('');
nama2.innerHTML = huruf;
console.log(huruf);


