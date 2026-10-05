function AircraftItem({ aircraft }) {
  return (
    <div className="aircraft-item">
      <div>
        <strong>{aircraft.callsign}</strong>
        <p>{aircraft.aircraft_id}</p>
      </div>

      <div>
        <span
          className={`status-badge status-${aircraft.status}`}
        >
          {aircraft.status}
        </span>
      </div>
    </div>
  );
}

export default AircraftItem;