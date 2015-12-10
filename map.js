'use strict'

var venues = [
  ['eDA', -41.296562, 174.774605],
  ['michaelFowler', -41.289275, 174.776881],
  ['stJames', -41.292997, 174.779768],
  ['westpacStadium', -41.272989, 174.785901],
  ['tsb', -41.287400, 174.778320],
  ['soundShell', -41.282308, 174.767451],
  ['operaHouse', -41.291705, 174.777686]
]

var setMarkers =


function initialize() {
        var myLatLng = {lat: -41.2889, lng: 174.7772}
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(myLatLng),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)


        // Create a marker and set its position.

        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: {lat: venues[1], lng:venues[2],
        //   title: 'Hello World!'
        // });
      }

 var marker = new google.maps.Marker({
          map: map,
          position: {lat: venues[1], lng:venues[2],
          title: 'Hello World!'
        });

      google.maps.event.addDomListener(window, 'load', initialize);

