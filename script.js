document.addEventListener('DOMContentLoaded', function() {
    // Simulación de datos de jugadores en línea
    const jugadoresEnLinea = ['Jugador1', 'Jugador2', 'Jugador3'];

    // Obtener el elemento ul donde se mostrarán los jugadores
    const listaJugadores = document.getElementById('lista-jugadores');

    // Mostrar jugadores en la lista
    jugadoresEnLinea.forEach(function(jugador) {
        const li = document.createElement('li');
        li.textContent = jugador;
        listaJugadores.appendChild(li);
    });
});

function guardarConfiguracion() {
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const volumen = document.getElementById('volumen').value;
    const calidadGraficos = document.getElementById('calidadGraficos').value;

    // Aquí puedes realizar acciones con la configuración, como guardarla en el servidor o en localStorage.
    console.log('Configuración guardada:');
    console.log('Nombre de Usuario:', nombreUsuario);
    console.log('Volumen:', volumen);
    console.log('Calidad de Gráficos:', calidadGraficos);
}

function volverAIndex() {
    window.location.href = 'index.html';  // Reemplaza 'index.html' con la ruta correcta si es necesario
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('link').addEventListener('click', function (e) {
        e.preventDefault();

        // Agrega clase para desvanecer el contenido
        document.querySelector('.content').classList.add('hidden');

        // Espera a que termine la transición y redirige a la nueva página
        setTimeout(function () {
            window.location.href = e.target.href;
        }, 500); // 500 milisegundos, debe coincidir con la duración de la transición
    });
});

