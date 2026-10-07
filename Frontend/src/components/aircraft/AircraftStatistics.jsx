function AircraftStatistics({ aircraft }) {
  // =========================
  // STATISTICS
  // =========================

  const totalAircraft = aircraft.length;

  const activeAircraft = aircraft.filter(
    (item) => item.status === "active"
  ).length;

  const groundedAircraft = aircraft.filter(
    (item) => item.status === "grounded"
  ).length;

  return (
    <div className="aircraft-statistics">
      {/* =========================
          ACTIVE AIRCRAFT
      ========================= */}
      <div className="stat-card">
        <div className="stat-label">
          ACTIVE AIRCRAFT
        </div>

        <div className="stat-value">
          {activeAircraft}
        </div>

        <div className="stat-description">
          Pesawat sedang aktif
        </div>
      </div>

      {/* =========================
          GROUNDED AIRCRAFT
      ========================= */}
      <div className="stat-card">
        <div className="stat-label">
          GROUNDED AIRCRAFT
        </div>

        <div className="stat-value">
          {groundedAircraft}
        </div>

        <div className="stat-description">
          Pesawat berada di darat
        </div>
      </div>

      {/* =========================
          TOTAL AIRCRAFT
      ========================= */}
      <div className="stat-card">
        <div className="stat-label">
          TOTAL AIRCRAFT
        </div>

        <div className="stat-value">
          {totalAircraft}
        </div>

        <div className="stat-description">
          Seluruh pesawat terdeteksi
        </div>
      </div>
    </div>
  );
}

export default AircraftStatistics;