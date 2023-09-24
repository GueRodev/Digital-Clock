Proyecto Reloj Digital

Resumen de lo que hace el código:

#1 Se obtienen referencias a elementos HTML con id específicos (hour, minutes, seconds, am) para poder actualizar su contenido más tarde, utilizando document.getElementbyID.

#2 La función updateClock se define para obtener la hora actual, minutos y segundos utilizando el objeto Date, luego formatea estos valores y los asigna a los elementos HTML correspondientes.

#3 Si la hora es mayor que 12, se ajusta a un formato de 12 horas y se cambia la variable am a "PM" para indicar la tarde.

#4 Los valores de hora, minutos, segundos y AM/PM se actualizan en los elementos HTML.

#5 Se configura un temporizador (setTimeout) para llamar a updateClock nuevamente después de 1000 milisegundos (1 segundo), lo que hace que el reloj se actualice cada segundo.

#6 Finalmente, se llama a updateClock una vez para iniciar el proceso de actualización del reloj.

A continuación el codigo

// Obtener elementos HTML por su ID
const hour_Element = document.getElementById('hour');
const minutes_Element = document.getElementById('minutes');
const seconds_Element = document.getElementById('seconds');
const am_Element = document.getElementById('am');

// Función para actualizar el reloj
function updateClock() {
// Obtener la hora actual, minutos y segundos del objeto Date
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let am = 'AM'; // Inicialmente, asumimos que es la mañana (AM).

    // Si la hora es mayor que 12, ajustamos la hora y cambiamos a la tarde (PM) formato de 12 horas
    if (hour > 12) {
        hour = hour - 12;
        am = 'PM';
    }

//Esta condicional se utiliza para convertir la hora del formato de 24 horas al formato de 12 horas y para determinar si es "AM" (antes del mediodía) o "PM" (después del mediodía). Aquí está el desglose paso a paso de cómo funciona:

hour es una variable que contiene la hora actual obtenida del objeto Date. En la mayoría de los sistemas, la hora se representa en formato de 24 horas, lo que significa que puede estar en el rango de 0 a 23.

La condición if (hour > 12) verifica si la hora actual (hour) es mayor que 12. Si es mayor que 12, significa que es después del mediodía (PM), ya que en el formato de 12 horas, las horas van de 1 a 12 para la tarde.

Si la condición es verdadera (es decir, si la hora actual es mayor que 12), se ejecuta el bloque de código dentro del if.

Dentro del bloque de código, se realiza la conversión de la hora al formato de 12 horas. La línea hour = hour - 12; resta 12 horas a la hora actual. Por ejemplo, si la hora actual es 15 (3 PM en formato de 24 horas), después de esta línea de código, hour se establecerá en 3.

Además de restar 12 horas, se establece la variable am en 'PM'. Esto indica que es después del mediodía.

Entonces, en resumen, si la hora actual es mayor que 12 (lo que significa que es después del mediodía), la condicional ajusta la hora al formato de 12 horas y establece am en 'PM'. Si la hora actual es igual o menor que 12, no se realiza ningún ajuste y am permanece en 'AM' (antes del mediodía). Esto permite mostrar la hora en un formato más familiar de 12 horas en lugar del formato de 24 horas.

    // Formatear las horas, minutos y segundos para mostrarlos con dos dígitos (por ejemplo, 05 en lugar de 5)
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Actualizar los elementos HTML con los valores de hora, minutos, segundos y AM/PM
    hour_Element.innerText = hour;
    minutes_Element.innerText = minutes;
    seconds_Element.innerText = seconds;
    am_Element.innerText = am;  // Aquí había un error, corregido para asignar el valor a 'am_Element'

    // Configurar una llamada a esta misma función después de 1000 milisegundos (1 segundo)
    setTimeout(() => {
        updateClock();  // Esto permite que el reloj se actualice cada segundo.
    }, 1000);

}

//Análisis de esta linea de código

setTimeout(() => {
updateClock();
}, 1000);
Esta construcción se utiliza para programar la ejecución de una función después de un cierto período de tiempo, en este caso, después de 1000 milisegundos (1 segundo). Aquí está el desglose de estas líneas de código y su sintaxis:

setTimeout(() => { ... }, 1000);: setTimeout es una función incorporada de JavaScript que se utiliza para ejecutar una función después de un retraso especificado en milisegundos. En este caso, se retrasará la ejecución de la función anónima (una función sin nombre) que se pasa como primer argumento.

() => { ... }: Esta es una función flecha o arrow function en JavaScript. En este caso, se utiliza para definir una función anónima que se ejecutará después del período de tiempo especificado. La función no tiene nombre y se ejecutará una vez pasados los 1000 milisegundos.

updateClock();: Dentro de la función flecha, se llama a la función updateClock(). Esto significa que, después de 1000 milisegundos, se ejecutará la función updateClock.

1000: El segundo argumento de setTimeout especifica el tiempo de espera en milisegundos antes de que se ejecute la función. En este caso, se establece en 1000 milisegundos, lo que equivale a 1 segundo.

Entonces, en resumen, estas líneas de código utilizan setTimeout para programar la ejecución de la función updateClock después de un segundo (1000 milisegundos) de retraso. Esto se utiliza comúnmente en aplicaciones web para actualizar la hora o ejecutar tareas periódicas sin bloquear la interfaz de usuario.

// Llamar a la función updateClock para iniciar el reloj
updateClock();

Mejoras y Mantenimiento

#1 Mejorar las etiquetas y semántica del documento HTML

#2 Mejorar la hoja de estilos evitando duplicidades

#3 Mejorar el código JS utilizando principios solid
