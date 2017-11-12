const styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#0c0b0b"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#090909"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d4e4eb"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fef7f7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9b7f7f"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#fef7f7"
            }
        ]
    }
];

function initLvivMap() {
    var uluru = {lat: 49.839293, lng: 23.974520};
    var map = new google.maps.Map(document.getElementById('map-lviv'), {
      zoom: 16,
      center: uluru,
      styles: styles
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}

function initLubinMap() {
    var uluru = {lat: 49.719955, lng: 23.730933};
    var map = new google.maps.Map(document.getElementById('map-lubin'), {
        zoom: 16,
        center: uluru,
        styles: styles
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function initMaps() {
    initLvivMap();
    initLubinMap();
}

