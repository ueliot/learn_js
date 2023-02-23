import { Product  } from "./producto.js";
import { ProductInternacional } from "./productointernacional.js";

let international=true;

let product = new Product();

if (international){
    product = new ProductInternacional(product);
}


//Esta parte es lo mismo tanto para la clase decorada como la sin decorar
console.log(product.getPrice());
console.log(product.getName());
console.log(product.getDescription());