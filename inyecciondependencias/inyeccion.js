//Ejemplo de inyeccion de dependencias

//sirve para quitar la responsabilidad de creacion de objetos dentro de otros objetos
//dandolos inyectados de esta manera; siempre trabaja con otro patrones
//como singleton o factory o usando un patron creacional
//esta creacion lo tiene un container para cuando necesites cambiar algo vayas al container
//y los cambies alli




class News {
    constructor(url, parameter=""){
        this.url=url + "/" + parameter;  //here parameter is optional
        
    }

    async get(){
        
        let post = await fetch(this.url)
        .then(response => {console.log(`-----Esta es la response de fetch: ${response}`);return response.json()})
        .then(json => {console.log(`------JSON:${json}`); return json});
        console.log(`Esto es post ${post}`);
        return post;
    }

}

class Writer {
    constructor(news){
        this.news = news;   
    }

    async show(){
        this.posts = await this.news.get();
        if (this.posts.lenght>1){ 
            this.posts.forEach(element => {
                console.log(element.title);
            });
        }else {
            console.log(this.posts);
        }
    }
}

let news = new News('https://jsonplaceholder.typicode.com/todos/',5)  //whit param 5
let writer = new Writer(news);
writer.show();