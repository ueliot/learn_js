import { BaseDesign } from "./basedesign.js";

class DesingOne extends BaseDesign {
    run(role){
        if (this.isMyResponsabilty(role)){
            //complex logic go here
            return "DesignOne is the best";
        }
        return this.next(role);
    }

    isMyResponsabilty(role){
        return role === 1;
    }

}

export {DesingOne};