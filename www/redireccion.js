    // Definir la URL a la que se redireccionará después de un tiempo de espera
    const redirectURL = "views/dash.html";

    // Esperar a que la página se cargue completamente
    $(document).ready(function() {
        // Definir el tiempo de espera antes de redireccionar (en milisegundos)
        const tiempoDeEspera = 5000; // 5 segundos

        // Esperar el tiempo definido antes de redireccionar
        setTimeout(function() {
            // Agregar una transición suave al cuerpo de la página
            $('body').fadeOut(1000, function() {
                // Redireccionar al URL definido después del tiempo de espera
                window.location.href = redirectURL;
            });
        }, tiempoDeEspera);
    });
