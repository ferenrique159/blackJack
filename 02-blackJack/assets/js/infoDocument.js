// El document como bien sabemos hace referencia a todo el cuerpo de la pagina mostrada dentro de este document esta el html que bien es representado como sea con sus estilos previamente colocados

// Al colocar el document.'algo', hacemos referencia a una funcion que podemos establecer dentro de este documento, hay una gran variedad

// En este caso, se coloca como ejemplo el "querySelector()", que no hace mas que seleccionar una parte de una etiqueta o tag dentro del HTML y se pueda cambiar o eliminar bien sea lo que deseemos. Sin embargo esta funcion es un poco cerrada ya que muestra solo el primer elemento que coincida con el valor que uno le esta mandando. Puede ser el body, small, header, cualquier etiqueta previa hecha ya en el HTML


// Hay diferentes modos de buscar dentro de estos querySelector, puede ser por la etiqueta o tag, o puede ser por el id o clase designada a la palabra que queremos cambiar, en caso de ser una etiqueta ('hola'), de ser id ('#hola') y de ser class ('.hola')

// Hay uno que es un poco mas completo que si nos trae todas las etiquetas o tag que coincidan con el valor previamente colocado a buscar o a cambiar es el "querySelector()"

// Mas alla de esta funcion se le puede concatenar otra funcion, que tambien es una gran variedad. En este caso de usará "inneText" que cambie es el texto directo del html a mostar mas no toda la etiqueta, para poder hacer eso se debe utilizar la funcion innerHTML, que si puede cambiar el valor primario

// No solo se puede conseguir un elemento o add un elemento en una zona especifica, tambien se le puede agregar una clase dentro de una etiqueta o btn que fue nuestro caso de prueba, esta seria luego de las funciones realizadas para conseguir el tag + .classList = 'algo', ademas de tambien crear una nueva etiqueta con la funcion .createElement y por ultimo el .append que indica que sera agregado al final de la etiqueta donde sea colocado o agregado, tambien se puede colocar al principio. ademas tambien es buena practica tener en una variable ya el codigo del js para que no este realizando la busqueda dentro del html cada vez que sea llamado, asi la aplicacion es mucho mas rapida y facil de mantener

// Ejmeplos:

const divBoton = document.querySelector('#divButton');
const botonNEw = document.createElement('button');
botonNEw.classList = ('btn btn-primary')

divBoton.append(botonNEw);