import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { aircraftData } from "../../mocks/airspace";


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


function createAircraftIcon(aircraft) {

  const color = getAircraftColor(
    aircraft.altitude
  );


  return L.divIcon({

    className: "aircraft-map-icon",

    html: `
      <div
        class="plane-marker"
        style="
          color:${color};
          transform:rotate(${aircraft.heading}deg);
        "
      >
        ✈
      </div>
    `,

    iconSize: [30, 30],

    iconAnchor: [15, 15],

  });
}


const ubpIcon = L.divIcon({

  className: "ubp-map-marker",

  html: `
    <div class="ubp-pin">
      <span>●</span>
    </div>
  `,

  iconSize: [32, 32],

  iconAnchor: [16, 32],

});


const flightPaths = [

  {
    color: "#f5b51b",

    positions: [
      [-6.15, 107.05],
      [-6.25, 107.18],
      [-6.32, 107.30],
      [-6.24, 107.48],
    ],
  },

  {
    color: "#22c55e",

    positions: [
      [-6.42, 107.12],
      [-6.35, 107.25],
      [-6.32, 107.30],
      [-6.22, 107.48],
    ],
  },

  {
    color: "#168cff",

    positions: [
      [-6.10, 107.22],
      [-6.22, 107.32],
      [-6.30, 107.42],
      [-6.42, 107.52],
    ],
  },

];


function AirspaceMap() {

  return (

    <div className="airspace-map">


      <MapContainer

        center={[
          -6.32,
          107.30,
        ]}

        zoom={12}

        scrollWheelZoom={true}

        zoomControl={false}

        style={{
          width: "100%",
          height: "100%",
        }}

      >


        <TileLayer

          attribution="&copy; OpenStreetMap"

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />


        {/* JALUR PENERBANGAN */}

        {flightPaths.map(
          (path, index) => (

            <Polyline

              key={index}

              positions={path.positions}

              pathOptions={{
                color: path.color,
                weight: 1.5,
                opacity: 0.7,
                dashArray: "6 7",
              }}

            />

          )
        )}


        {/* PESAWAT */}

        {aircraftData.map(
          (aircraft) => (

            <Marker

              key={aircraft.aircraft_id}

              position={[
                aircraft.latitude,
                aircraft.longitude,
              ]}

              icon={createAircraftIcon(
                aircraft
              )}

            >

              <Popup>

                <div className="aircraft-popup">

                  <strong>
                    ✈ {aircraft.callsign}
                  </strong>

                  <span>
                    {aircraft.status === "active"
                      ? "Pesawat Aktif"
                      : "Di Darat"}
                  </span>

                  <p>
                    Pesawat:{" "}
                    {aircraft.aircraft_id}
                  </p>

                  <p>
                    Ketinggian:{" "}
                    {aircraft.altitude.toLocaleString()} ft
                  </p>

                  <p>
                    Kecepatan:{" "}
                    {aircraft.speed} km/h
                  </p>

                  <p>
                    Arah:{" "}
                    {aircraft.heading}°
                  </p>

                </div>

              </Popup>

            </Marker>

          )
        )}


        {/* UBP */}

        <Marker

          position={[
            -6.3208,
            107.3021,
          ]}

          icon={ubpIcon}

        >

          <Popup>

            <strong>
              UBP KARAWANG
            </strong>

            <p>
              Airspace Intelligence Center
            </p>

          </Popup>

        </Marker>


        {/* AREA UBP */}

        <CircleMarker

          center={[
            -6.32,
            107.30,
          ]}

          radius={45}

          pathOptions={{
            color: "#168cff",
            weight: 1,
            opacity: 0.35,
            fillColor: "#168cff",
            fillOpacity: 0.04,
          }}

        />

      </MapContainer>


      {/* LEGEND */}

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


      {/* CONTROL MAP */}

      <div className="map-controls">

        <button>+</button>

        <button>−</button>

        <button>◉</button>

      </div>

    </div>
  );
}

export default AirspaceMap;