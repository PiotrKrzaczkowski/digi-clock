const secHand = document.querySelector(".sec-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

const setDate = () => {
  const time = new Date();
  // SECONDS ROTATIO
  const seconds = time.getSeconds();
  const secDeg = (seconds / 60) * 360 + 90;

  const mins = time.getMinutes();
  const minDeg = (mins / 60) * 360 + 90;

  const hours = time.getHours();
  const hourDeg = (hours / 60) * 360 + 90;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

setInterval(setDate, 1000);
