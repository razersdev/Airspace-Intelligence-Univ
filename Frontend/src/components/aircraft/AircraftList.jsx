import AircraftItem from "./AircraftItem";

function AircraftList({ aircraft = [] }) {
  if (aircraft.length === 0) {
    return (
      <div className="empty-state">
        <strong>Tidak ada data pesawat</strong>
        <p>Menunggu data dari sistem...</p>
      </div>
    );
  }

  return (
    <div className="aircraft-list">
      {aircraft.map((item) => (
        <AircraftItem
          key={item.aircraft_id}
          aircraft={item}
        />
      ))}
    </div>
  );
}

export default AircraftList;