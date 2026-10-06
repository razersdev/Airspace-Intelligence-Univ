function ActivityChart() {
  return (
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
  );
}


export default ActivityChart;