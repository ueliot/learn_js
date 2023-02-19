

class LogsFacade {
    constructor(logsIntance){
        this.logsIntance=logsIntance;
    }

    write(mensaje){
    //esta logica podria complicarse mucho si hacemos uso de una api
    //muy extensa
        if (this.logsIntance.checkPermission() && this.logsIntance.checkExistFolder){
            this.logsIntance.generaLogName()
            this.logsIntance.write(mensaje);
        }
    }
}

export default LogsFacade;