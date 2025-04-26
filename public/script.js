document.addEventListener("DOMContentLoaded", () => {
    const buscarCiudad = document.getElementById("buscar"); 
    const inputCiudad = document.getElementById("inputCiudad"); 
    buscarCiudad.addEventListener("click", () => {
        const ciu = inputCiudad.value; 
        
        obtenerInformacionClimatica(ciu); 
    });
});

function obtenerInformacionClimatica(ciu) {
    
    fetch(`../backend/datos.php?ciudad=${ciu}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('mensajeError').innerText = data.error;
            } else {
                // Limpiar errores anteriores
                document.getElementById('mensajeError').innerText = '';

                document.getElementById("ciudadNombreResultado").innerText = `📍 Ciudad: ${data.ciudad}`; 
                document.getElementById("temperaturaResultado").innerText = `🌡️ Temperatura: ${data.temperatura}°C`;
                document.getElementById("descripcionResultado").innerText = `🌥️ Clima: ${data.descripcion}`;
                document.getElementById("humedad").innerText = `💧 Humedad: ${data.humedad}%`;
                document.getElementById("viento").innerText = `🌬️ Viento: ${data.viento} m/s`;
                document.getElementById("hora").innerText = `🕐 Hora: ${data.hora}`;
            }
        })
        .catch(err => {
            document.getElementById("mensajeError").innerText = "Error al obtener datos del clima.";
            console.error(err);
        });
    console.log("Datos climáticos obtenidos y mostrados en la interfaz.");
}

