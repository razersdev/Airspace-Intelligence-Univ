function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <div className="ubp-logo">
          <span>UBP</span>
          <small>KARAWANG</small>
        </div>
      </div>


      <nav className="sidebar-nav">

        <a href="#" className="sidebar-link active">
          <span className="nav-icon">⌂</span>
          <span>Beranda</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">◉</span>
          <span>Live Map</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">✈</span>
          <span>Pesawat Aktif</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">▥</span>
          <span>Statistik</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">◈</span>
          <span>Heatmap</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">◉</span>
          <span>Analisis</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">▤</span>
          <span>Laporan Harian</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">▷</span>
          <span>Playback</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">⚙</span>
          <span>Pengaturan</span>
        </a>

        <a href="#" className="sidebar-link">
          <span className="nav-icon">ⓘ</span>
          <span>Tentang Sistem</span>
        </a>

      </nav>


      <div className="sidebar-status">

        <div className="sidebar-section-title">
          STATUS SISTEM
        </div>

        <div className="system-check">
          <span>RTL-SDR Receiver</span>
          <strong>OK</strong>
        </div>

        <div className="system-check">
          <span>ADS-B Decoder</span>
          <strong>OK</strong>
        </div>

        <div className="system-check">
          <span>Data Server</span>
          <strong>OK</strong>
        </div>

        <div className="system-check">
          <span>Database</span>
          <strong>OK</strong>
        </div>

        <div className="system-check">
          <span>API Service</span>
          <strong>OK</strong>
        </div>

      </div>


      <div className="sidebar-footer">

        <strong>UBP KARAWANG</strong>

        <span>
          Airspace Intelligence Center
        </span>

        <small>
          v2.0.0
        </small>

      </div>

    </aside>
  );
}

export default Sidebar;