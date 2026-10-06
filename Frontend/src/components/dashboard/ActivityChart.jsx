import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { activityData } from "../../mocks/airspace";

function ActivityChart() {
  // Cari jumlah pesawat tertinggi secara otomatis
  const peak = activityData.reduce((highest, current) => {
    return current.aircraft > highest.aircraft ? current : highest;
  });

  return (
    <div className="panel hourly-panel">
      {/* =========================
          TITLE
      ========================= */}
      <div className="panel-title">
        <span>AKTIVITAS PESAWAT PER JAM</span>
      </div>

      {/* =========================
          CHART SUBTITLE
      ========================= */}
      <div className="chart-subtitle">
        Jumlah Pesawat
      </div>

      {/* =========================
          CHART
      ========================= */}
      <div
        className="line-chart"
        style={{
          width: "100%",
          height: "220px",
          position: "relative",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={activityData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255, 255, 255, 0.08)"
              vertical={false}
            />

            {/* X Axis */}
            <XAxis
              dataKey="time"
              tick={{
                fill: "#8ea3bd",
                fontSize: 10,
              }}
              axisLine={{
                stroke: "rgba(255, 255, 255, 0.08)",
              }}
              tickLine={false}
              interval={3}
            />

            {/* Y Axis */}
            <YAxis
              domain={[0, 40]}
              ticks={[0, 10, 20, 30, 40]}
              tick={{
                fill: "#8ea3bd",
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
              width={28}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#071a2d",
                border: "1px solid rgba(22, 140, 255, 0.35)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "12px",
              }}
              labelStyle={{
                color: "#8ea3bd",
                marginBottom: "4px",
              }}
              formatter={(value) => [
                `${value} Pesawat`,
                "Aktivitas",
              ]}
            />

            {/* Area + Line */}
            <Area
              type="monotone"
              dataKey="aircraft"
              stroke="#168cff"
              strokeWidth={3}
              fill="url(#activityGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#168cff",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />

            {/* Gradient */}
            <defs>
              <linearGradient
                id="activityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#168cff"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#168cff"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>

        {/* =========================
            PEAK INFO
        ========================= */}
        <div className="chart-peak">
          <span>
            ★ Peak: {peak.time}
          </span>

          <strong>
            {peak.aircraft} Pesawat
          </strong>
        </div>
      </div>

      {/* =========================
          X AXIS LABEL
      ========================= */}
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