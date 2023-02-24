# Chain of responsability
## cadena de responsabilidad

- este patron de comportamiento permite pasar una peticion \
a travez de una cadena de capturadores o disparadores (handlers) \
de tal modo que cuando es pasado a un eslabon de la cadena se debe pasar al \
siguiente y asi sucesivamente.

- hasta que se llegue al ultimo, y si ya no se puede \
procesar la respuesta se debe devolver hacia atras  \
hasta que al primer eslabon se le devuleva la respuesta \
o de lo contrario en el ultimo eslabon si no hay mas \
respuesta se debe dar uan por defecto.

- por ejemplo en us sistema de validacion, se debe hacer una cadena de \
validaciones   x ejm validad user, validar pasword, token etc....


_nuestro ejemplo: basandonos en el rol de una persona \
vamos a mostrarle un diseño diferente, creamos tres diseños \
diferentes se le pasara un rol y si el rol es requerido entonces devuelve \
este, sino pasara al siguiente si es el rol y lo buscara y devolvera de ese modo \

