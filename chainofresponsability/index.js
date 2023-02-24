import { DesingOne} from "./designone.js"
import { DesingTwo } from "./designtwo.js"
import { DesingThree } from "./designthree.js"

const designone = new DesingOne();
const designtwo = new DesingTwo();
const designthree = new DesingThree();

designone.setNext(designtwo);
designtwo.setNext(designthree);

//let role =1;
let role =2;
// let role =3;
//let role =100;
// let role =500;
const finalDesign = designone.run(role);

console.log(finalDesign);

