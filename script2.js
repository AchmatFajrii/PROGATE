const modaSlider4 = document.getElementById("myModalSlider4");
const openButtonSlider4 = document.getElementById("openModalButtonSlider4");
const closeIconSlider4 = document.getElementById("closeModalIcon4");

  // Ketika tombol openButton ditekan
  openButtonSlider4.addEventListener('click', () => {
    modaSlider4.style.display = "block";
  });

  // Ketika tombol closeButton ditekan
  closeIconSlider4.addEventListener('click', () => {
    modaSlider4.style.display = "none";
  });