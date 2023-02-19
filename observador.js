/*
PATRON OBSERVADOR EJEMPLO CON HTML
==================================
Hay 2 entidades en el patron observador
Entidad Sujeto (subject) y entidad Observador (observer)
se trata de que los observers se suscriban a alguna cosa que hace el sujeto
de esta forma estaran observando lo que hace y actuar en consecuencia

Metodo suscribir para los observadores=============
aqui añadimos el observador a la lista de observadores

Metodo desuscribir=====================
Aqui quitamos el observador de la lista
para este caso le decimos a filter que nos devuelve el mismo arreglo sin el objeto que estamos recibiendo
Asi eliminamos objetos de un arreglo
como .filter es inmutable la asignacion la hace copiar sin el objeto encontrado


Metodo Notificar===============
Notificamos los cambios de estado del sujeto; este recibe algo x ejm un modelo
Todos los observadores necesitan estar al tanto cuando cambie ese model, los notifocamos uno x uno
usando un forEach

Ejemplo:
quiero tener una caja de texto, el estado sera el texto mismo
cuando cambie el texto, para ello creo una clase, textSubject
que heredará todas las cualidades de la clase subject (extens)
creare una caja de texto en html y 3 elementos div los cuales se suscribiran
a la caja de texto para actuar en consecuencia, se suscribiran al evento cambio de texto.
cada div hará algo distinto; los divs seran los observadores y la caja de texto el subject


crearemos una clase observador para cada div de este 
modo cada uno tendrá su propia funcionalidad
sabemos que los observadores tienen que tener un metodo notify
en typescrip se puede hacer una interfaz y despues implementar los metodos ya 
que esto te obliga a tener estos metodos de la interfaz, 
pero en javascrip lo tenemos que hacer diferente

*/

class Subject {
    constructor() {
        this.observers = []  //aqui se almacenaran los observadores
    }

    subcribe(o) {
        this.observers.push(o);
    }

    unsubscribe(o) {
        this.observers = this.observers.filter(e => e != o);
    }

    notify(model) {
        this.observers.forEach(obs => {
            obs.notify(model);
        })
    }
}

//====================================================

class TextSubject extends Subject {
    constructor() {
        super(); //lo primero es llamar al constructor del padre super()
        this.text = "";  //agrego mi atributo o estado en este caso 
    }

    notify(text) {
        this.text = text;
        super.notify(this)    //llamamos a la clase padre y notificamos a nosotros mismos
        //Envia todo el objeto creado al padre
    }
}

class Div1Observer {

    //en el foreach notify recibe el model, que en si mismo es el subject,
    //el this que esta mandando el objeto en si mismo; subject sabemos que tiene un atributo
    //text que se ha creado en el constructor, ese atributo es el que va a traer el nuevo texto
    //y ese es qel que quiero que se represente en mi div1
    notify(subject) {
        document.getElementById("div1").innerHTML = subject.text;
    }

}

class Div2Observer {
    notify(subject) {
        document.getElementById("div2").innerHTML = subject.text.length;
        console.log(subject.text.length);
    }
}


//Emojis tecla lupa + mayusc + barra espaciadora pero no entra para vscode
//https://emoji-css.afeld.me/
//con extensiones de vscode
class Div3Observer {
    notify(subject) {
        if (subject.text.search("cerveza") > 0) {
            document.getElementById("div3").innerHTML = "SALUD!!!!";
        } else {
            document.getElementById("div3").innerHTML = ":(" ;
        }

    }
}

//creamos los objetos que van a interactuar.
let textSubject = new TextSubject();   //el subject
let miDiv1 = new Div1Observer()// el observador;
let miDiv2 = new Div2Observer()// el observador;
let miDiv3 = new Div3Observer()// el observador;
textSubject.subcribe(miDiv1);  //nos suscribimos
textSubject.subcribe(miDiv2);  //nos suscribimos
textSubject.subcribe(miDiv3);  //nos suscribimos




//Nos falta estar capturando los eventos que se generan al
//Introdcir texto en la caja mitexto. añadimos el evento con addlistener al loopd de Javascript
document.getElementById("mitexto").addEventListener("input", (evento) => {
    //quiero decirle al subject que hay un cambio en el texto
    //para que se encarge de notificar a todos los observadores que ha cambiado algo
    textSubject.notify(evento.target.value);
})