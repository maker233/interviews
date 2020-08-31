// Init
$(function () {
  document.querySelector(".frame1").style.opacity = "1";
});


// if (vehiculo) {
//Flow
setTimeout(function () {
  document.querySelector(".fig").style.left = "74px";
}, 700);

setTimeout(function () {
  $(
    ".frame1"
  ).fadeOut("slow", function () {
    document.querySelector(".frame1").style.visibility = "hidden"
    // document.querySelector(".frame2").style.visibility = "visible";

    // $(
    //   ".frame2"
    // ).fadeIn("slow", function () {
    //   document.querySelector(".frame2").style.visibility = "visible";
    // })

  })

}, 2000);

// }