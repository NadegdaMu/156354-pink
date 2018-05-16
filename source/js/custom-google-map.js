
google.maps.event.addDomListener(window, 'load', init);

  function init() {

  var mapOptions = {

  zoom: 18,

  center: new google.maps.LatLng(59.9387942, 30.323083300000008),
  styles: [{"featureType": "poi.business","elementType": "all","stylers":[{"visibility": "off"}]},{"featureType": "poi.park","elementType": "labels.text","stylers":[{"visibility": "off"}]}]

  };

  var mapElement = document.getElementById('map');


  var image1 = new google.maps.MarkerImage(
    'img/icon-map-marker.svg',
    new google.maps.Size(36,36),
    new google.maps.Point(0,0),
    new google.maps.Point(18,36)
  );

  var map = new google.maps.Map(mapElement, mapOptions);

  var marker1 = new google.maps.Marker({
    draggable: false,
    raiseOnDrag: false,
    position: new google.maps.LatLng(59.9387942, 30.323083300000008),
    icon: image1,
    map: map,
  });
}
