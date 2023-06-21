//* Promise
//* Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchoronous dimasa yang akan datang
//*  Janji (terpenuhi / ingkar )
//*  States (fulfilled / rejected / pending)
//*  Callback (resolve / reject / finally)
//*  Aksi ( then  /  catch )

//* Contoh 1
let diTepati = true;
const janji1 = new Promise ((resolve, reject) => {
   if  ( diTepati ) {
    resolve('Janji telah di tepati!');
   } else {
    reject('Ingkar janji...');
   }
});

janji1
    .then(Response => console.log('Oke : '+ Response))
    .catch(Response => console.log('Not Ok :' + Response ));

//* Contoh 2
let ditepati = true;
const janji2 = new Promise ((resolve, reject) =>  {
    if (diTepati) {
        setTimeout(() => {
            resolve('di tepati setelah beberapa waktu ');
        }, 2000)
    } else {
        setTimeout(() => {
            resolve(' tidak di tepati setelah beberapa waktu ');
        }, 2000)
    }
});

console.log('Mulai');;
janji2
    .finally(() => console.log('Selesai menunggu'))
    .then ( Response => console.log('Oke : ' + Response))
    .catch (Response => console.log('Not OKay : ' + Response));
console.log('selesai');

//* Promise.all()

const film = new Promise (resolve => {
   setTimeout(() => {
    resolve([{
        judul: 'Avengers',
        sutradara: 'Joe Russo ',
        actor: 'Kelvin,falah,raditya'
    }])
   }, 1000);
});


const cuaca  = new promise(resolve => {
     setTimeout (() => {
         resolve([{
           kota: 'Makassar',
           tempt: 24,
           ket: 'Cerah'
         }]);
     }, 500);
});


film.then (response => console.log(response));
cuaca.then(response => console.log(response));

//! Cara cepat
promise.all([film,cuaca])
//    .then(response => console.log(response));
   .then(response =>  {
    const [fillm,cuaca] = response;
    console.log(film);
    console.log(cuaca);
   });