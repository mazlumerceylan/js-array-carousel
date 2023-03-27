const images = [  "img/bologna.jpeg",  "img/firenze.webp",  "img/milano.jpg",  "img/pisa.jpeg",  "img/roma.jpeg",];

let currentIndex = 0;

function displayImage(index) {
  const img = document.getElementById("image");
  img.src = images[index];

  const previewImages = document.getElementsByClassName("preview-image");
  for (let i = 0; i < previewImages.length; i++) {
    if (i === index) {
      previewImages[i].classList.add("active");
    } else {
      previewImages[i].classList.remove("active");
    }
  }
}

function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  displayImage(currentIndex);
}

function showPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  displayImage(currentIndex);
}

document.getElementById("prev-btn").addEventListener("click", showPrevImage);
document.getElementById("next-btn").addEventListener("click", showNextImage);

displayImage(currentIndex);
