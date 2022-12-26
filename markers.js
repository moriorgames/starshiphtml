let markers1 = [];
let markers2 = [];
let markers3 = [];
const parallax = 0.1;
const markSpeed = 0.7;
const horizon = 250;
const stepCloser = 17;
const markerSize = 0.15;
const canvasPaddingOnParallax = 50;

function initMarkers() {
    markers1.push({x: 100, y: horizon, size: 2});
    markers1.push({x: 200, y: horizon, size: 2});
    markers1.push({x: 300, y: horizon, size: 2});
    markers1.push({x: 400, y: horizon, size: 2});
    markers1.push({x: 500, y: horizon, size: 2});

    markers2.push({x: 100, y: horizon + 65, size: 2});
    markers2.push({x: 200, y: horizon + 65, size: 2});
    markers2.push({x: 300, y: horizon + 65, size: 2});
    markers2.push({x: 400, y: horizon + 65, size: 2});
    markers2.push({x: 500, y: horizon + 65, size: 2});

    markers3.push({x: 100, y: horizon + 130, size: 2});
    markers3.push({x: 200, y: horizon + 130, size: 2});
    markers3.push({x: 300, y: horizon + 130, size: 2});
    markers3.push({x: 400, y: horizon + 130, size: 2});
    markers3.push({x: 500, y: horizon + 130, size: 2});
}

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
