## PREGUNTAS Y RESPUESTAS  async y await y el método then()

Al momento de ejecutar pues no se nota gran cosa puesto que no existe una gran carga de archivos
En el codigo si logre notar algunas cosas.

# ¿Qué sucedio al usar async y await?

Al utilizar async y await, el código se ve más sincrónico y se pueden  manejar los casos de éxito como los errores utilizando por ejemplo los bloques try-catch. 
De esta manera se hace más fácil y legible tratar los errores y realizar mejor control sobre las acciones de las funciones.

# ¿Qué sucedio al usar el método then()?

Cuando usas el método then():

El método then() se utiliza para encadenar el manejo de promesas y permite especificar funciones de devolución de llamada separadas para el caso de éxito (then()) y el caso de error (catch()). Esto puede resultar en un código más detallado pero complicado cuando se tienen múltiples operaciones asíncronas encadenadas.

Al utilizar el método then(), el flujo del código no se ve tan secuencial y síncrono como con async y await. Es necesario anidar las llamadas then() para manejar múltiples operaciones asíncronas consecutivas, lo que puede dificultar la lectura y el mantenimiento del código.
# ¿Qué diferencias encontraste entre async, await y el método then()?

En general, async y await se tiene mejor legibilidad y capacidad para manejar errores con bloques try-catch. Sin embargo, el método then() es útil cuando trabajas con herramientas que utilizan promesas .


## Conclusión
* Para resumir, las promesas y async await resuelven la asincronía de distinta forma. Con las promesas no sabemos cuándo se va a resolver y con async await forzamos una espera en la función. No siempre se va a usar uno, el otro o ambos, por ello lo primero es entender el caso de uso y después empezamos a implementar todo lo que hemos aprendido aquí.

# Cuando se Trabaja con servidores

Ambas formas son válidas y pueden funcionar para enviar y recibir información de un servidor. Sin embargo, por conveniencia y compatibilidad con las bibliotecas y herramientas existentes, el uso del método then() es generalmente más común y recomendado en este contexto.