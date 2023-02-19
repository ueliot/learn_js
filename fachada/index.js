/* =======Patron Fachada==========
el objetivo de este patron es evitar leer un manual complejo de instrucciones
o de como funciona una api, mas bien a simple vista que se pueda ver 
de forma sencilla lo hace, otro objetivo es reducir el acoplamiento
y seguir la ley demeter (deberiaos acceder directamente a clases conocidas)

ejemplo: tengo un libreria de logs con una gran complejidad
para usarla tengo que chequear permisos, si existe chekar si existe el folder
crearle un nombre y al final escribir el mensaje
=> creare una fachada para usarla de manera sencialla.

*/

import { AdvanceLogsLibrary } from "./AdvancedLogLib";



let logs = new AdvanceLogsLibrary();

//esta logica podria complicarse mucho si hacemos uso de una api
//muy extensa
if (logs.checkPermission() && logs.checkExistFolder){
    logs.write(logs.generaLogName());
}
