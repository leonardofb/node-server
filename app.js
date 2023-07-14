const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = []; // Array para almacenar las tareas

function mostrarMenu() {
  console.log('----- Menú -----');
  console.log('1. Agregar tarea');
  console.log('2. Modificar tarea');
  console.log('3. Completar tarea');
  console.log('4. Eliminar tarea');
  console.log('5. Mostrar Tareas');
  console.log('6. Salir');
  console.log('-----------------');
//console.log(tasks);  
}


function agregarTarea() {
  rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
    const tarea = {
      id: tasks.length + 1,
      descripcion: descripcion,
      completada: false
    };
    tasks.push(tarea);
    console.log('Tarea agregada:', tarea);
    mostrarMenu();

  });

}

function modificarTarea() {
  rl.question('Ingrese el ID de la tarea a modificar: ', (id) => {
    const tarea = tasks.find(t => t.id === parseInt(id));
    if (tarea) {
      rl.question('Ingrese la nueva descripción de la tarea: ', (nuevaDescripcion) => {
        tarea.descripcion = nuevaDescripcion;
        console.log('Tarea modificada:', tarea);
        mostrarMenu();
      });
    } else {
      console.log('No se encontró la tarea con el ID especificado.');
      mostrarMenu();
    }
  });
}

function completarTarea() {
  rl.question('Ingrese el ID de la tarea a completar: ', (id) => {
    const tarea = tasks.find(t => t.id === parseInt(id));
    if (tarea) {
      tarea.completada = true;
      console.log('Tarea completada:', tarea);
      mostrarMenu();
    } else {
      console.log('No se encontró la tarea con el ID especificado.');
      mostrarMenu();
    }
  });
}

function eliminarTarea() {
  rl.question('Ingrese el ID de la tarea a eliminar: ', (id) => {
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
      const tareaEliminada = tasks.splice(index, 1);
      console.log('Tarea eliminada:', tareaEliminada[0]);
      mostrarMenu();
    } else {
      console.log('No se encontró la tarea con el ID especificado.');
      mostrarMenu();
    }
  });
}

function displayTasks() {
  console.log('Mostrando Tareas');
  console.log(tasks);  
  mostrarMenu();
}

function salir() {
  console.log('Saliendo del programa...');
  rl.close();
}

mostrarMenu();

rl.on('line', (input) => {
  const opcion = parseInt(input);
  switch (opcion) {
    case 1:
      agregarTarea();
      break;
    case 2:
      modificarTarea();
      break;
    case 3:
      completarTarea();
      break;
    case 4:
      eliminarTarea();
      break;
      case 5:
        displayTasks();
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