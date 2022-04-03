let latitude = 38.8951;
let longitude = -77.0364;

mapboxgl.accessToken = 'pk.eyJ1IjoiYWprNjU0OCIsImEiOiJjbDFqNXhnNXYwdG9qM2RvNXd6bWh5azI1In0.x6ecQE8aj-ZbXAARY8cj4Q'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true,
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    }),
    'top-left'
)