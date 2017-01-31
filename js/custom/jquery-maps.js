function initialize() {

    var styleArray = [
        {
            featureType: 'all',
            stylers: [
                { saturation: -180 }
            ]
        },{
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                { hue: '#00ffee' },
                { saturation: 150 }
            ]
        },{
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [
                { visibility: 'off' }
            ]
        }
    ];
    var myLatLng = {lat: 40.7058249, lng: -74.1184301};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng,
        styles: styleArray
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!',
        icon: '../images/icon-marker.png'
    });


}

google.maps.event.addDomListener(window, 'load', initialize);
