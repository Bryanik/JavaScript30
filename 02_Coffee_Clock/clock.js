const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");

// To ensure clock width and height are equal even on smaller devices
const clock = document.getElementById("clock");
const clockWidth = clock.offsetWidth;
clock.style.height = `${clockWidth}px`;

function setTime() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDeg = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;
  //   console.log(sec);

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  
  const hr = now.getHours();
  const hrDeg = (hr / 12) * 360 + 90;
  hrHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(setTime, 1000);