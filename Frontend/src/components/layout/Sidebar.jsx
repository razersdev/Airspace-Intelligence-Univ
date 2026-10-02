function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        AIRSPACE
      </div>

      <nav className="sidebar-nav">
        <a href="#">Dashboard</a>
        <a href="#">Aircraft</a>
        <a href="#">Flights</a>
      </nav>
    </aside>
  );
}

export default Sidebar;