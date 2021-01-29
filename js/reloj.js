
const d = document; 

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo; 

    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            //Actualización de reloj cada segundo
            //uso de temporizador
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString(); 
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            //desactivar boton iniciar reloj
            e.target.disabled = true; 
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo); 
            d.querySelector(clock).innerHTML = null;
            //activar el boton iniciar reloj
            d.querySelector(btnPlay).disabled = false; 
        }
    }); 
}

export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo; 
    //crear un elemento dinámicamente de tipo audio 
    const $alarm = d.createElement("audio"); 
    $alarm.src = sound; 

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play(); 
            }, 2000); 
        }

        if(e.target.matches(btnStop)) {

        }
    }); 

}
