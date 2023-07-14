const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function mostrarMenu() {
  console.log('----- Menú -----');
  console.log('1. Agregar tarea');
  console.log('2. Modificar tarea');
  console.log('3. Completar tarea');
  console.log('4. Eliminar tarea');
  console.log('5. Mostrar Tareas');
  console.log('6. Salir');
  console.log('-----------------');
}

function pregunta(preguntaText) {
  return new Promise((resolve) => {
    rl.question(preguntaText, (respuesta) => {
      resolve(respuesta);
    });
  });
}

function agregarTarea() {
  return pregunta('Ingrese la descripción de la tarea: ')
    .then((descripcion) => {
      const tarea = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        descripcion: descripcion,
        completada: false
      };
      tasks.push(tarea);
      console.log('Tarea agregada:', tarea);
    });
}

function modificarTarea() {
  return pregunta('Ingrese el ID de la tarea a modificar: ')
    .then((id) => {
      const tarea = tasks.find(t => t.id === parseInt(id));
      if (tarea) {
        return pregunta('Ingrese la nueva descripción de la tarea: ')
          .then((nuevaDescripcion) => {
            tarea.descripcion = nuevaDescripcion;
            console.log('Tarea modificada:', tarea);
          });
      } else {
        console.log('No se encontró la tarea con el ID especificado.');
      }
    });
}

function completarTarea() {
  return pregunta('Ingrese el ID de la tarea a completar: ')
    .then((id) => {
      const tarea = tasks.find(t => t.id === parseInt(id));
      if (tarea) {
        tarea.completada = true;
        console.log('Tarea completada:', tarea);
      } else {
        console.log('No se encontró la tarea con el ID especificado.');
      }
    });
}

function eliminarTarea() {
  return pregunta('Ingrese el ID de la tarea a eliminar: ')
    .then((id) => {
      const index = tasks.findIndex(t => t.id === parseInt(id));

      if (index !== -1) {
        const tarea = tasks[index];
        if (tarea.completada === true) {
          const tareaEliminada = tasks.splice(index, 1);
          console.log('Tarea eliminada:', tareaEliminada[0]);
        } else {
          console.log('La tarea no se puede eliminar, aún no se ha completado');
        }
      } else {
        console.log('No se encontró la tarea con el ID especificado.');
      }
    });
}

function displayTasks() {
  console.log('Mostrando Tareas');
  console.log(tasks);
  return Promise.resolve();
}

function salir() {
  console.log('Saliendo del programa...');
  rl.close();
}

async function run() {
  mostrarMenu();

  rl.on('line', async (input) => {
    const opcion = parseInt(input);
    switch (opcion) {
      case 1:
        await agregarTarea();
        break;
      case 2:
        await modificarTarea();
        break;
      case 3:
        await completarTarea();
        break;
      case 4:
        await eliminarTarea();
        break;
      case 5:
        await displayTasks();
        break;
      case 6:
        salir();
        break;
      default:
        console.log('Opción no válida. Por favor, ingrese un número del 1 al 5.');
        mostrarMenu();
        break;
    }
  });

  rl.on('close', () => {
    console.log('Programa finalizado.');
  });
}

run();
