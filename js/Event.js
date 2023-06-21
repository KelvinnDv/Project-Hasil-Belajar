//* DOM Events
//! Perlu diketahui bahwasanya Events tidak sama dengan Even

//* "Event pada Javascript  mempresentasikan sebuah kejadian yang terjadi didalam DOM...Kejadian tersebut bisa dilakukan oleh user (mouse event,keyboard event,dll.)"

//* Bisapun juga dilakukan oleh API(Animasi selesai dijalankan,halaman selesai diload,dll)

//* Cara 'mendengarkan' Event 
//* Event Handler 
//*  *Inline HTML Attribute
//*  *Element Method
//* addEventListener()

//* Event Handler on<event> yang bernama onclick

const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

//* addEventListener()

// lauren Aquilina - King