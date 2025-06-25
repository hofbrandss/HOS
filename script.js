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

  const slideshow = document.getElementById("slideshow");
  if (!slideshow) {
    console.error("❌ No element with ID 'slideshow' found in the DOM.");
    return;
  }

  let currentIndex = 0;

  function showImage(index) {
    slideshow.src = `hofimages/${imageFilenames[index]}`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
    showImage(currentIndex);
  }

  showImage(currentIndex);
  setInterval(nextImage, 3000);
});
