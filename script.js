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

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const slideshow = document.getElementById("slideshow");
  let currentIndex = 0;

  // Adjust timing for mobile (slightly slower)
  const slideDelay = isMobile ? 5000 : 4000;

  function showImage(index) {
    slideshow.classList.remove("visible");

    // Wait for fade out, then switch image
    setTimeout(() => {
      slideshow.src = `hofimages/${imageFilenames[index]}`;
    }, 300);
  }

  // When new image loads, fade it in
  slideshow.addEventListener("load", () => {
    slideshow.classList.add("visible");
  });

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
    showImage(currentIndex);
  }

  // Initial load
  showImage(currentIndex);
  setInterval(nextImage, slideDelay);

  // Touch swipe placeholder (can activate later)
  // If you want swipe left/right to change images
  // document.addEventListener("touchstart", handleSwipeStart);
});
