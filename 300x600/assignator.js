//1.Filtramos por tipo
//2.Inyectamos en el HTML
// 2.1 template html
// 2.2 variables tipo atributo
// 2.3 variables tipo src (SVG)

$(function () {
  console.log("Cargado assignator.js :", vehiculo);

  document.querySelector("#container").addEventListener('click', function () {
    exits1()
  })

  //Logical
  if (vehiculo == "coche") {
    //inject template
    // document.querySelector("#container").innerHTML = car_template;
    $(function () {

      //Screen 1 - intro    

      document.querySelector(".frame1").style.backgroundColor = bg
      document.querySelector(".logo").src = logo;
      document.querySelector(".cpf11").innerText = copy_f1_1;
      document.querySelector(".cpf12").innerText = copy_f1_2;
      document.querySelector(".imbg").src = imagen_fondo
      // document.querySelector(".imbg").src = "/Users/javier/Desktop/Direct/300x600/imbgcar.png"
      document.querySelector(".fig").src = icono_vehiculo
      // document.querySelector(".fig").src = "/Users/javier/Desktop/Direct/300x600/figcar.png"
      // document.querySelector(".fig").src = "/Users/javier/Desktop/Direct/300x600/figmoto.png"
      document.querySelector(".disc").innerText = disclaimer

      //Screen 2 - 

      document.querySelector(".frame2").style.backgroundColor = bg
      document.querySelector(".logo2").src = logo;
      document.querySelector(".cpf21").innerText = copy_f2_1
      document.querySelector(".cpf22").innerText = copy_prod
      document.querySelector(".cpf23").innerText = copy_f2_2
      document.querySelector(".cpf24").innerText = prize
      document.querySelector(".cpf25").innerText = copy_f2_3
      document.querySelector(".cta").src = cta

    })
  }


  if (vehiculo == "moto") {
    // document.querySelector("#container").innerHTML = car_template;
    $(function () {

      //Screen 1 - intro    

      document.querySelector(".frame1").style.backgroundColor = bg
      document.querySelector(".logo").src = logo;
      document.querySelector(".cpf11").innerText = copy_f1_1;
      document.querySelector(".cpf12").innerText = copy_f1_2;
      document.querySelector(".imbg").src = imagen_fondo
      document.querySelector(".fig").src = icono_vehiculo
      document.querySelector(".disc").innerText = disclaimer

      //Screen 2 - 

      document.querySelector(".frame2").style.backgroundColor = bg
      document.querySelector(".logo2").src = logo;
      document.querySelector(".cpf21").innerText = copy_f2_1
      document.querySelector(".cpf22").innerText = copy_prod
      document.querySelector(".cpf23").innerText = copy_f2_2
      document.querySelector(".cpf24").innerText = prize
      document.querySelector(".cpf25").innerText = copy_f2_3
      document.querySelector(".cta").src = cta

    })
  }

});