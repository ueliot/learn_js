import { BaseDesign } from "./basedesign.js";

class DesingThree extends BaseDesign {
    run(role){
        if (this.isMyResponsabilty(role)){
            //complex logic go here
            return "DesignThree is the best";
        }
        return this.next(role);
    }

    isMyResponsabilty(role){
        return role === 3;
    }
}

export {DesingThree};