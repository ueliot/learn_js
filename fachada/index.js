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
//Configuracion para codespace
//https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-nodejs-project-for-codespaces
//https://www.youtube.com/watch?v=jRtrDpzN_5o
//https://lenguajejs.com/automatizadores/vite/guia-tutorial-inicial-de-vite/
//https://www.youtube.com/watch?v=NrXfZyvhGjA
//https://vitejs.dev/guide/
//https://github.com/vitejs/awesome-vite#templates
import { AdvanceLogsLibrary } from "./AdvancedLogLib";

let logs = new AdvanceLogsLibrary();

//esta logica podria complicarse mucho si hacemos uso de una api
//muy extensa
if (logs.checkPermission() && logs.checkExistFolder){
    logs.write(logs.generaLogName());
}
