function mostrarFormularioCambiarNombre() {
    // Mostrar el formulario de cambiar nombre
    // o esconder la sección actual de la plantilla del usuario
  
    // Actualizar el nombre de usuario con el nuevo valor
    const nuevoNombre = prompt("Ingrese su nuevo nombre:");
    if (nuevoNombre) {
      nombreUsuario.textContent = nuevoNombre;
    }
  }
  
  // Seleccionar el elemento del nombre de usuario
  const nombreUsuario = document.querySelector('.nombre');