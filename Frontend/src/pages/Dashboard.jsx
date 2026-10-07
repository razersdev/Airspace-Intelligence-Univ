import {
  aircraftData,
  flightData,
} from "../mocks/airspace";

import AirspaceMap from "../components/dashboard/AirspaceMap";
import ActivityChart from "../components/dashboard/ActivityChart";
import AltitudeDistribution from "../components/dashboard/AltitudeDistribution";
import DirectionDistribution from "../components/dashboard/DirectionDistribution";

import AircraftTable from "../components/aircraft/AircraftTable";


function Dashboard() {

  /* =========================================
     DATA
  ========================================== */

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
          DASHBOARD HEADING
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



        {/* FILTER ANALISIS */}

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


        {/* PESAWAT TERDETEKSI */}

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



        {/* PESAWAT AKTIF */}

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



        {/* AKTIVITAS */}

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



        {/* KETINGGIAN TERTINGGI */}

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
                : "0"
              }{" "}
              ft

            </strong>


            <small>
              10:42 WIB
            </small>

          </div>

        </div>



        {/* KECEPATAN TERTINGGI */}

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



        {/* WAKTU TERSIBUK */}

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
          MAIN DASHBOARD
      ========================================== */}

      <section className="main-dashboard-grid">


        {/* =========================================
            LIVE AIR TRAFFIC MAP
        ========================================== */}

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



        {/* =========================================
            RINGKASAN HARIAN
        ========================================== */}

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



        {/* =========================================
            AKTIVITAS PESAWAT PER JAM
        ========================================== */}

        <ActivityChart />


      </section>



      {/* =========================================
          LOWER GRID
      ========================================== */}

      <section className="lower-grid">


        {/* =========================================
            5 PESAWAT AKTIF TERDEKAT
        ========================================== */}

        <AircraftTable
          aircraft={activeAircraft}
        />



        {/* =========================================
            HEATMAP
        ========================================== */}

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



        {/* =========================================
            DISTRIBUSI KETINGGIAN
        ========================================== */}

        <AltitudeDistribution
          aircraft={aircraftData}
        />



        {/* =========================================
            ARAH KEDATANGAN PESAWAT
        ========================================== */}

        <DirectionDistribution
          aircraft={aircraftData}
        />



        {/* =========================================
            TREND 7 HARI
        ========================================== */}

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

            <span>
              18/05
            </span>

            <span>
              19/05
            </span>

            <span>
              20/05
            </span>

            <span>
              21/05
            </span>

            <span>
              22/05
            </span>

            <span>
              23/05
            </span>

            <span>
              24/05
            </span>

          </div>


        </div>



        {/* =========================================
            INDEKS AKTIVITAS
        ========================================== */}

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
          LAPORAN
      ========================================== */}

      <section className="panel report-panel">


        <div className="report-title">
          LAPORAN RINGKAS AIRSPACE
        </div>



        <div className="report-grid">


          {/* INTISARI */}

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



          {/* INSIGHT */}

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



          {/* REKOMENDASI */}

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



          {/* POTENSI PENELITIAN */}

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



      {/* =========================================
          FOOTER
      ========================================== */}

      <footer className="dashboard-footer">


        <span>
          UBP Airspace Intelligence System
        </span>


        <span>
          •
        </span>


        <span>
          Dibangun oleh Mahasiswa UBP Karawang
        </span>


        <span>
          •
        </span>


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