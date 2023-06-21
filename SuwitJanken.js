function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "kertas";
  return "batu";
}

function getHasil(comp, player) {
  if (player == comp) return "Seri";
  if (player == "batu") return comp == "gunting" ? "Menang!" : "Kalah...";
  if (player == "kertas") return comp == "gunting" ? "Kalah..." : "Menang!";
  if (player == "gunting") return comp == "kertas" ? "Menang!  " : "Kalah...";
}

function putar ( ) {
   const imgComputer = document.querySelector('.img-komputer');
   const gambar = ['batu', 'kertas','gunting'];
   let i = 0;
   const waktuMulai = new Date().getTime(); 
   setInterval(function ( ) {
           if (new Date ().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
           }
           imgComputer.setAttribute('src', gambar[i++] + '.jpeg')
          if (i == gambar.length) {
            i = 0
          }


   }, 100)
}



const pilihan = document.querySelectorAll('li img');
pilihan.forEach (function(pil) {
    pil.addEventListener('click', function() {
         const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pil.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("player : " + pilihanPlayer);
  console.log("hasil : " + hasil);

  putar();
  setTimeout(function() {

    const imgComputer = document.querySelector(".img-komputer");
    imgComputer.setAttribute("src", pilihanComputer + ".jpeg");
  
    const info = document.querySelector(".info");
    info.innerHTML = hasil;

  }, 1000);


  
    });
});
 












// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player : " + pilihanPlayer);
//   console.log("hasil : " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", pilihanComputer + ".jpeg");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
