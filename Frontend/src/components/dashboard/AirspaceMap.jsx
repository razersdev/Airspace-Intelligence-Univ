import { useEffect, useRef } from "react";

import {
  Map,
  Marker,
  Popup,
  NavigationControl,
  setWorkerUrl,
} from "maplibre-gl";

import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";

import "maplibre-gl/dist/maplibre-gl.css";

import { aircraftData as defaultAircraftData } from "../../mocks/airspace";

setWorkerUrl(workerUrl);

/* =========================================
   AIRCRAFT COLOR
========================================= */

function getAircraftColor(altitude) {
  if (altitude >= 30000) {
    return "#a855f7";
  }

  if (altitude >= 20000) {
    return "#168cff";
  }

  if (altitude >= 10000) {
    return "#22c55e";
  }

  return "#f5b51b";
}

/* =========================================
   AIRCRAFT MARKER
========================================= */

function createAircraftElement(aircraft) {
  const color = getAircraftColor(aircraft.altitude);

  const element = document.createElement("div");

  element.className = "aircraft-map-icon";

  element.innerHTML = `
    <div
      class="plane-marker"
      style="
        color: ${color};
        transform: rotate(${aircraft.heading}deg);
      "
    >
      ✈
    </div>
  `;

  return element;
}

/* =========================================
   UBP MARKER
========================================= */

function createUBPElement() {
  const element = document.createElement("div");

  element.className = "ubp-map-marker";

  element.innerHTML = `
    <div class="ubp-pin">
      <span>●</span>
    </div>
  `;

  return element;
}

/* =========================================
   FLIGHT PATH DATA
========================================= */

const flightPaths = [
  {
    id: "path-1",
    color: "#f5b51b",
    positions: [
      [-6.15, 107.05],
      [-6.25, 107.18],
      [-6.32, 107.30],
      [-6.24, 107.48],
    ],
  },

  {
    id: "path-2",
    color: "#22c55e",
    positions: [
      [-6.42, 107.12],
      [-6.35, 107.25],
      [-6.32, 107.30],
      [-6.22, 107.48],
    ],
  },

  {
    id: "path-3",
    color: "#168cff",
    positions: [
      [-6.10, 107.22],
      [-6.22, 107.32],
      [-6.30, 107.42],
      [-6.42, 107.52],
    ],
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

function AirspaceMap({
  aircraft = defaultAircraftData,
}) {
  const mapContainerRef = useRef(null);

  const mapRef = useRef(null);

  const aircraftMarkersRef = useRef([]);

  const ubpMarkerRef = useRef(null);

  const hasAircraftData = aircraft.length > 0;

  /* =========================================
     INITIALIZE MAP
  ========================================= */

  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    if (mapRef.current) {
      return;
    }

    const map = new Map({
      container: mapContainerRef.current,

      /*
       * OpenFreeMap Fiord
       *
       * Dark blue / navy style.
       * Tidak membutuhkan API key.
       */
      style: "https://tiles.openfreemap.org/styles/fiord",

      /*
       * Center Karawang / UBP
       */
      center: [107.30, -6.32],

      /*
       * Initial zoom
       */
      zoom: 10.8,

      minZoom: 5,

      maxZoom: 18,

      attributionControl: true,
    });

    mapRef.current = map;

    /* =========================================
       NAVIGATION CONTROL
    ========================================= */

    map.addControl(
      new NavigationControl({
        showCompass: false,
        showZoom: false,
      }),
      "top-right"
    );

    /* =========================================
       MAP LOADED
    ========================================= */

    map.on("load", () => {
      /* =======================================
         FLIGHT PATH GEOJSON
      ======================================= */

      const flightPathFeatures = flightPaths.map(
        (path) => ({
          type: "Feature",

          properties: {
            color: path.color,
          },

          geometry: {
            type: "LineString",

            coordinates: path.positions.map(
              ([lat, lng]) => [
                lng,
                lat,
              ]
            ),
          },
        })
      );

      map.addSource("flight-paths", {
        type: "geojson",

        data: {
          type: "FeatureCollection",

          features: flightPathFeatures,
        },
      });

      /* =======================================
         FLIGHT PATH LINE
      ======================================= */

      map.addLayer({
        id: "flight-path-lines",

        type: "line",

        source: "flight-paths",

        layout: {
          "line-cap": "round",
          "line-join": "round",
        },

        paint: {
          "line-color": [
            "get",
            "color",
          ],

          "line-width": 2,

          "line-opacity": 0.9,

          "line-dasharray": [
            4,
            4,
          ],
        },
      });

      /* =======================================
         UBP COVERAGE AREA
      ======================================= */

      map.addSource("ubp-coverage", {
        type: "geojson",

        data: {
          type: "Feature",

          geometry: {
            type: "Point",

            coordinates: [
              107.30,
              -6.32,
            ],
          },
        },
      });

      /* =======================================
         COVERAGE CIRCLE
      ======================================= */

      map.addLayer({
        id: "ubp-coverage-circle",

        type: "circle",

        source: "ubp-coverage",

        paint: {
          "circle-radius": 45,

          "circle-color": "#168cff",

          "circle-opacity": 0.04,

          "circle-stroke-color":
            "#168cff",

          "circle-stroke-width": 1,

          "circle-stroke-opacity":
            0.65,
        },
      });
    });

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      aircraftMarkersRef.current.forEach(
        (marker) => {
          marker.remove();
        }
      );

      aircraftMarkersRef.current = [];

      if (ubpMarkerRef.current) {
        ubpMarkerRef.current.remove();

        ubpMarkerRef.current = null;
      }

      map.remove();

      mapRef.current = null;
    };
  }, []);

  /* =========================================
     AIRCRAFT MARKERS
  ========================================= */

  useEffect(() => {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    const addAircraftMarkers = () => {
      /* ---------------------------------------
         Remove old markers
      --------------------------------------- */

      aircraftMarkersRef.current.forEach(
        (marker) => {
          marker.remove();
        }
      );

      aircraftMarkersRef.current = [];

      /* ---------------------------------------
         No aircraft
      --------------------------------------- */

      if (!hasAircraftData) {
        return;
      }

      /* ---------------------------------------
         Add aircraft
      --------------------------------------- */

      aircraft.forEach((item) => {
        const element =
          createAircraftElement(item);

        /* -------------------------------------
           Popup
        ------------------------------------- */

        const popup = new Popup({
          offset: 20,

          closeButton: true,

          closeOnClick: true,
        }).setHTML(`
          <div class="aircraft-popup">

            <strong>
              ${item.callsign}
            </strong>

            <span>
              ${item.status}
            </span>

            <p>
              Aircraft ID:
              ${item.aircraft_id}
            </p>

            <p>
              Altitude:
              ${item.altitude.toLocaleString()}
              ft
            </p>

            <p>
              Speed:
              ${item.speed}
              kt
            </p>

            <p>
              Heading:
              ${item.heading}°
            </p>

            <p>
              Vertical Rate:
              ${item.vertical_rate}
              ft/min
            </p>

          </div>
        `);

        /* -------------------------------------
           Marker
        ------------------------------------- */

        const marker = new Marker({
          element,

          anchor: "center",
        })
          .setLngLat([
            item.longitude,
            item.latitude,
          ])
          .setPopup(popup)
          .addTo(map);

        aircraftMarkersRef.current.push(
          marker
        );
      });
    };

    /* ---------------------------------------
       Wait for map
    --------------------------------------- */

    if (map.loaded()) {
      addAircraftMarkers();
    } else {
      map.once(
        "load",
        addAircraftMarkers
      );
    }

    /* ---------------------------------------
       Cleanup listener
    --------------------------------------- */

    return () => {
      map.off(
        "load",
        addAircraftMarkers
      );
    };
  }, [
    aircraft,
    hasAircraftData,
  ]);

  /* =========================================
     UBP MARKER
  ========================================= */

  useEffect(() => {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    const addUBPMarker = () => {
      /* ---------------------------------------
         Prevent duplicate marker
      --------------------------------------- */

      if (ubpMarkerRef.current) {
        ubpMarkerRef.current.remove();

        ubpMarkerRef.current = null;
      }

      /* ---------------------------------------
         Element
      --------------------------------------- */

      const element =
        createUBPElement();

      /* ---------------------------------------
         Popup
      --------------------------------------- */

      const popup = new Popup({
        offset: 25,
      }).setHTML(`
        <div class="aircraft-popup">

          <strong>
            UBP Karawang
          </strong>

          <span>
            AIRSPACE MONITORING CENTER
          </span>

          <p>
            Universitas Buana
            Perjuangan Karawang
          </p>

        </div>
      `);

      /* ---------------------------------------
         Marker
      --------------------------------------- */

      const marker = new Marker({
        element,

        anchor: "bottom",
      })
        .setLngLat([
          107.3021,
          -6.3208,
        ])
        .setPopup(popup)
        .addTo(map);

      ubpMarkerRef.current = marker;
    };

    if (map.loaded()) {
      addUBPMarker();
    } else {
      map.once(
        "load",
        addUBPMarker
      );
    }

    return () => {
      map.off(
        "load",
        addUBPMarker
      );
    };
  }, []);

  /* =========================================
     CUSTOM CONTROLS
  ========================================= */

  const handleZoomIn = () => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.zoomOut();
  };

  const handleReset = () => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.flyTo({
      center: [
        107.30,
        -6.32,
      ],

      zoom: 10.8,

      essential: true,
    });
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <div className="airspace-map">

      {/* =====================================
          MAP
      ===================================== */}

      <div
        ref={mapContainerRef}
        className="maplibre-container"
      />

      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {!hasAircraftData && (
        <div className="map-empty-state">

          <div className="map-empty-icon">
            ✈
          </div>

          <strong>
            Tidak ada data airspace
          </strong>

          <p>
            Menunggu data dari sistem...
          </p>

        </div>
      )}

      {/* =====================================
          ALTITUDE LEGEND
      ===================================== */}

      <div className="map-altitude-legend">

        <strong>
          KETINGGIAN
        </strong>

        <span>
          <i className="legend-purple"></i>

          &gt; 30.000 ft
        </span>

        <span>
          <i className="legend-blue"></i>

          20.000 - 30.000 ft
        </span>

        <span>
          <i className="legend-green"></i>

          10.000 - 20.000 ft
        </span>

        <span>
          <i className="legend-yellow"></i>

          &lt; 10.000 ft
        </span>

      </div>

      {/* =====================================
          MAP CONTROLS
      ===================================== */}

      <div className="map-controls">

        <button
          type="button"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          +
        </button>

        <button
          type="button"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          −
        </button>

        <button
          type="button"
          onClick={handleReset}
          aria-label="Reset map"
        >
          ◉
        </button>

      </div>

    </div>
  );
}

export default AirspaceMap;