function modificarTarea() {
  return pregunta('Ingrese el ID de la tarea a modificar: ')
    .then((id) => {
      const tarea = tasks.find(t => t.id === parseInt(id));
      if (!tarea) {
        throw new Error('No se encontró la tarea con el ID especificado.');
      }
      return pregunta('Ingrese la nueva descripción de la tarea: ')
        .then((nuevaDescripcion) => {
          tarea.descripcion = nuevaDescripcion;
          console.log('Tarea modificada:', tarea);
        });
    })
    .catch((error) => {
      console.error('Error al modificar la tarea:', error);
    });
}

  
  
  
  
  
  