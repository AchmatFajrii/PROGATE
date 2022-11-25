const darkButton = document.getElementById('dark');
const textDark = document.querySelector('.textdark');
const headingDark4 = document.querySelector('h4');
const headingDark3 = document.querySelector('h3');
const headingDarkID3 = document.querySelector('#h3');
const paragraf = document.querySelector('p');
const textEmail = document.querySelector('#email');
const textMessage = document.querySelector('#message');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');


darkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = '#292929';
    darkButton.innerHTML = 'Light Mode';
    darkButton.style.backgroundColor = 'white';
    darkButton.style.color = '#292929';
    textDark.style.color = 'white';
    headingDark4.style.color = 'white';
    headingDark3.style.color = 'white';
    headingDarkID3.style.color = 'white';
    paragraf.style.color = 'white';
    textEmail.style.color = 'white';
    textMessage.style.color = 'white';
    p1.style.color = 'white';
    p2.style.color = 'white';
    p3.style.color = 'white';
    alert('refresh kembali untuk tampilan light mode');
})