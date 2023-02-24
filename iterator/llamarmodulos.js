//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
//https://javascript.info/modules-intro
//https://es.wikipedia.org/wiki/Servidor_web
//https://man7.org/linux/man-pages/man3/termios.3.html
//https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows
//https://superuser.com/questions/1018760/connect-with-ssh-to-your-localhost

import  "./iterator.js";   
//import Iterador from "./iterator.js"
console.log("patron iterador");

/*
el iterador.js lo intenté importar como un script normal 
///ESTE COMENTARIO ES NO VALIDO POR QUE SI SE PUEDE CARGAR COMO JS
//PERO SI USAS EXPORT TE SALDRA UN TOKEN Y NO LO CARGARA  COMENTARLO Y FUNCIONA
//NO ME DEJABA X QUE EL JS ESTABA MAL ESCRITO Y EL NAVEGADOR SE BLOQUEABA


los modulos necesitan de un server no sirve 
cargar el index.html con el navegador:
 <script type="module" src="llamarmodulos.js"></script>
 sale este mensaje de error:
from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol
schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted. 


Deja exportarlo de forma global  con import "./iterator" desde
llamarmodulos.js y ejecutara todo lo de ./iterator.js

Tambien puedes usar:
import Iterador from "./iterator.js"
pero deberexportar desde iterador.js lo que quieres importar en llamamodules.js:
export default Iterador;

tambien puede usar:
import {Iterador, ..las otras clase o funciones o propiedades..} from "./iterator.js"
y hacer   export { Iterador, ..las otras clase o funciones o propiedades..};


*/

//esto ultimo no funcionará x que en este escript
// no esta importado Iterador desde iterator.js
//sin embargo ya ha ejecutado esto desde el script


let elementos = [1,2.3,"Hola",true];
let iter = new Iterador(elementos);
console.log(iter);
while(iter.hasNext()){
    let elem = iter.next();
    console.log(elem)
}