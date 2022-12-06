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
const title2 = document.querySelector('#about .title h3');
const title3 = document.querySelector('.title h4');
const paragraf = document.querySelector('.title p');
const tImage1 = document.querySelector('.image p');
const tImage2 = document.querySelector('.image2 p');
const tImage3 = document.querySelector('.image3 p');
const title4 = document.querySelector('h3.contact');
const labelEmail = document.querySelector('label#email');
const labelMessage = document.querySelector('label#message');
const titleProject = document.querySelector('#project .swiper h5');

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
    titleProject.classList.toggle('text-white');
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


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  const modaSlider1 = document.getElementById("myModalSlider1");
  const openButtonSlider1 = document.getElementById("openModalButtonSlider1");
  const closeIconSlider1 = document.getElementById("closeModalIcon1");

  // Ketika tombol openButton ditekan
  openButtonSlider1.addEventListener('click', () => {
    modaSlider1.style.display = "block";
  });

  // Ketika tombol closeButton ditekan
  closeIconSlider1.addEventListener('click', () => {
    modaSlider1.style.display = "none";
  });

  const modaSlider2 = document.getElementById("myModalSlider2");
  const openButtonSlider2 = document.getElementById("openModalButtonSlider2");
  const closeIconSlider2 = document.getElementById("closeModalIcon2");

  // Ketika tombol openButton ditekan
  openButtonSlider2.addEventListener('click', () => {
    modaSlider2.style.display = "block";
  });

  // Ketika tombol closeButton ditekan
  closeIconSlider2.addEventListener('click', () => {
    modaSlider2.style.display = "none";
  });

  const modaSlider3 = document.getElementById("myModalSlider3");
  const openButtonSlider3 = document.getElementById("openModalButtonSlider3");
  const closeIconSlider3 = document.getElementById("closeModalIcon3");

  // Ketika tombol openButton ditekan
  openButtonSlider3.addEventListener('click', () => {
    modaSlider3.style.display = "block";
  });

  // Ketika tombol closeButton ditekan
  closeIconSlider3.addEventListener('click', () => {
    modaSlider3.style.display = "none";
  });

const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }