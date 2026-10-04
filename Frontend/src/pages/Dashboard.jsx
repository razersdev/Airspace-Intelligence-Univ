import {
  aircraftData,
  flightData,
} from "../mocks/airspace";

import AirspaceMap from "../components/dashboard/AirspaceMap";


function Dashboard() {

  const totalAircraft = aircraftData.length;

  const activeAircraft = aircraftData.filter(
    (aircraft) => aircraft.status === "active"
  );

  const activeFlights = flightData.filter(
    (flight) => flight.status === "active"
  );


  const averageAltitude =
    activeAircraft.length > 0
      ? Math.round(
          activeAircraft.reduce(
            (total, aircraft) =>
              total + aircraft.altitude,
            0
          ) / activeAircraft.length
        )
      : 0;


  const averageSpeed =
    activeAircraft.length > 0
      ? Math.round(
          activeAircraft.reduce(
            (total, aircraft) =>
              total + aircraft.speed,
            0
          ) / activeAircraft.length
        )
      : 0;


  const highestAircraft =
    aircraftData.length > 0
      ? aircraftData.reduce(
          (highest, aircraft) =>
            aircraft.altitude > highest.altitude
              ? aircraft
              : highest,
          aircraftData[0]
        )
      : null;


  const highestSpeed =
    aircraftData.length > 0
      ? Math.max(
          ...aircraftData.map(
            (aircraft) => aircraft.speed
          )
        )
      : 0;


  return (
    <div className="airspace-dashboard">


      {/* =========================================
          HEADER
      ========================================== */}

      <section className="dashboard-heading">

        <div>

          <span className="dashboard-kicker">
            APA YANG TERJADI DI LANGIT KARAWANG?
          </span>

          <p>
            Ringkasan Aktivitas Lalu Lintas Udara Hari Ini
          </p>

        </div>


        <div className="analysis-filter">

          <div className="filter-title">
            PILIH PERIODE ANALISIS
          </div>


          <div className="filter-row">

            <label>
              Tanggal

              <strong>
                24/05/2025
              </strong>
            </label>

          </div>


          <div className="filter-row">

            <label>
              Rentang Waktu

              <strong>
                06:00 - 18:00
              </strong>
            </label>

          </div>


          <div className="filter-row">

            <label>
              Perbandingan

              <strong>
                Tidak Ada
              </strong>
            </label>

          </div>


          <button className="analysis-button">
            🔍 Tampilkan Analisis
          </button>

        </div>

      </section>



      {/* =========================================
          KPI
      ========================================== */}

      <section className="kpi-grid">


        <div className="kpi-card blue">

          <div className="kpi-icon">
            ✈
          </div>

          <div>

            <span>
              PESAWAT TERDETEKSI
            </span>

            <strong>
              {totalAircraft}
            </strong>

            <small>
              Total hari ini
            </small>

          </div>

        </div>



        <div className="kpi-card green">

          <div className="kpi-icon">
            ✈
          </div>

          <div>

            <span>
              PESAWAT AKTIF
            </span>

            <strong>
              {activeAircraft.length}
            </strong>

            <small>
              Sekarang di udara
            </small>

          </div>

        </div>



        <div className="kpi-card yellow">

          <div className="kpi-icon">
            ⚠
          </div>

          <div>

            <span>
              AKTIVITAS SAAT INI
            </span>

            <strong>
              TINGGI
            </strong>

            <small>
              Indeks Aktivitas: 78/100
            </small>

          </div>

        </div>



        <div className="kpi-card purple">

          <div className="kpi-icon">
            ↑
          </div>

          <div>

            <span>
              KETINGGIAN TERTINGGI
            </span>

            <strong>
              {highestAircraft
                ? highestAircraft.altitude.toLocaleString()
                : "0"}{" "}
              ft
            </strong>

            <small>
              10:42 WIB
            </small>

          </div>

        </div>



        <div className="kpi-card cyan">

          <div className="kpi-icon">
            ◌
          </div>

          <div>

            <span>
              KECEPATAN TERTINGGI
            </span>

            <strong>
              {highestSpeed} km/h
            </strong>

            <small>
              11:18 WIB
            </small>

          </div>

        </div>



        <div className="kpi-card blue">

          <div className="kpi-icon">
            ◔
          </div>

          <div>

            <span>
              WAKTU TERSIBUK
            </span>

            <strong>
              08:00 - 10:00
            </strong>

            <small>
              Jumlah pesawat tertinggi
            </small>

          </div>

        </div>

      </section>



      {/* =========================================
          MAIN MONITORING
      ========================================== */}

      <section className="main-dashboard-grid">


        {/* MAP */}

        <div className="panel map-panel">

          <div className="panel-title">

            <span>
              LIVE AIR TRAFFIC MAP
            </span>

            <div className="live-label">
              ● LIVE
            </div>

          </div>


          <AirspaceMap />

        </div>



        {/* DAILY SUMMARY */}

        <div className="panel daily-summary">

          <div className="panel-title">

            <span>
              RINGKASAN HARIAN
            </span>

          </div>


          <div className="summary-stat">

            <span className="summary-icon blue-text">
              ✈
            </span>

            <span>
              Total Pesawat Terdeteksi
            </span>

            <strong>
              {totalAircraft}
            </strong>

          </div>


          <div className="summary-stat">

            <span className="summary-icon yellow-text">
              ✈
            </span>

            <span>
              Pesawat Aktif (Sekarang)
            </span>

            <strong>
              {activeAircraft.length}
            </strong>

          </div>


          <div className="summary-stat">

            <span className="summary-icon green-text">
              ↕
            </span>

            <span>
              Rata-rata Ketinggian
            </span>

            <strong>
              {averageAltitude.toLocaleString()} ft
            </strong>

          </div>


          <div className="summary-stat">

            <span className="summary-icon blue-text">
              ◌
            </span>

            <span>
              Rata-rata Kecepatan
            </span>

            <strong>
              {averageSpeed} km/h
            </strong>

          </div>


          <div className="summary-stat">

            <span className="summary-icon red-text">
              ◷
            </span>

            <span>
              Total Durasi Pengamatan
            </span>

            <strong>
              12 jam
            </strong>

          </div>


          <div className="summary-stat">

            <span className="summary-icon gray-text">
              ◷
            </span>

            <span>
              Data Update Terakhir
            </span>

            <strong>
              12:35:21 WIB
            </strong>

          </div>

        </div>



        {/* HOURLY ACTIVITY */}

        <div className="panel hourly-panel">

          <div className="panel-title">

            <span>
              AKTIVITAS PESAWAT PER JAM
            </span>

          </div>


          <div className="chart-subtitle">
            Jumlah Pesawat
          </div>


          <div className="line-chart">

            <div className="chart-y">
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>


            <svg
              viewBox="0 0 600 220"
              preserveAspectRatio="none"
            >

              <defs>

                <linearGradient
                  id="areaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#168cff"
                    stopOpacity="0.35"
                  />

                  <stop
                    offset="100%"
                    stopColor="#168cff"
                    stopOpacity="0"
                  />

                </linearGradient>

              </defs>


              <path
                d="
                  M0 185
                  L30 165
                  L60 145
                  L90 120
                  L120 80
                  L150 120
                  L180 92
                  L210 108
                  L240 80
                  L270 112
                  L300 138
                  L330 125
                  L360 145
                  L390 155
                  L420 140
                  L450 160
                  L480 145
                  L510 130
                  L540 150
                  L570 140
                  L600 150
                  L600 220
                  L0 220
                  Z
                "
                fill="url(#areaGradient)"
              />


              <polyline
                points="
                  0,185
                  30,165
                  60,145
                  90,120
                  120,80
                  150,120
                  180,92
                  210,108
                  240,80
                  270,112
                  300,138
                  330,125
                  360,145
                  390,155
                  420,140
                  450,160
                  480,145
                  510,130
                  540,150
                  570,140
                  600,150
                "
                fill="none"
                stroke="#168cff"
                strokeWidth="3"
              />

            </svg>


            <div className="chart-peak">

              ★ Peak: 08:00 - 10:00

              <strong>
                34 Pesawat
              </strong>

            </div>

          </div>


          <div className="chart-x">

            <span>06:00</span>
            <span>08:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>

          </div>

        </div>

      </section>



      {/* =========================================
          LOWER GRID
      ========================================== */}

      <section className="lower-grid">


        {/* PESAWAT */}

        <div className="panel aircraft-nearby">

          <div className="panel-title">

            <span>
              5 PESAWAT AKTIF TERDEKAT
            </span>

          </div>


          <div className="mini-table">

            <div className="mini-head">

              <span>CALLSIGN</span>
              <span>KETINGGIAN</span>
              <span>KECEPATAN</span>
              <span>ARAH</span>
              <span>JARAK</span>
              <span>UPDATE</span>

            </div>


            {activeAircraft
              .slice(0, 5)
              .map((aircraft) => (

                <div
                  className="mini-row"
                  key={aircraft.aircraft_id}
                >

                  <strong>
                    ✈ {aircraft.callsign}
                  </strong>

                  <span>
                    {aircraft.altitude.toLocaleString()} ft
                  </span>

                  <span>
                    {aircraft.speed} km/h
                  </span>

                  <span>
                    {aircraft.heading}° SE
                  </span>

                  <span>
                    42 km
                  </span>

                  <span>
                    12:35:20
                  </span>

                </div>

              ))}

          </div>

        </div>



        {/* HEATMAP */}

        <div className="panel heatmap-panel">

          <div className="panel-title">

            <span>
              HEATMAP LALU LINTAS UDARA
            </span>

          </div>


          <div className="heatmap">

            <div className="heat-point hp1"></div>
            <div className="heat-point hp2"></div>
            <div className="heat-point hp3"></div>
            <div className="heat-point hp4"></div>
            <div className="heat-point hp5"></div>


            <div className="ubp-map-label">
              📍 UBP KARAWANG
            </div>


            <div className="heat-legend">

              <span className="high">
                Tinggi
              </span>

              <span>
                Sedang
              </span>

              <span className="low">
                Rendah
              </span>

            </div>

          </div>

        </div>



        {/* DISTRIBUSI */}

        <div className="panel distribution-panel">

          <div className="panel-title">

            <span>
              DISTRIBUSI KETINGGIAN
            </span>

          </div>


          <div className="donut-area">

            <div className="donut">

              <div>

                <strong>
                  {totalAircraft}
                </strong>

                <span>
                  Pesawat
                </span>

              </div>

            </div>


            <div className="donut-legend">

              <span>
                🟡 0 - 10.000 ft
              </span>

              <span>
                🟢 10.000 - 20.000 ft
              </span>

              <span>
                🔵 20.000 - 30.000 ft
              </span>

              <span>
                🟣 30.000 - 40.000 ft
              </span>

              <span>
                🟪 &gt; 40.000 ft
              </span>

            </div>

          </div>

        </div>



        {/* RADAR */}

        <div className="panel direction-panel">

          <div className="panel-title">

            <span>
              ARAH KEDATANGAN PESAWAT
            </span>

          </div>


          <div className="radar-chart">

            <div className="radar-ring ring-1"></div>

            <div className="radar-ring ring-2"></div>

            <div className="radar-ring ring-3"></div>

            <div className="radar-cross horizontal"></div>

            <div className="radar-cross vertical"></div>

            <div className="radar-blobs"></div>


            <span className="north">
              N
            </span>

            <span className="south">
              S
            </span>

            <span className="east">
              E
            </span>

            <span className="west">
              W
            </span>

          </div>

        </div>



        {/* TREND */}

        <div className="panel trend-panel">

          <div className="panel-title">

            <span>
              TREND AKTIVITAS (7 HARI TERAKHIR)
            </span>

          </div>


          <div className="trend-chart">

            {[55, 70, 60, 85, 72, 92, 65].map(
              (height, index) => (

                <div
                  key={index}
                  className="trend-bar"
                  style={{
                    height: `${height}%`,
                  }}
                >
                  <i></i>
                </div>

              )
            )}

          </div>


          <div className="trend-labels">

            <span>18/05</span>
            <span>19/05</span>
            <span>20/05</span>
            <span>21/05</span>
            <span>22/05</span>
            <span>23/05</span>
            <span>24/05</span>

          </div>

        </div>



        {/* INDEX */}

        <div className="panel index-panel">

          <div className="panel-title">

            <span>
              INDEKS AKTIVITAS
            </span>

          </div>


          <div className="gauge">

            <div className="gauge-value">
              78
            </div>

            <small>
              /100
            </small>

          </div>


          <strong className="index-high">
            Tinggi ↑
          </strong>


          <span>
            Dibandingkan rata-rata 7 hari: +18%
          </span>

        </div>

      </section>



      {/* =========================================
          REPORT
      ========================================== */}

      <section className="panel report-panel">

        <div className="report-title">
          LAPORAN RINGKAS AIRSPACE
        </div>


        <div className="report-grid">


          <div>

            <h4>
              INTISARI HARI INI
            </h4>

            <p>
              Aktivitas lalu lintas udara di wilayah
              Karawang tergolong tinggi dengan puncak
              aktivitas terjadi pada pukul 08:00 - 10:00 WIB.
              Sebagian besar pesawat terdeteksi berada pada
              ketinggian 20.000 - 30.000 ft.
            </p>

          </div>


          <div>

            <h4>
              INSIGHT UTAMA
            </h4>

            <ul>

              <li>
                Peningkatan aktivitas 18% dibanding
                rata-rata 7 hari
              </li>

              <li>
                Arah timur (E) paling dominan
              </li>

              <li>
                Ketinggian tertinggi tercatat 38.700 ft
              </li>

              <li>
                Pola aktivitas normal tanpa anomali
                signifikan
              </li>

            </ul>

          </div>


          <div>

            <h4>
              REKOMENDASI
            </h4>

            <ul>

              <li>
                Lanjutkan monitoring untuk pengumpulan
                data jangka panjang
              </li>

              <li>
                Perluas cakupan dengan penambahan
                receiver di lokasi lain
              </li>

              <li>
                Analisis lebih lanjut untuk pola mingguan
                dan bulanan
              </li>

            </ul>

          </div>


          <div>

            <h4>
              POTENSI PENELITIAN
            </h4>

            <ul>

              <li>
                Analisis korelasi antara waktu dan
                kepadatan lalu lintas
              </li>

              <li>
                Studi pola ketinggian berdasarkan
                jenis rute penerbangan
              </li>

              <li>
                Deteksi anomali menggunakan
                machine learning
              </li>

            </ul>

          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="dashboard-footer">

        <span>
          UBP Airspace Intelligence System
        </span>

        <span>•</span>

        <span>
          Dibangun oleh Mahasiswa UBP Karawang
        </span>

        <span>•</span>

        <span>
          Data real-time dari RTL-SDR ADS-B Receiver
        </span>

        <strong>
          ● SISTEM BERJALAN NORMAL
        </strong>

      </footer>

    </div>
  );
}

export default Dashboard;