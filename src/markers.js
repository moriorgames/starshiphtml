import initMarkers from './initMarkers.js';

const horizon = 250;
const markersRows = 3;
let markersArray = initMarkers(horizon, markersRows);
let markers1 = markersArray[0];
let markers2 = markersArray[1];
let markers3 = markersArray[2];
const parallax = 0.1;
const markSpeed = 0.7;
const stepCloser = 17;
const markerSize = 0.15;
const canvasPaddingOnParallax = 50;

function resetMarkersPosition(markers) {
    let x = 100;
    markers.forEach(marker => {
        marker.y = horizon;
        marker.x = x;
        x += 100;
    });
}

function moveMarkers(markers) {
    let y = 0;
    markers.forEach(marker => {
        ctx.fillStyle = 'white';
        marker.y += markSpeed;
        const size = marker.y / stepCloser * markerSize;
        ctx.fillRect(marker.x, marker.y, size, size);
        marker.x = marker.x - ((canvas.width / 2 - marker.x) / ((canvas.height + canvasPaddingOnParallax) - marker.y) * parallax);
        y = marker.y;
    });

    if (y > canvas.height) {
        resetMarkersPosition(markers);
    }
}

function drawMarkers() {
    // Limpia el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    // Actualiza la posición de las balizas o marcas
    moveMarkers(markers1);
    moveMarkers(markers2);
    moveMarkers(markers3);

    // Dibuja la siguiente frame en unos pocos milisegundos
    requestAnimationFrame(drawMarkers);
}

// Inicia el bucle de dibujo
initMarkers();
drawMarkers();

window.addEventListener("keydown", (event) => {
    if (event.code == 'ArrowDown') {
        drawMarkers();
    }
}, true);
