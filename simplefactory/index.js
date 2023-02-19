//import { Cart } from "./cart.js";
import { CartFactory } from "./factory.js";
import "./create.js";

//Sin Factory
// new Cart().create();
// new Cart().read();
// new Cart().uptade();
// new Cart().delete();



//Con factory
let car1 = CartFactory.make();
car1.create();
car1.read();
car1.uptade();
car1.delete();