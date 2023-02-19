

class AdvanceLogsLibrary {
    constructor(){
        //Big complex method
        console.log("_constructor");
    }
    checkPermission(){
        //Big complex method
        console.log("_checkPermission");
        return true;        
    }
    checkExistFolder(){
        //Big complex method
        console.log("_checkExistFolder");
        return true;
    }
    generaLogName(){
        //Big complex method
        console.log("_generaLogName");
        return "generated log Name";
    }
    write(message){
        //Big complex method
        console.log("_write message", message);
        return true;
    }
}

export {AdvanceLogsLibrary};
