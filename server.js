const http = require('http');
const tasksModule = require('./tasks')

const tasks = [];

const server = http.createServer((req, res) => {
  if (req.url === '/tasks' && req.method === 'GET') {
     // Configuraro la cabecera de respuesta que es JSON
    res.setHeader('Content-Type', 'application/json');

  const tasks = tasksModule.tasks;
    // Simular un retraso en el envío de las tareas (solo para simular una operación asíncrona)
    setTimeout(() => {
      // Enviar la lista de tareas en formato JSON
      res.end(JSON.stringify(tasks));
    }, 1000); // Simulo asincronismo por unos (ms)
  } else {
    // Si la ruta solicitada no coincide con la API esperada
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
});
// Puedes cambiar el puerto si es necesario
const port = 3000; 
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
