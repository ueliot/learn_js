
class Cart {
    constructor(database){
        this.database=database;
    }

    create(){
        console.log("create", this.database)        
    }

    uptade(){
        console.log("update")
    }

    delete(){
        console.log("delete")
    }

    read(){
        console.log("read")
    }
}

export {Cart};

