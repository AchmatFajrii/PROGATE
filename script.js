// const darkButton = document.getElementById('dark');
// const textDark = document.querySelector('.textdark');
// const headingDark4 = document.querySelector('h4');
// const headingDark3 = document.querySelector('h3');
// const headingDarkID3 = document.querySelector('#h3');
// const paragraf = document.querySelector('p');
// const textEmail = document.querySelector('#email');
// const textMessage = document.querySelector('#message');
// const p1 = document.querySelector('#p1');
// const p2 = document.querySelector('#p2');
// const p3 = document.querySelector('#p3');


// darkButton.addEventListener('click', function () {
//     document.body.style.backgroundColor = '#292929';
//     darkButton.innerHTML = 'Light Mode';
//     darkButton.style.backgroundColor = 'white';
//     darkButton.style.color = '#292929';
//     textDark.style.color = 'white';
//     headingDark4.style.color = 'white';
//     headingDark3.style.color = 'white';
//     headingDarkID3.style.color = 'white';
//     paragraf.style.color = 'white';
//     textEmail.style.color = 'white';
//     textMessage.style.color = 'white';
//     p1.style.color = 'white';
//     p2.style.color = 'white';
//     p3.style.color = 'white';
//     alert('refresh kembali untuk tampilan light mode');
// })

function myFunction() {
  let x = document.getElementById("myTopnav");
  let dark = document.querySelector('.dark-mode');

  if (x.className === "topnav") {
    x.className += " responsive";
    dark.style.display = 'none';
  } else {
    x.className = "topnav";
    dark.style.display = 'flex';
  }
}

const tChange = document.querySelector('button.change');
const title = document.querySelector('.title');
const title2 = document.querySelector('.title h3');
const title3 = document.querySelector('.title h4');
const paragraf = document.querySelector('.title p');
const tImage1 = document.querySelector('.image p');
const tImage2 = document.querySelector('.image2 p');
const tImage3 = document.querySelector('.image3 p');
const title4 = document.querySelector('h3.contact');
const labelEmail = document.querySelector('label#email');
const labelMessage = document.querySelector('label#message');

tChange.addEventListener('click', function() {
    document.body.classList.toggle('light-dark-mode');
    title.classList.toggle('text-white');
    title2.classList.toggle('text-white');
    title3.classList.toggle('text-white');
    title4.classList.toggle('text-white');
    paragraf.classList.toggle('text-white');
    tImage1.classList.toggle('text-white');
    tImage2.classList.toggle('text-white');
    tImage3.classList.toggle('text-white');
    labelEmail.classList.toggle('text-white');
    labelMessage.classList.toggle('text-white');
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

const modal = document.getElementById("myModal");
    const openButton = document.getElementById("openModalButton");
    const closeIcon = document.getElementById("closeModalIcon");

    // Ketika tombol openButton ditekan
    openButton.addEventListener('click', () => {
        modal.style.display = "block";
    });

    // Ketika tombol closeButton ditekan
    closeIcon.addEventListener('click', () => {
        modal.style.display = "none";
    });