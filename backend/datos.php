<?php 
header('Content-Type: application/json');

$apikey = "76e607a46cf0fc6cd3b37399fc03305a"; 
$ciudad = isset($_GET['ciudad']) ? $_GET['ciudad'] : "Formosa";

$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" . urlencode($ciudad) . "&appid={$apikey}&units=metric&lang=es";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

if (isset($data['main'])) {
    $respuesta = [
        'ciudad' => $data['name'],
        'temperatura' => round($data['main']['temp']),
        'descripcion' => $data['weather'][0]['description'],
        'humedad' => $data['main']['humidity'],
        'viento' => $data['wind']['speed'],
        'hora' => date("H:i"),
    ];
    echo json_encode($respuesta);
} else {
    echo json_encode(['error' => "No se pudo obtener el clima"]);
}
?>
