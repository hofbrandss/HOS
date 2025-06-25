window.addEventListener('DOMContentLoaded', function () {
  const imageFilenames = [
    "Album(Blackandwhite.jpg",
    "LOK0702.jpg",
    "LOK0727.jpg",
    "LOK0728.jpg",
    "LOK0731.jpg",
    "LOK0752.jpg",
    "LOK1035.jpg",
    "LOK1118.jpg",
    "LOK1226.jpg",
    "LOK1255.jpg",
    "LOK1260.jpg",
    "LOK1266-2.jpg",
    "LOK1274.jpg",
    "LOK1275.jpg",
    "LOK1294.jpg",
    "LOK1336.jpg",
    "LOK1348.jpg",
    "LOK1350.jpg",
    "LOK1371.jpg",
    "LOK1385.jpg",
    "bornthiswayredesign.jpg"
  ];

  let currentIndex = 0;
  const slideshow = document.getElementById("slideshow");

  function showImage(index) {
    // Start blur-out
    slideshow.classList.remove("visible");

    // Wait for fade out before changing image
    setTimeout(() => {
      slideshow.src = `hofimages/${imageFilenames[index]}`;
    }, 400);
  }

  // After image loads, blur in
  slideshow.onload = function () {
    slideshow.classList.add("visible");
  };

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
    showImage(currentIndex);
  }

  showImage(currentIndex);
  setInterval(nextImage, 4000); // 4 seconds per image
});
