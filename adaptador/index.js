
import { AnalyticsLibrary } from "./analyticslibrary.js";
import { JsonReader } from "./jsonreader.js";
import { JsonToXmlAdapter } from "./jsontoxmladapter.js";

let data = new JsonReader().read();
new AnalyticsLibrary().process(data);
new AnalyticsLibrary().process("<xml>");


let data1 = new JsonToXmlAdapter (new JsonReader()).read();  //usando el adapter

console.log("usando adapter",data1);
new AnalyticsLibrary().process(data1);

//AnaliticsLibrary  y JsonReader no tiene un constructor explicito
//sin embargo se pueden usar asi: new AnalyticsLibrary()  fijarse en el ()

//siempre index.js en la medida de lo posible debe tener
//solo logica de ejecucion no sobrecargarla con responsabilidades 
//que no corresponda


/*aqui paea solucionar podemos hacer lo siguiente:
en la AnalyticsLibrary podemos modificar los metodos para 
si viene otro tipo de datso convertirlos y asi    ----- MAl

otra solucion seria crear una funcion que convierta de JsonToXml
y usarla en index, (Helpers)------  recuerda no sobrecargar de responsabilidad en este caso a index


la otra es usando el patron Adaptador
creamos la clase: JsonToXmlAdapter
la idea de esta clasa es solo convertir informacion adaptada a nuestro requerimiento
deberemos de tener metodos con el mismo nombre de la clase que queremos adaptar.
read() para nuestro caso, se deberia crear interfaces aui pero en javascript es muy complejo
para que nuestra clase abstracta nos obligue a tener estas mismas funciones
para nuestro caso read(), con esto las personas que entran a ver nuestro codigo no tendran 
problemas con el adaptador

el constructor de la clase adaptador, va a recojer los objetos de o que quiero convertir.
en este caso JsonReader

lo primero es leer la data que queremos convertir x eso es que los metodos se deben llamar 
de las misma forma

*/