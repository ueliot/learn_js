
/*
<p>El Patron simple factory crea un objeto que sirve para crear otros objetos;
ayuda a mantener la creacion de objetos en un solo 
lugar (fabrica) y evitar estar creando objetos por todo el
codigo fuente; esta es la forma simple comparado al patron Factory

tengo una clase Cart que hace CRUD(crea, lee, catualiza y borra), creamos objetos en diferentes partes
de la aplicacion, sin embargo ahora necesito modificar la clase y ahora 
ésta tendra un constructor para una base de datos; si modificamos la clase.
ahora tendremos que cambiar los tropecientos objetos creados en las diferentes partes del codigo.
y esto es un problema.

para ello usamos este patron simply factory:

creamos la clase CarFactory aqui usaremos la clase Cart; esta
clase CarFactory sera la unica que se usará para crear los objetos.
aqui tendremos un metodo estatico que que llamara make()

static make(); este metodo tendra 
la posibilidad de crear un objeto Cart y retornarlo
como el metodo es estatico, simplemente llamamos a la clase que retorna el objeto
sin necesidad de crearle una instancia.


let car = CarFactory.make()   //crea el objeto car usando la fabrica
car.create();
car.update();

de este modo es mas simple modificar la creacion de objetos
ya que en el solo en el metodo make del factory, se hace la modificacion
y todos los objetos dentro de la aplicacion tendran ya la modificacion echa.

en create.js y en index.js se usan los objetos, creandolos desde la factory
</p>

*/
