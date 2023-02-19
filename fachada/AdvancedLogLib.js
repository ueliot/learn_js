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

class AdvanceLogsLibrary {
    constructor(){
        //Big complex method
        console.log("_constructor");
    }
    checkPermission(){
        //Big complex method
        console.log("_checkPermission");
        return true;        
    }
    checkExistFolder(){
        //Big complex method
        console.log("_checkExistFolder");
        return true;
    }
    generaLogName(){
        //Big complex method
        console.log("_generaLogName");
        return "generated log Name";
    }
    write(message){
        //Big complex method
        console.log("_write message", message);
        return true;
    }
}

export {AdvanceLogsLibrary};
