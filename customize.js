// Puedes probar el codigo en
// https://booking.barcelo.com/?adult=2&arrive=2019-11-22&chain=24876&child=0&currency=EUR&depart=2019-11-23&filter=EUR&hotel=7299&level=hotel&locale=es-ES&rooms=1&store=ES&themecode=initialTheme

var cont = document.querySelectorAll(".thumb-cards_rate");
var viewmore = document.querySelectorAll(".button_arrowDownAfter");
var template =
  '<div class="banner-disc-mb light_blue"><span class="btn-icon"><img src="https://static-staging.barcelo.com/content/dam/barcelo/commons/icons/ui/close.svg" style="max-width: 25px;" alt="cerrar"></span><img class="icon-disc" src="https://static-staging.barcelo.com/content/dam/barcelo/commons/icons/statics/discount_code.svg" style="min-width: 30px;" alt=""><p class="title">Descuento exclusivo my Barceló</p><p class="desc"><a href="#">Inicia sesión</a> o <a href="">regístrate</a> para disfrutar de un descuento en las siguientes tarifas.<span>(Podrás ver el descuento aplicado en el siguiente paso).</span></p></div>';

var pos = window.scrollY;

document.querySelector("div.myaccount-container_user button").click();
document.querySelector(".login_container").style.visibility = "hidden";
window.scroll(0, pos);

var url = document
  .querySelectorAll(".login_signUpLink a")[0]
  .getAttribute("href");

document.querySelector(".login_container").style.visibility = "visible";
document.querySelector(".login_close").click();
window.scroll(0, pos);

cont.forEach(function(elm) {
  if (/^\FR/.test(elm.dataset.rateCode)) {
    const nodes = document.createRange().createContextualFragment(template);
    elm.appendChild(nodes);

    elm
      .querySelectorAll(".banner-disc-mb .desc a")[1]
      .setAttribute("href", "https://booking.barcelo.com" + url);

    elm
      .querySelectorAll(".banner-disc-mb .desc a")[0]
      .addEventListener("click", function(e) {
        document.querySelector("div.myaccount-container_user button").click();
      });

    elm
      .querySelectorAll(".banner-disc-mb img")[0]
      .addEventListener("click", function() {
        elm.querySelector(".banner-disc-mb").style.display = "none";
      });
  }
});

viewmore.forEach(function(elm) {
  elm.addEventListener("click", function() {
    setTimeout(function() {
      var cont = document.querySelectorAll(".thumb-cards_rate");
      var template =
        '<div class="banner-disc-mb light_blue"><span class="btn-icon"><img src="https://static-staging.barcelo.com/content/dam/barcelo/commons/icons/ui/close.svg" alt="cerrar"></span><img class="icon-disc" src="https://static-staging.barcelo.com/content/dam/barcelo/commons/icons/statics/discount_code.svg" alt=""><p class="title">Descuento exclusivo my Barceló</p><p class="desc"><a href="">Inicia sesión</a> o <a href="">regístrate</a> para disfrutar de un descuento en las siguientes tarifas.<span>(Podrás ver el descuento aplicado en el siguiente paso).</span></p></div>';

      cont.forEach(function(elm) {
        if (/^\FR/.test(elm.dataset.rateCode) && elm.childElementCount == 1) {
          const nodes = document
            .createRange()
            .createContextualFragment(template);
          elm.appendChild(nodes);
          //capture links
          var pos = window.scrollY;
          document.querySelector("div.myaccount-container_user button").click();
          document.querySelector(".login_container").style.visibility =
            "hidden";
          window.scroll(0, pos);

          var url = document
            .querySelectorAll(".login_signUpLink a")[0]
            .getAttribute("href");

          elm
            .querySelectorAll(".banner-disc-mb .desc a")[0]
            .addEventListener("click", function(e) {
              document
                .querySelector("div.myaccount-container_user button")
                .click();
            });

          elm
            .querySelectorAll(".banner-disc-mb .desc a")[1]
            .setAttribute("href", "https://booking.barcelo.com" + url);

          elm
            .querySelectorAll(".banner-disc-mb img")[0]
            .addEventListener("click", function() {
              elm.querySelector(".banner-disc-mb").style.display = "none";
            });

          document.querySelector(".login_container").style.visibility =
            "visible";
          document.querySelector(".login_close").click();
          // end capture links
        }
      });
    }, 10);
  });
});

setTimeout(function() {
  document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
}, 10);
