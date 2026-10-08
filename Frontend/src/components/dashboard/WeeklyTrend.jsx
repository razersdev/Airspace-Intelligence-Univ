import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { weeklyActivityData } from "../../mocks/airspace";

function WeeklyTrend() {
  return (
    <div className="panel trend-panel">

      <div className="panel-title">
        <span>
          TREND AKTIVITAS (7 HARI TERAKHIR)
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: "110px",
        }}
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={weeklyActivityData}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 0,
            }}
          >

            <XAxis
              dataKey="day"
              tick={{
                fill: "#8ea3bd",
                fontSize: 9,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              hide
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#071a2d",
                border:
                  "1px solid rgba(22, 140, 255, 0.35)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "11px",
              }}
              formatter={(value) => [
                `${value} Pesawat`,
                "Aktivitas",
              ]}
            />

            <Area
              type="monotone"
              dataKey="aircraft"
              stroke="#168cff"
              strokeWidth={2}
              fill="rgba(22, 140, 255, 0.15)"
              dot={{
                r: 3,
                fill: "#168cff",
              }}
              activeDot={{
                r: 5,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyTrend;