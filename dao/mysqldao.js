//import { mysql } from "./..../MYSQL.js"  

//Clase simulacion de BD==============
const mysql = {
    createConnection: ()=>{
        return {
            query: query => {
                //complex query mysql
                return query;            
            }
        }
    }
}

//Clase DAO==========================
class MySqlDao {
    constructor(){
        this.connection = this.createConnection();  //aqui se puede usar singleton
    }

    createConnection(){
        return mysql.createConnection({
            host: "host.com",
            user: 'root' ,
            password: 'password',
            });
    }

    findAll(table){
        console.log(table);
        return this.connection.query(`select * from ${table}`);
    }

    //aqui mas metodos como update, delete, insert, etc

}

export {MySqlDao};