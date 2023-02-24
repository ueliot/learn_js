import { MySqlDao } from "./mysqldao.js";

let mySqlInstance = new MySqlDao();  //aqui ya se crea una coneccion a la BD

console.log(mySqlInstance.findAll("user"));