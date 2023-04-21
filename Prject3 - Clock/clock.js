const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

function clock() {
  let object = new Date();
  let s = object.getSeconds();
  let m = object.getMinutes();
  let h = object.getHours();

  let sDeg = (s / 60) * 360;
  let mDeg = (m / 60) * 360;
  let hDeg = (h / 12) * 360;

  //寫入style
  secEl.style.transform = `rotate(${sDeg}deg)`;
  minEl.style.transform = `rotate(${mDeg}deg)`;
  hourEl.style.transform = `rotate(${hDeg}deg)`;
  console.log(sDeg);
}
setInterval(clock, 1000);
