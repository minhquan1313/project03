// //Cho thanh pho
// const Art_inner = document.querySelectorAll(".findPeopleNear__Art-inner");
// const Art = document.querySelector(".Art");

// var i;

// for (i = 0; i < Art_inner.length; i++) {
//   Art_inner[i].addEventListener("mousemove", (e) => {
//     let xx = window.innerWidth / 2 - e.pageX / 10;
//     let yy = window.innerHeight / 2 - e.pageY / 10;
//     Art.style.transform = `rotateY(${yy}deg) rotateX(${xx}deg)`;
//   });
// }

var PhoneBox = document.querySelector(".responsiveTheme__col-phone");
var Phone = document.querySelector(".responsiveTheme__phone");

PhoneBox.addEventListener("mousemove", (e) => {
  var posit = PhoneBox.getBoundingClientRect();

  var x = PhoneBox.clientWidth;
  var y = PhoneBox.clientHeight;

  let xx = (e.clientX - (posit.left + x / 2)) / 20;
  let yy = (e.clientY - (posit.top + y / 2)) / 40;

  Phone.style.transform = `rotateY(${xx}deg) rotateX(${yy}deg)`;

  console.log(xx, yy);
});

//In

PhoneBox.addEventListener("mouseenter", (e) => {
  Phone.style.transition = "all 0.05s linear";
  //   Phone.style.transition = "none";
  setTimeout(() => {}, 110);
});

//Out

PhoneBox.addEventListener("mouseleave", (e) => {
  Phone.style.transition = "all 0.3s ease";
  Phone.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
