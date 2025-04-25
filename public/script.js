document.addEventListener("DOMContentLoaded", () => {
    obtenerInformacionClimatica();
});

function obtenerInformacionClimatica() {
    fetch('../backend/datos.php?ciudad=Formosa')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('resultados').innerText = data.error;
            } else {
                document.getElementById("ciudadNombre").innerText = `📍 Ciudad: ${data.ciudad}`;
                document.getElementById("temperatura").innerText = `🌡️ Temperatura: ${data.temperatura}°C`;
                document.getElementById("descripcion").innerText = `🌥️ Clima: ${data.descripcion}`;
                document.getElementById("humedad").innerText = `💧 Humedad: ${data.humedad}%`;
                document.getElementById("viento").innerText = `🌬️ Viento: ${data.viento} m/s`;
                document.getElementById("hora").innerText = `🕐 Hora: ${data.hora}`;
            }
        })
        .catch(err => {
            document.getElementById("resultados").innerText = "Error al obtener datos del clima.";
            console.error(err);
        });
}
