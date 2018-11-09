
mapboxgl.accessToken = "pk.eyJ1IjoicHJpenphIiwiYSI6ImNqbjlkZW4ycDAwYTQzcHAzc3N3bnJkZmkifQ.bX3NbWd6FaE78ETqbiGw1A";

    /* Map: This represents the map on the page. */
  var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v9",
  zoom:12.0,
  center: [-89.588301,33.058108]
});

map.on("load", function () {
  /* Image: An image is loaded and added to the map. */
  map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
      if (error) throw error;
      map.addImage("custom-marker", image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      map.addLayer({
        id: "markers",
        type: "symbol",
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features:[{"type":"Feature","geometry":{"type":"Point","coordinates":[-89.588301,33.058108]}}]}
        },
        layout: {
          "icon-image": "custom-marker",
        }
      });
    });
});
