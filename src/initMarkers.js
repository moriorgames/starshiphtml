export default function initMarkers(horizon, rows) {
    const markers = [];
    const markersPerRow = 5;
    for (let row = 0; row < rows; row++) {
        markers[row] = [];
        for (let marker = 0; marker < markersPerRow; marker++) {
            markers[row][marker] = {
                x: 100 + 100 * marker,
                y: horizon + 65 * row,
                size: 2,
            };
        }
    }
    return markers;
}
