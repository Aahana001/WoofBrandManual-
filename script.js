const card = document.getElementById("card");
let startX;
let currentX;
let threshold = 50; // Adjust this threshold value as needed

const images = ["1.JPG", "2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG","8.JPG","9.JPG","10.JPG","11.JPG","12.JPG","13.JPG","14.JPG","15.JPG","16.JPG","17.JPG","18.JPG","19.JPG","20.JPG","21.JPG","22.JPG","23.JPG","24.JPG","25.JPG","26.JPG","27.JPG","28.JPG","29.JPG","30.JPG","31.JPG","32.JPG","33.JPG","34.JPG","35.JPG","36.JPG","37.JPG","38.JPG","39.JPG","40.JPG","41.JPG","42.JPG","43.JPG","44.JPG","45.JPG","46.JPG","47.JPG","48.JPG","49.JPG","50.JPG","51.JPG","52.JPG","53.JPG","54.JPG","55.JPG"]; // Add your image URLs here
let currentIndex = 0;

updateCard();

card.addEventListener("mousedown", handleStart);
card.addEventListener("touchstart", handleStart);

document.addEventListener("mousemove", handleMove);
document.addEventListener("touchmove", handleMove);

document.addEventListener("mouseup", handleEnd);
document.addEventListener("touchend", handleEnd);

function handleStart(e) {
  e.preventDefault(); // Prevent default touch behavior
  if (e.type === "mousedown") {
    startX = e.clientX;
  } else if (e.type === "touchstart") {
    startX = e.touches[0].clientX;
  }
}

function handleMove(e) {
  e.preventDefault(); // Prevent default touch behavior
  if (startX) {
    if (e.type === "mousemove") {
      currentX = e.clientX;
    } else if (e.type === "touchmove") {
      currentX = e.touches[0].clientX;
    }

    let diff = startX - currentX;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left
        currentIndex = (currentIndex - 1 + images.length) % images.length;

      } else {
        // Swiped right
        currentIndex = (currentIndex + 1) % images.length;

      }
      updateCard();
      startX = null;
    }
  }
}

function handleEnd(e) {
  startX = null;
}

function updateCard() {
  card.innerHTML = `<img src="/images/${images[currentIndex]}" alt="Image ${
    currentIndex + 1
  }">`;
}
