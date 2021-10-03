var iniciar = document.getElementById('iniciar');
var pausar = document.getElementById('pausar');
var reset = document.getElementById('reset');
const pause = document.getElementById('pause');
var terminar = document.getElementById('terminar')
var wm = document.getElementById('minutosTrabajo');
var ws = document.getElementById('segundosTrabajo');
var cc = document.getElementById('counter');
var startTimer;
var cambio = 0; // de trabajo(1) y descanso(0) 
var contadorDescanso = 1;

// boton iniciar-pausar
iniciar.addEventListener('click', function(){
    if(startTimer === undefined){ // iniciar
        startTimer = setInterval(timer, 1000)
        document.getElementById("iniciar").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pause-fill botones" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>';
        Estado();
    } else { //pausa
        stopInterval()
        startTimer = undefined;
        document.getElementById("iniciar").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-play-fill botones" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>'; // boton;
        Estado();
    }
})

// boton resetear
reset.addEventListener('click', function(){
    stopInterval()
    wm.innerText = 25;
    document.getElementById('counter').innerText = 1;
    document.getElementById("iniciar").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-play-fill botones" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>'; // boton
    ws.innerText = "00";
    contadorDescanso = 1; // volver al estado inicial
    document.getElementById("abcde").innerHTML = contadorDescanso;
    startTimer = undefined;
})
reset.addEventListener('click', function(){
    document.getElementById("trabajo").innerHTML = "Inicio";
    document.title = "Técnica de Pomodoro";
})
terminar.addEventListener('click', function(){
    stopInterval()
    document.getElementById("iniciar").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-play-fill botones" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>'; // boton
    document.getElementById("wsp").innerHTML = '<a href="https://api.whatsapp.com/send?text= He estudiado con la técnica Pomodoro, logré un total de '+document.getElementById('counter').innerText+' pomodoros! Ingresa al siguiente enlace para intentarlo tú también: https://maxicn.github.io/pomodoro/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg></a>'
    document.getElementById("fb").innerHTML = '<a href="https://www.facebook.com/sharer.php?u=https://maxicn.github.io/pomodoro/&t=He estudiado con la técnica Pomodoro, logré un total de '+document.getElementById('counter').innerText+' pomodoros! Ingresa al siguiente enlace para intentarlo tú también." target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></a>'
    document.getElementById("twitter").innerHTML = '<a href="https://twitter.com/intent/tweet?text=He estudiado con la técnica Pomodoro, logré un total de '+document.getElementById('counter').innerText+' pomodoros! Ingresa al siguiente enlace para intentarlo tú también:&url=https://maxicn.github.io/pomodoro/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg> </a>'
})

function Estado(){// INICIO-TRABAJO-DESCANSO-DESCANSO PROLONGADO
    if(document.getElementById("trabajo").innerHTML == "Trabajo" || document.getElementById("trabajo").innerHTML == "Inicio"){
        document.getElementById("trabajo").innerHTML = "Trabajo";
        document.title = "Hora de Trabajar";
    }else if(document.getElementById("trabajo").innerHTML = "Descanso"){
        document.getElementById("trabajo").innerHTML = "Descanso";
    }else{
        document.getElementById("trabajo").innerHTML = "Descanso prolongado";
    }
}
//iniciar funcion para Timer 
function timer(){
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    // contador break time
    if(wm.innerText == 0 && ws.innerText == 0 && cambio == 0){
        document.getElementById("trabajo").innerHTML = "Descanso";
        document.title = "Hora de Descansar"
        wm.innerText = 5;
        ws.innerText = "00";
        cambio = 1;
    // contador de trabajar
    }else if(wm.innerText == 0 && ws.innerText == 0 && cambio == 1){
        if (contadorDescanso == 4){
            document.getElementById("trabajo").innerHTML = "Descanso prolongado";
            document.title = "Hora de Descansar"
            wm.innerText = 30;
            ws.innerText = "00";
            cambio = 1;
            contadorDescanso = -1; // volver al estado inicial
        }else{
        document.getElementById("trabajo").innerHTML = "Trabajo";
        document.title = "Hora de Trabajar";
        wm.innerText = 25;
        ws.innerText = "00";
        cambio = 0;
        document.getElementById('counter').innerText++;
        }
        contadorDescanso++;
        if(contadorDescanso == 4){
            cambio=1;
        }
        
    }
}

//FUNCION DE PAUSAR TIMER 
function stopInterval(){
    clearInterval(startTimer);
}


//MODO OSCURO
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

