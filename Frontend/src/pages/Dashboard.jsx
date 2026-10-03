import { aircraftData, flightData } from "../mocks/airspace";

function Dashboard() {
  // =========================
  // KPI DATA
  // =========================

  const totalAircraft = aircraftData.length;

  const activeFlights = flightData.filter(
    (flight) => flight.status === "active"
  ).length;

  const airspaceStatus = "Operational";

  const latestUpdate = aircraftData.reduce((latest, aircraft) => {
    return aircraft.timestamp > latest
      ? aircraft.timestamp
      : latest;
  }, aircraftData[0]?.timestamp || null);

  // =========================
  // UI
  // =========================

  return (
    <div className="dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h2>Airspace Overview</h2>
          <p>Monitor aircraft and flight activity</p>
        </div>
      </div>

      {/* KPI Cards */}
      <section className="kpi-grid">

        {/* Total Aircraft */}
        <div className="kpi-card">
          <span>Total Aircraft</span>
          <strong>{totalAircraft}</strong>
        </div>

        {/* Active Flights */}
        <div className="kpi-card">
          <span>Active Flights</span>
          <strong>{activeFlights}</strong>
        </div>

        {/* Airspace Status */}
        <div className="kpi-card">
          <span>Airspace Status</span>
          <strong>{airspaceStatus}</strong>
        </div>

        {/* Last Update */}
        <div className="kpi-card">
          <span>Last Update</span>
          <strong>
            {latestUpdate
              ? new Date(latestUpdate).toLocaleTimeString()
              : "--"}
          </strong>
        </div>

      </section>

      {/* Dashboard Main Grid */}
      <section className="dashboard-grid">

        {/* Airspace Map */}
        <div className="dashboard-card map-card">
          <h3>Airspace Map</h3>

          <div className="map-placeholder">
            Map will be displayed here
          </div>
        </div>

        {/* Flight Activity */}
        <div className="dashboard-card">
          <h3>Flight Activity</h3>

          <div className="chart-placeholder">
            Chart will be displayed here
          </div>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;