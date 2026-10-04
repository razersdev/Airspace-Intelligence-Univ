function AircraftList({ aircraft }) {
  return (
    <div className="aircraft-list">
      {aircraft.map((item) => (
        <div className="aircraft-item" key={item.aircraft_id}>
          <div>
            <strong>{item.callsign}</strong>
            <p>{item.aircraft_id}</p>
          </div>

          <div>
            <span className={`status-badge status-${item.status}`}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AircraftList;