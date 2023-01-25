const map = L.map('map').setView([50.450035, 30.524059], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.450035, 30.524059]).addTo(map);
var marker = L.marker([50.463279, 30.545003]).addTo(map);

var circle = L.circle([50.453451, 30.515935], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 110
}).addTo(map);

var circle = L.circle([50.433346, 30.521891], {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.5,
  radius: 110
}).addTo(map);

var polygon = L.polygon([
  [50.444447, 30.541654],
  [50.446770, 30.537363],
  [50.448314, 30.539487],
  [50.446030, 30.543623]
]).addTo(map);

var polygon = L.polygon([
  [50.459215, 30.524866],
  [50.460595, 30.526771],
  [50.459040, 30.527472],
  [50.457814, 30.528519],
  [50.457725, 30.528342],
  [50.458544, 30.527114],
  [50.458611, 30.526626],
  [50.458294, 30.526068],
]).addTo(map);
