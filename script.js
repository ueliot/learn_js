// ====================Patron Inyeccion de dependencias===================
//https://hdeleon.net/patrones-de-diseno-en-javascript/#N-NnxiVln8I
//https://blog.koalite.com/2012/04/inyeccion-de-dependencias-en-javascript-y-otros-lenguajes-dinamicos/
//Ejemplo el cantinero solo debe saber servir la cerveza no hacerla, 
//principio de responsabilidad unica

class Cerveza {
    constructor(nombre,alchol,marca){
        this.nombre = nombre;
        this.alchol = alchol;
        this.marca=marca;
    }
}


class Cantinero {
    constructor(nombre,cerveza){
    //constructor(nombre, nombreCerveza,alchol){
        this.nombre=nombre;
        //this.cerveza= new Cerveza(nombreCerveza, alchol); //aqui hace la cerveza aqui se viola este principio

        /* Inyeccion de dependencias
        esto no se debe hacer asi sin embargo funciona
        no se debe delegar la creacion de un objeto a otro objeto, 
        por que podriamos generar dependencias 
        anidadas, en lugar le pasamos un objeto creado desde afuera, 
        este patron se ayuda de otros patrones
        como factory, singleton u otros - 
        un patron creacional 
        generalmente se usa un container
       */

      this.cerveza=cerveza;  //aqui se recibira el objeto
    }

    servir(){
        console.log(`${this.nombre} sirviendo la cerveza: ${this.cerveza.nombre} \
con % de alchol ${this.cerveza.alchol}`)
    }
}


// let cantinero1 = new Cantinero("Eliot","Mahau",35);  
// let cantinero2 = new Cantinero("Alex","Rojita",25);
let cantinero3 = new Cantinero("Javier",new Cerveza("BLUM",15));  //aqui estamos pasando un obejto ya creado

//cantinero1.servir();
cantinero3.servir()