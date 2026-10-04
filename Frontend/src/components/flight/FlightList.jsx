function FlightList({ flights }) {
  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <div className="flight-item" key={flight.flight_id}>
          <div>
            <strong>{flight.callsign}</strong>

            <p>
              {flight.origin} → {flight.destination}
            </p>
          </div>

          <div>
            <span className={`status-badge status-${flight.status}`}>
              {flight.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightList;