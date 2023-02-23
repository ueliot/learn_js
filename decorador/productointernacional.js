class ProductInternacional{
    constructor(product){
        this.product=product;
    }
    getPrice(){
        return this.product.getPrice() +60;
    }
    getName(){
        return this.translate();
    }
    translate(){
        return this.product.getName()+ " Traducido";
    }
    getDescription(){
        return this.product.getDescription() + " spanish";
    }
}

export {ProductInternacional};