function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Airspace Overview</h2>
          <p>Monitor aircraft and flight activity</p>
        </div>
      </div>

      <section className="kpi-grid">
        <div className="kpi-card">
          <span>Total Aircraft</span>
          <strong>--</strong>
        </div>

        <div className="kpi-card">
          <span>Active Flights</span>
          <strong>--</strong>
        </div>

        <div className="kpi-card">
          <span>Airspace Status</span>
          <strong>--</strong>
        </div>

        <div className="kpi-card">
          <span>Last Update</span>
          <strong>--</strong>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-card map-card">
          <h3>Airspace Map</h3>
          <div className="map-placeholder">
            Map will be displayed here
          </div>
        </div>

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