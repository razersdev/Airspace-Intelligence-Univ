import FlightItem from "./FlightItem";

function FlightList({ flights = [] }) {
  // Jika belum ada data penerbangan
  if (flights.length === 0) {
    return (
      <div className="empty-state">
        <strong>Tidak ada data penerbangan</strong>
        <p>Menunggu data dari sistem...</p>
      </div>
    );
  }

  // Jika data penerbangan tersedia
  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <FlightItem
          key={flight.flight_id}
          flight={flight}
        />
      ))}
    </div>
  );
}

export default FlightList;