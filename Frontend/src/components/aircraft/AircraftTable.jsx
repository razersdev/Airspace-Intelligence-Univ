
import { useState } from "react";

function AircraftTable({ aircraft }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter pesawat berdasarkan callsign
  const filteredAircraft = aircraft.filter((item) =>
    item.callsign
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  // Ambil maksimal 5 pesawat setelah filtering
  const nearbyAircraft = filteredAircraft.slice(0, 5);

  // Ubah heading menjadi arah mata angin sederhana
  const getDirection = (heading) => {
    if (heading >= 337.5 || heading < 22.5) {
      return "N";
    }

    if (heading < 67.5) {
      return "NE";
    }

    if (heading < 112.5) {
      return "E";
    }

    if (heading < 157.5) {
      return "SE";
    }

    if (heading < 202.5) {
      return "S";
    }

    if (heading < 247.5) {
      return "SW";
    }

    if (heading < 292.5) {
      return "W";
    }

    return "NW";
  };

  // Format waktu dari timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);

    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="panel aircraft-nearby">
      {/* =========================
          TITLE
      ========================= */}
      <div className="panel-title">
        <span>5 PESAWAT AKTIF TERDEKAT</span>
      </div>

      {/* =========================
          SEARCH
      ========================= */}
      <div style={{ padding: "10px 0" }}>
        <input
          type="text"
          placeholder="Cari callsign pesawat..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          aria-label="Cari callsign pesawat"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "8px 10px",
            backgroundColor: "#071a2d",
            color: "#ffffff",
            border: "1px solid rgba(22, 140, 255, 0.35)",
            borderRadius: "6px",
            outline: "none",
            fontSize: "12px",
          }}
        />
      </div>

      {/* =========================
          TABLE
      ========================= */}
      <div className="mini-table">
        {/* HEADER */}
        <div className="mini-head">
          <span>CALLSIGN</span>
          <span>KETINGGIAN</span>
          <span>KECEPATAN</span>
          <span>ARAH</span>
          <span>JARAK</span>
          <span>UPDATE</span>
        </div>

        {/* DATA */}
        {nearbyAircraft.map((aircraft) => (
          <div
            className="mini-row"
            key={aircraft.aircraft_id}
          >
            {/* CALLSIGN */}
            <strong>
              ✈ {aircraft.callsign}
            </strong>

            {/* ALTITUDE */}
            <span>
              {aircraft.altitude.toLocaleString("id-ID")} ft
            </span>

            {/* SPEED */}
            <span>
              {aircraft.speed.toLocaleString("id-ID")} km/h
            </span>

            {/* HEADING */}
            <span>
              {aircraft.heading}°{" "}
              {getDirection(aircraft.heading)}
            </span>

            {/* DISTANCE */}
            <span>—</span>

            {/* UPDATE */}
            <span>
              {formatTime(aircraft.timestamp)}
            </span>
          </div>
        ))}

        {/* EMPTY STATE */}
        {nearbyAircraft.length === 0 && (
          <div
            style={{
              padding: "16px 8px",
              textAlign: "center",
              color: "#8ea3bd",
              fontSize: "12px",
            }}
          >
            Pesawat dengan callsign tersebut tidak ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}

export default AircraftTable;
