//Esta es la clase simple factory
//desde aqui se crean y retornan los objetos staticos
import {Cart} from "./cart.js"

class CartFactory {
    static make(){
        return new Cart("MariaDB1");
    }
}

export {CartFactory};