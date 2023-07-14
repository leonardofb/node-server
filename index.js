//app.jsx  -- lista de tareas
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask(indicator, description) {
  const task = { indicator, description, completed: false };
  tasks.push(task);
  console.log('Tarea añadida correctamente.');
}

function removeTask(indicator) {
  tasks = tasks.filter((task) => task.indicator !== indicator);
  console.log('Tarea eliminada correctamente.');
}

function completeTask(indicator) {
  const task = tasks.find((task) => task.indicator === indicator);
  if (task) {
    task.completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('No se encontró la tarea.');
  }
}

function displayTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task) => {
    const status = task.completed ? '[X]' : '[ ]';
    console.log(`${status} ${task.indicator} - ${task.description}`);
  });
}

function processCommand(command) {
  const parts = command.split('');
  const action = parts[0];
  const args = parts.slice(1);

  const [indicator, description] = args;

  console.log(indicator);
  console.log(description);

  switch (action) {
    case 'add':
      addTask(indicator, description);
      break;
    case 'remove':
      const [removeIndicator] = args;
      removeTask(removeIndicator);
      break;
    case 'complete':
      const [completeIndicator] = args;
      completeTask(completeIndicator);
      break;
    case 'list':
      displayTasks();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Comando inválido.');
  }
}

function question() {
      
  
  rl.question('Ingrese un comando (add/remove/complete/list/exit):', (command) => {
   
    
    processCommand(command);
    if (command !== 'exit') {
      question(); // Vuelve a llamar a la función para continuar preguntando
    }
  });
}
question();



//////////////////////////////////////////////////////////////////
function mostrarMenu() {
  console.log('=== Menú ===');
  console.log('1. Agregar tarea');
  console.log('2. Salir');
  
  const opcion = readline.question('Ingrese su opción: ');

  switch (opcion) {
    case '1':
      agregarTarea();
      break;
    case '2':
      console.log('¡Hasta luego!');
      process.exit(0); // Terminar la ejecución del programa
    default:
      console.log('Opción inválida.');
      mostrarMenu();
  }
}

function agregarTarea() {
  const tarea = readline.question('Ingrese la tarea: ');
  const descripcion = readline.question('Ingrese la descripción: ');

  // Aquí puedes hacer lo que necesites con la tarea y la descripción ingresadas,
  // como almacenarlas en un arreglo o enviarlas a una API, por ejemplo.
  
  console.log('Tarea agregada exitosamente.');
  mostrarMenu();
}

mostrarMenu();

