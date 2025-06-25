const imageFilenames = [
  "Album(Blackandwhite.JPG",
  "_LOK0702.JPG",
  "_LOK0727.JPG",
  "_LOK0728.JPG",
  "_LOK0731.JPG",
  "_LOK0752.JPG",
  "_LOK1035.JPG",
  "_LOK1118.JPG",
  "_LOK1226.JPG",
  "_LOK1255.JPG",
  "_LOK1260.JPG",
  "_LOK1266-2.JPG",
  "_LOK1274.JPG",
  "_LOK1275.JPG",
  "_LOK1294.JPG",
  "_LOK1336.JPG",
  "_LOK1348.JPG",
  "_LOK1350.JPG",
  "_LOK1371.JPG",
  "_LOK1385.JPG",
  "bornthiswayredsign.JPG"
];

const IMAGES_FOLDER = "hofimages";

window.addEventListener("DOMContentLoaded", () => {
  const slideshowContainer = document.querySelector(".slideshow");

  if (!slideshowContainer) {
    console.error("❌ .slideshow container not found");
    return;
  }

  imageFilenames.forEach((file, index) => {
    const img = document.createElement("img");
    img.src = `${IMAGES_FOLDER}/${file}`;
    img.classList.add("slide");
    if (index === 0) img.classList.add("active");
    slideshowContainer.appendChild(img);
  });

  // Delay until images are rendered
  setTimeout(() => {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) {
      console.error("❌ No slides found in DOM");
      return;
    }

    let current = 0;
    console.log(`✅ Loaded ${slides.length} slides`);

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 4000);
  }, 100);
});

