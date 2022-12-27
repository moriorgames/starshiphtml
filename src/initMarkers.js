function initMarkers(horizon) {
    return [
        [
            {x: 100, y: horizon, size: 2},
            {x: 200, y: horizon, size: 2},
            {x: 300, y: horizon, size: 2},
            {x: 400, y: horizon, size: 2},
            {x: 500, y: horizon, size: 2}
        ],
        [
            {x: 100, y: horizon + 65, size: 2},
            {x: 200, y: horizon + 65, size: 2},
            {x: 300, y: horizon + 65, size: 2},
            {x: 400, y: horizon + 65, size: 2},
            {x: 500, y: horizon + 65, size: 2}
        ],
        [
            {x: 100, y: horizon + 130, size: 2},
            {x: 200, y: horizon + 130, size: 2},
            {x: 300, y: horizon + 130, size: 2},
            {x: 400, y: horizon + 130, size: 2},
            {x: 500, y: horizon + 130, size: 2}
        ]
    ];
}

module.exports = initMarkers;
