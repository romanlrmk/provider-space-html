/* Special Offer Countdown*/
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const dealExpires = "1 Jan 2022";

function countdown() {
  const dealExpiresDate = new Date(dealExpires);
  const currentDate = new Date();

  const totalSeconds = (dealExpiresDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

/* Carousel */
const images = [
  "img/google.png",
  "img/ibm.webp",
  "img/microsoft.png",
  "img/united-services-germany.png",
  "img/cisco.webp",
];

let currentSlide = 0;

function showSlide() {
  const carouselImage = document.querySelector(".partners-carousel img");
  carouselImage.src = images[currentSlide];
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= images.length) currentSlide = 0;
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) currentSlide = images.length - 1;
  showSlide();
}

setInterval(nextSlide, 1000);
