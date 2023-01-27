var map = L.map('map').setView([50.450035, 30.524059], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems,
  },
  draw: {
    polygon: {
      shapeOptions: {
        color: 'purple'
      }
    },
    polyline: {
      shapeOptions: {
        color: 'red'
      },
    },
    rect: {
      shapeOptions: {
        color: 'green'
      },
    },
    circle: {
      shapeOptions: {
        color: 'purple'
      },
    },
  },

});
map.addControl(drawControl);

map.on("draw:created", function (e) {
  var type = e.layerType;
  var layer = e.layer;
  console.log(layer.toGeoJSON())

  layer.bindPopup(`<p>${JSON.stringify(layer.toGeoJSON())}</p>`)
  drawnItems.addLayer(layer);
});

map.on("draw:edited", function (e) {
  var layers = e.layers;
  var type = e.layerType;

  layers.eachLayer(function (layer) {
    console.log(layer)
  })

});

