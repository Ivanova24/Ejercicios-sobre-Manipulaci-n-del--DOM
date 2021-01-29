//Como no hay una función por default uso la desesructuración de objetos 
import {digitalClock, alarm} from "/js/reloj.js"

const d = document; 

d.addEventListener("DOMContentLoaded", (e) => {
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma"); 
}); 