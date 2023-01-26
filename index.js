var map = L.map('map').setView([50.450035, 30.524059], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var markerOne = L.marker([50.463279, 30.545003]).addTo(map);
var markerTwo = L.marker([50.450035, 30.524059]).addTo(map);

markerOne.bindPopup("<b>Trukhaniv Island</b><br>Kyiv, Ukraine").openPopup();
markerTwo.bindPopup("<b>Khreshchatyk Street</b><br>Kyiv, Ukraine").openPopup();

var circleOne = L.circle([50.453451, 30.515935], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 110
}).addTo(map);

var circleTwo = L.circle([50.433346, 30.521891], {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.5,
  radius: 110
}).addTo(map);

circleOne.bindPopup("Sofiivska Square");
circleTwo.bindPopup("Olimpiyskiy National Sports Complex");

var polygonOne = L.polygon([
  [50.444447, 30.541654],
  [50.446770, 30.537363],
  [50.448314, 30.539487],
  [50.446030, 30.543623]
]).addTo(map);

var polygonTwo = L.polygon([
  [50.459215, 30.524866],
  [50.460595, 30.526771],
  [50.459040, 30.527472],
  [50.457814, 30.528519],
  [50.457725, 30.528342],
  [50.458544, 30.527114],
  [50.458611, 30.526626],
  [50.458294, 30.526068],
]).addTo(map);

polygonOne.bindPopup("Mariinsky Park");
polygonTwo.bindPopup("Kyiv River Station");

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
