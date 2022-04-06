import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.scss";

const Map = ({ lat1, lng2 }) => {
  // Map Coding
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3dpa2FycnIiLCJhIjoiY2wxbXdseXpwMDU3YzNjbW8wNDdlZzQ5NiJ9.os8JCpLq0qwnzwCfoB6FuQ";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(lat1);
  const [lat, setLat] = useState(lng2);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/swikarrr/cl1myq44s000m14o407teak0r",
      center: [lat, lng],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map__container" />;
};

export default Map;
