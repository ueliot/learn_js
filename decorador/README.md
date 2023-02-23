# Patron Decorador

- Decorador ofrece la capacidad de añadir comportamiento a una clase \
ya existente, basicamente usamos los mismos metodos de la clase que se va a decorar \
de este modo le pasaremos el objeto base y se añadirá la funcionalidad adicional. \

- La idea es que el decorador no sea esencial para el funcionamiento \
de la clase base, de este modo si quitamos el decorador la clase seguirá \
siendo la misma.


- El ejemplo muestra una clase Producto y un decorador llamado \
ProductoInternacional (tiene un constructor que recibirá el objeto base) \
esta clase tendrá los mismos metodos que la clase sin decorar \
de modo que podriamos usar uno u otro o condicionar con o sin decorador.

