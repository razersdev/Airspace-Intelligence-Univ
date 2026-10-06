function AircraftTable({ aircraft }) {
  const nearbyAircraft = aircraft.slice(0, 5);

  return (
    <div className="panel aircraft-nearby">
      <div className="panel-title">
        <span>5 PESAWAT AKTIF TERDEKAT</span>
      </div>

      <div className="mini-table">
        <div className="mini-head">
          <span>CALLSIGN</span>
          <span>KETINGGIAN</span>
          <span>KECEPATAN</span>
          <span>ARAH</span>
          <span>JARAK</span>
          <span>UPDATE</span>
        </div>

        {nearbyAircraft.map((aircraft) => (
          <div
            className="mini-row"
            key={aircraft.aircraft_id}
          >
            <strong>
              ✈ {aircraft.callsign}
            </strong>

            <span>
              {aircraft.altitude.toLocaleString()} ft
            </span>

            <span>
              {aircraft.speed} km/h
            </span>

            <span>
              {aircraft.heading}° SE
            </span>

            <span>
              42 km
            </span>

            <span>
              12:35:20
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AircraftTable;