// Crea un array para almacenar las balizas o marcas
const markers = [];
// Establece el factor de paralaje
const parallax = 0.2;
const markWidth = 7;
const markHeight = 4;
const markSpeed = 0.7;

// Inicializa la posición de las balizas o marcas
function initializeMarkers() {
    for (let i = 0; i < 3; i++) {
        markers[i] = [];
        for (let j = 0; j < 10; j++) {
            markers[i][j] = {x: j * 100, y: 300 - i * 100};
        }
    }
}

function draw() {
    // Limpia el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    // Dibuja las balizas o marcas en el suelo
    ctx.fillStyle = 'white';
    // Actualiza la posición de las balizas o marcas
    markers.forEach((row, i) => {
        row.forEach((marker, j) => {
            ctx.fillRect(marker.x, marker.y, markWidth, markHeight);
            marker.y += markSpeed;
            marker.x = marker.x - ((canvas.width / 2 - marker.x) / (canvas.height - marker.y)) * parallax;

            // Si una baliza o marca se sale del canvas por abajo, resetea su posición a la altura del suelo
            if (marker.y > canvas.height) {
                marker.y = 300 - i * 100;
                marker.x = j * 100;
            }
        });
    });

    // Dibuja la siguiente frame en unos pocos milisegundos
    requestAnimationFrame(draw);
}

// Inicia el bucle de dibujo
initializeMarkers();
draw();
