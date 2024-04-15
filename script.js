const card = document.getElementById("card");
let startX;
let currentX;
let threshold = 50; // Adjust this threshold value as needed

const images = ["1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg","32.jpg","33.jpg","34.jpg","35.jpg","36.jpg","37.jpg","38.jpg","39.jpg","40.jpg","41.jpg","42.jpg","43.jpg","44.jpg","45.jpg","46.jpg","47.jpg","48.jpg","49.jpg","50.jpg","51.jpg","52.jpg","53.jpg","54.jpg","55.jpg"]; // Add your image URLs here
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
