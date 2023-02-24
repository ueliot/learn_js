class BaseDesign{
    setNext(next){
        this._next=next;
    }

    next(role){
        if (this._next){
            return this._next.run(role);
        } 
        return "There are not design for this role";       
    }
}

export {BaseDesign};