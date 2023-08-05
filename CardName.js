//* DOM Travesal (Penulusuran DOM)


//* Event Handling
//! const close = document.querySelector('.close');
//! const card = document.querySelector ('.card');

// close.addEventListener('click',function() {
//     card.style.display = 'none'; 
// })

//* DOM Travesal
const close = document.querySelectorAll('.close ');

//! for ( let i = 0 ; i < close.length; i++) {
//!     close [i].addEventListener('click', function (e) {
//!        // close[i].parentElement.style.display = 'none';
//!         e.target.parentElement.style.display = 'none'; 

//!     }); 
//! }

close.forEach (function (el) {
    el.addEventListener('click',function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click',function(e) {
        alert('Della Sabrina');
    });
});

//* DOM Travesal Method 
//*  parentNode               hasil =       Node      
//*  parentElement            hasil =       Element
//*  nextSibling              hasil =       Node
//*  nextElementSibling       hasil =       Element
//*  previousSibling          hasil =       Node
//*  previousElementSibling   hasil =       Element

