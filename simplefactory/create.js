
// import { Cart } from "./cart.js";

// let car1= new Cart();
// car1.create();


//Con factory
import {CartFactory} from "./factory.js"

let car1= CartFactory.make();
car1.create();