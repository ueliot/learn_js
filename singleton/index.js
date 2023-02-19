/*
Es usado en base de datos o log donde haya fuente de datos
o de informacion, y nuestra clase como tal habilita ese canal una sola vez
y la idea si el canal esta creada la podamos reutilizar
creamos una variable donde almacenar la instancia.
en el constructor preguntamos si la instancia esta vacia
y asignamos a la instancia this; en caso contrario
retornamos la instancia y solo ponemos la informacion la 
primera vez que se ha creado la instancia,
*/

let logInstance;

class Logs {
    constructor(data){
        
        if (!logInstance){
            logInstance=this;
            this._data=data;
        }else{
            return logInstance;
        }        
    }

    get data(){
        return this._data
    }
}

console.log(new Logs("Hola").data)  //fijarse que el get permite retornar el this._data(privado)
console.log(new Logs("Persona1").data)  //.data() is not function is a getter
console.log(new Logs("Persona2").data)
console.log(new Logs("Persona3").data)
console.log(new Logs("Persona4").data)

//Si la instancia esta creada siempre devolverá el objeto que ya fue creado la primera vez
//por lo que mi aplicacion consume menos recursos ira mas rápido

