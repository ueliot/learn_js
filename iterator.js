/*Ierador viene a resolver que podamos recorrer una secuencia de elementos
estos elementos pueden ser informacion, funciones, objetos, etc..
recorrer estso elementos (coleccion) a travez de su indice
en este apartado usaré otra forma de crear clase en js usando prototipos
para ello crearmos una funcion nombrada y luego añadimos los metodos con
.prototype
*/


//esta sera nuestra clase para crear iterables


let Iterador = function(elements){

    this.index=0;
    this.elements=elements;
}

Iterador.prototype = {

    hasNext: function(){
        return this.index < this.elements.length;
    },    //no olvidar la coma

    next: function(){
        return this.elements[this.index++];
    },

    reset: function(){
        this.index=0;
    }

}

//export default Iterador;
//export {Iterador};


/*
necesitamos saber si en el recorrido de elementos se llego al final del indice de los elementos
para ello creamos una funcion que devuelva true o false si se llego al final hasNext  (si hay siguiente)
si nuestro indice no ha llegado a la cantidad de elementos entonces todavia hay elementos x recorrer

necesito otro metodo que me vaya dando el siguiente next retornamos el elemento index+1
tambien necesitamos un reset que es igual a hacer que el index=0.

de esta forma encapsulamos la funcionalidad para recorrer distinto tipos de elementos

creamos el objeto iter y le pasamos elementos, el primero sera una lista simple
y la otra sera una array de funciones, fijarse que estas se ejecutaran al iterar


*/
let elementos = [1,2.3,"Hola",true];
let funcionesanonimas = [()=>{console.log("hola")},
                         ()=>{console.log(`Elementos: ${elementos}`)},
                         ()=>{console.log(elementos[0]>elementos[1])},
                         ()=>{console.log("Que hay compi")},
                        ];

let iter = new Iterador(elementos);
let iter2 = new Iterador(funcionesanonimas);
console.log("con Elementos de una coleccion=========")
while(iter.hasNext()){
    let elem = iter.next();
    console.log(elem)
}
console.log("con funciones anonimas=============")
while(iter2.hasNext()){
    let elem = iter2.next();
    elem();
}

console.log("con llamadas a una api===========")
let url = 'https://jsonplaceholder.typicode.com/todos/';
let llamadas = [];
for(let id=1;id<=5;id++ ){
    llamadas.push(
        async () => {
            let response = await fetch(url +id);
            let data = response.json();
            return data;
        }
    );
}


let iter3 = new Iterador(llamadas);  //creando el objeto iterador

//let n=0;
//console.log(`llamado =====================n=${n}`);
while(iter3.hasNext()){
    let element = iter3.next();
    let data = element().then(result =>{
        console.log(result);
    });
}
//n++;
iter3.reset();  //se tiene que poner el index=0 en iterador para volver a usarlo
//console.log(`llamado =====================n=${n}`);
while(iter3.hasNext()){
    let element = iter3.next();
    let data = element().then(result =>{
        console.log(result);
    });
}


