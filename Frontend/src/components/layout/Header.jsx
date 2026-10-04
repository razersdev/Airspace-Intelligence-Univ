function Header() {
  return (
    <header className="top-header">

      <div className="header-title">

        <h1>
          UBP AIRSPACE INTELLIGENCE
        </h1>

        <p>
          Platform Analisis Aktivitas Lalu Lintas Udara
        </p>

      </div>


      <div className="header-system">

        <div className="header-status">
          <span className="status-dot"></span>
          SISTEM AKTIF
        </div>

        <div>
          Receiver:
          <strong>1</strong>
        </div>

        <div>
          Online:
          <strong>1</strong>
        </div>

        <div>
          Data Link:
          <strong className="ok-text">OK</strong>
        </div>

      </div>


      <div className="header-time">

        <strong>
          12:35:21 WIB
        </strong>

        <span>
          Sabtu, 24 Mei 2025
        </span>

      </div>


      <div className="weather-card">

        <span className="weather-icon">
          ☀
        </span>

        <div>
          <strong>32°C</strong>
          <span>Cerah</span>
        </div>

      </div>

    </header>
  );
}

export default Header;