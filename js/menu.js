function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  //             [negro,      azul,      verde,     rojo,     rosa,     amarillo,  blanco]
  const colors = ["#222831", "#14279B", "#4E9525", "#51050F","#FFC7C7", "#F0A500", "#D4ECDD"];
  var r = document.querySelector(':root');
  let colorIndex = parseInt(localStorage.getItem("colorIndex")) || 0;
  const updateColor = function() {
  const equis = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
  const check = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>';
      document.getElementById("negro").innerHTML = equis;
      document.getElementById("azul").innerHTML = equis;
      document.getElementById("verde").innerHTML = equis;
      document.getElementById("rojo").innerHTML = equis;
      document.getElementById("rosa").innerHTML = equis;
      document.getElementById("amarillo").innerHTML = equis;
      document.getElementById("blanco").innerHTML = equis;

      document.querySelector("body").style.background = colors[colorIndex];
      if(colorIndex == 0){
        r.style.setProperty('--titulos-color', '#11999E');
        r.style.setProperty('--numeros-color', '#EEEEEE');
        r.style.setProperty('--text-color', '#EEEEEE');
        r.style.setProperty('--bkg-color', '#222831');
        document.getElementById("negro").innerHTML = check;
      }else if(colorIndex == 1){
        r.style.setProperty('--titulos-color', '#E4FBFF');
        r.style.setProperty('--numeros-color', '#E6E6E6');
        r.style.setProperty('--text-color', '#E6E6E6');
        r.style.setProperty('--bkg-color', '#14279B');
        document.getElementById("azul").innerHTML = check;
      }else if(colorIndex == 2){
        r.style.setProperty('--titulos-color', '#2E5A1C');
        r.style.setProperty('--numeros-color', '#EDF0C7');
        r.style.setProperty('--text-color', '#EDF0C7');
        r.style.setProperty('--bkg-color', '#4E9525');
        document.getElementById("verde").innerHTML = check;
      }else if(colorIndex == 3){
        r.style.setProperty('--titulos-color', '#F78812');
        r.style.setProperty('--numeros-color', '#AB6D23');
        r.style.setProperty('--text-color', '#F78812');
        r.style.setProperty('--bkg-color', '#51050F');
        document.getElementById("rojo").innerHTML = check;
      }
      else if(colorIndex == 4){
        r.style.setProperty('--titulos-color', '#687980');
        r.style.setProperty('--numeros-color', '#8785A2');
        r.style.setProperty('--text-color', '#8785A2');
        r.style.setProperty('--bkg-color', '#FFC7C7');
        document.getElementById("rosa").innerHTML = check;
      }else if(colorIndex == 5){
        r.style.setProperty('--titulos-color', '#000000');
        r.style.setProperty('--numeros-color', '#DBDBDB');
        r.style.setProperty('--text-color', '#DBDBDB');
        r.style.setProperty('--bkg-color', '#F0A500');
        document.getElementById("amarillo").innerHTML = check;
      }
      else if(colorIndex == 6){
        r.style.setProperty('--titulos-color', '#112031');
        r.style.setProperty('--numeros-color', '#345B63');
        r.style.setProperty('--text-color', '#345B63');
        r.style.setProperty('--bkg-color', '#D4ECDD');
        document.getElementById("blanco").innerHTML = check;
      }
  };
  document.querySelector(".negro").addEventListener("click", function() {
      colorIndex = 0;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".azul").addEventListener("click", function() {
      colorIndex = 1;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".verde").addEventListener("click", function() {
      colorIndex = 2;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".rojo").addEventListener("click", function() {
      colorIndex = 3;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".rosa").addEventListener("click", function() {
    colorIndex = 4;
    localStorage.setItem("colorIndex", colorIndex);
    updateColor();
});
document.querySelector(".amarillo").addEventListener("click", function() {
  colorIndex = 5;
  localStorage.setItem("colorIndex", colorIndex);
  updateColor();
});
document.querySelector(".blanco").addEventListener("click", function() {
colorIndex = 6;
localStorage.setItem("colorIndex", colorIndex);
updateColor();
});
  updateColor();