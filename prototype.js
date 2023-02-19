/*
El patron prototipo sirve para crear un objeto
a partir de otro objeto iniciado
se usa mucho en videojuegos al clonar estructuras, en copy paste, al clonar una imagen o clonar un texto
podemos usar el operador spread, pero prototype va mas alla
puede servir para conexiones a base de datos
para que los nuevos objetos tengan ya los valores creados
NOTA: todos los objetos en Javascript tienen una propiedad prototype pero esto no es el patron:


en este patron  Prototype siempre vamos a encontrar una clase que es la que hace 
la clonacion o el prototipo, los prototipos en si mismos y el cliente
siendo este ultimo donde se va a ejecutar esto

imaginarte el prototipo como un molde para crear un objeto;
pero diras y las clases que hacen? si pero este molde tiene
ciertos elementos x defecto que vas a clonar y otro atributos que no quieres que cambien,
puede que otro atributos no se requieran clonar 
por que son de uso de la clase en si; por esto no sirve usar el operador spread
{...obj}=> por que esto clona todo;

*/

class ConectionPrototype{
        constructor(proto){
            this.proto=proto;
            return this.clone();  //al llamar a new se ejecuta clone()

        }
        clone(){
            let conection = new Conection();
            conection.driver = this.proto.driver;
            conection.server = this.proto.server;
            conection.database = this.database;
            conection.user = this.user;
            conection.password=this.password;

            //Estos atributos son los que yo se que voy a necesitar para
            //usarlos posteriormente como base
            return conection;
        }
}


//Esta es la aplicacion donde voy a usar Prototypes===============
//Una simulacion a conexion a una Base de datos

class Conection{
    constructor(driver,server,database,user,password){
        this.driver=driver;
        this.server=server;
        this.database=database;
        this.user=user;
        this.password=password;
        this.status=0;  //atributo diferente que no sera pasado al prototipo
        //Aqui este atributo tiene un compartamiento en la vida del software
        //y no lo deberia clonar
    }
    getConection(){
        this.status=1; //aqui cambia
        return this.driver + "//server:" +this.server+";database:"+ this.database+ ";user:"+this.user +";pass:"+this.password;
    }
    closeConection(){
        this.status=0; //aqui cambia
    }
}


//creo el prototipo:

let conectionSqlServerPrototype = new Conection("SQL","localhost","beerDB","sa","123456");  
//esto es solo el prototipo 
//se puede usar si; pero x buenas practicas es solo el molde o sea el prototipo
//estos prototipos podria estar en un fichero aparte en un lugar seguro del proyecto.

//creo el o los objetos que voy a usar
let conectionSqlServer = new ConectionPrototype(conectionSqlServerPrototype);
let otraConexion= new ConectionPrototype(conectionSqlServerPrototype);

conectionSqlServer.driver="MariaDB"  //ver que cambia el clon mas no el prototipo
console.log(conectionSqlServerPrototype);
console.log(conectionSqlServer);

//Clonando con operador spread
//Aqui se genera un error con el status que se clona igual y no deberia
conectionSqlServer.getConection();
let miclone = {...conectionSqlServer}; //aqui el status=1; 
//es como que está conectado al clonar y no tendria sentido crear una nueva conexion con spread
console.log(miclone);
console.log(otraConexion);





