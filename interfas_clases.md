> https://datosgobar.github.io/portal-andino/markdown-guide/
> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

No utilices <br> para incrementar el espacio entre líneas de texto;\
para ello utiliza la propiedad margin de CSS o el elemento <p> .

## DIFERENCIA ENTRE CLASE E INTERFAZ
## =================================



La diferencia entre clase e interfaz es sencilla.. \
Una interfaz solo contiene un conjunto de métodos que deben\ 
implementar todas las clases que derivan de ella. Las interfaces no contienen\ 
implementación de los métodos, tan solo la declaración de los mismos.\ 


Al crear una clase que hereda de una interfaz,\ 
se crea la implementación para cada uno de los métodos definidos en esta.\ 

Voy a darte un ejemplo a nivel de implementación..\

Esto es lo que defines en una interfaz (el código está en C#)\

```js

public interface Multisel {
void clear();
    ArrayList getSelected();
    Panel getWindow();
}

//Como verás, solo contiene la declaración de métodos, 
//no posee implementación.

//Esto es lo que contiene la clase:

public class ListSel : Multisel {
    public ListSel() { }
    public void clear() { }
    public ArrayList getSelected() {
        return new ArrayList ();
    }
    public Panel getWindow() {
        return new Panel ();
    }
}
```


Como verás, la clase si contiene implementación, pero más aún,\
 como esta hereda de la interfaz anterior, debe implementar los métodos definidos en esta.\ 


La interfaz es un mecanismo que puede resultar sumamente poderoso\
 en la orientación por objeto en lenguajes como Java o C#,\
  ya que es el mecanismo que permite simular la herencia múltiple\ 



