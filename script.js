const imageFilenames = [
  "Album(Blackandwhite.jpg",
  "_LOK1226.jpg",
  "_LOK1255.jpg",
  "_LOK0702.jpg",
  "_LOK0727.jpg",
  "_LOK0728.jpg",
  "_LOK0731.jpg",
  "_LOK0752.jpg",
  "_LOK1035.jpg",
  "_LOK1118.jpg",
  "_LOK1260.jpg",
  "_LOK1266-2.jpg",
  "_LOK1274.jpg",
  "_LOK1275.jpg",
  "_LOK1294.jpg",
  "_LOK1336.jpg",
  "_LOK1348.jpg",
  "_LOK1350.jpg",
  "_LOK1371.jpg",
  "_LOK1385.jpg",
  "bornthiswayredsign.jpg"
];

const IMAGES_FOLDER = "hofimages";

window.addEventListener('DOMContentLoaded', () => {
  const slideshowContainer = document.querySelector('.slideshow');

  imageFilenames.forEach((file, index) => {
    const img = document.createElement('img');
    img.src = `${IMAGES_FOLDER}/${file}`;
    img.classList.add('slide');
    if (index === 0) img.classList.add('active');
    slideshowContainer.appendChild(img);
  });

  let current = 0;
  const slides = document.querySelectorAll('.slide');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
});
