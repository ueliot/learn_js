import { BaseDesign } from "./basedesign.js";

class DesingTwo extends BaseDesign{
    run(role){
        if (this.isMyResponsabilty(role)){
            //complex logic go here
            return "DesigTwo is the best";
        }
        return this.next(role);
    }

    isMyResponsabilty(role){
        return role === 2;
    }

}

export {DesingTwo};