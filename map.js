'use strict'
var southernCrossGigs = [ ['friday', 'toms band'],
['saturday', 'good music band'],
['sunday', 'sunday jams']
]

var michaelGigs = [ ['friday', 'james band'],
['saturday', 'less good at drums band'],
['sunday', 'sunday afternoon jams']
]


var venues = [
['Southern Cross', -41.296562, 174.774605, 'toms band', 'Super Awesome Fantastic Show'],
['Michael Fowler Centre', -41.289275, 174.776881, 'jerry and the rats', 'The most amazing...'],
['ST James Theatre', -41.292997, 174.779768, 'Annie run so fast', 'This is a real show'],
['Westpac Stadium', -41.272989, 174.785901, 'Band 13', 'Show 21'],
['TSB Arena', -41.287400, 174.778320, 'Adventure Time', 'Jojo galor'],
['Sound Shell', -41.282308, 174.767451, 'Dad convention', 'World premier'],
['Opera House', -41.291705, 174.777686, 'katie', 'michael']
]

// var contentInfo =

function initialize() {
  var myLatLng = {lat: -41.2889, lng: 174.7772}
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)


        // Create a marker and set its position.

        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: {lat: venues[1], lng:venues[2],
        //   title: 'Hello World!'
        // });
setMarkers(map)

}

function setMarkers(map) {
  for(var i = 0; i < venues.length; i++) {
    var venue = venues[i]
    var marker = new google.maps.Marker({
      map: map,
      position: {lat: venue[1], lng:venue[2]},
      title: venue[0]
    });
    setMarkerListener(map, marker, venue)
  }

  for(var j = 0; j < venues.length; j++) {
   var venue = venues[j]


 }
}

function setMarkerListener (map, marker, venue) {
  var contentInfo = 'Tonights gig: ' + venue[3] + ' , ' + venue[4]
  console.log(contentInfo)

  var infoWindow = new google.maps.InfoWindow({
    content:contentInfo
  })
  marker.addListener('click', function() {
    infoWindow.open(map, marker)
  })
}

google.maps.event.addDomListener(window, 'load', initialize);

