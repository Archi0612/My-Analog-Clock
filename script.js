//For hour hand

// 12h = 360deg
// 1h = 30deg
//nh = 30 * h degree
// 60min = 30deg
// 1*n min = n/2 deg

//30n + n/2  ----- (1)

//For min hand

// 1h = 360deg
//60min = 360deg
// 1min = 6deg
// nmin = 6n deg ---- (2)

//For second hand

//60sec = 360deg
//1sec = 6deg
//1*n sec = 6*n deg ------- (3)

let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".sec-hand");
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  let hrotation = 30 * h + h / 2;
  let mrotation = 6 * m;
  let srotation = 6 * s;

  hour_hand.style.transform = `rotate(${hrotation}deg)`;
  min_hand.style.transform = `rotate(${mrotation}deg)`;
  sec_hand.style.transform = `rotate(${srotation}deg)`;

  dh.innerHTML = (h < 10 ? "0" + h : h) > 12 ? (h -= 12) : h;
  dm.innerHTML = m < 10 ? "0" + m : m;
  ds.innerHTML = s < 10 ? "0" + s : s;
});
