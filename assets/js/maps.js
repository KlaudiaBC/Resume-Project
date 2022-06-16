function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 50.034210430238794, lng: 19.217400077564033},
        { lat: 50.23291803204339, lng: 18.965985592594826},
        { lat: 52.40421616089154, lng: 16.914704097158396},
        { lat: 54.447810091053036, lng: 18.53111642182521},
        { lat: 51.518054513849286, lng: -0.17029537902782924 },
        { lat: 51.938549600805246, lng: 4.4726299548197845}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}