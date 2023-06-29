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
  const parts = command.split(' ');
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
    default:
      console.log('Comando inválido.');
  }
}

function question() {
  const command = prompt('Ingrese un comando (add/remove/complete/list):');
  processCommand(command);
}

question();
