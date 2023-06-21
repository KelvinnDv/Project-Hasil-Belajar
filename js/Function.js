function jumlahVolumeDuaKubus (a,b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total; 
}

console.log (jumlahVolumeDuaKubus (8,3));


function tambah(a,b){
    return a + b;
}




 var a = parseInt(prompt('Masukkan nilai pertama :'));
 var b = parseInt(prompt('Masukkan nilai kedua :'));
 var hasil = tambah (a*2,b*2);
 console.log (hasil);

