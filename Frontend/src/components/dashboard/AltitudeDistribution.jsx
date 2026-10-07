import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function AltitudeDistribution({ aircraft }) {
  const altitudeData = [
    {
      name: "0 - 10.000 ft",
      value: aircraft.filter(
        (item) =>
          item.altitude >= 0 &&
          item.altitude < 10000
      ).length,
    },
    {
      name: "10.000 - 20.000 ft",
      value: aircraft.filter(
        (item) =>
          item.altitude >= 10000 &&
          item.altitude < 20000
      ).length,
    },
    {
      name: "20.000 - 30.000 ft",
      value: aircraft.filter(
        (item) =>
          item.altitude >= 20000 &&
          item.altitude < 30000
      ).length,
    },
    {
      name: "30.000 - 40.000 ft",
      value: aircraft.filter(
        (item) =>
          item.altitude >= 30000 &&
          item.altitude < 40000
      ).length,
    },
    {
      name: "> 40.000 ft",
      value: aircraft.filter(
        (item) => item.altitude >= 40000
      ).length,
    },
  ];

  const colors = [
    "#facc15",
    "#22c55e",
    "#168cff",
    "#a855f7",
    "#c084fc",
  ];

  const totalAircraft = aircraft.length;

  return (
    <div
      className="panel distribution-panel"
      style={{
        overflow: "hidden",
      }}
    >

      {/* TITLE */}

      <div className="panel-title">
        <span>
          DISTRIBUSI KETINGGIAN
        </span>
      </div>


      {/* CONTENT */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",

          height: "125px",

          padding: "6px 10px 6px 25px",

          boxSizing: "border-box",

          overflow: "hidden",
        }}
      >

        {/* DONUT */}

        <div
          style={{
            width: "105px",
            height: "105px",
            position: "relative",
            flexShrink: 0,
          }}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={altitudeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={32}
                outerRadius={49}
                paddingAngle={2}
                stroke="none"
              >

                {altitudeData.map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index]}
                    />
                  )
                )}

              </Pie>


              <Tooltip
                contentStyle={{
                  backgroundColor: "#071a2d",
                  border:
                    "1px solid rgba(22, 140, 255, 0.35)",
                  borderRadius: "6px",
                  color: "#ffffff",
                  fontSize: "10px",
                }}
                formatter={(value) => [
                  `${value} Pesawat`,
                  "Jumlah",
                ]}
              />

            </PieChart>

          </ResponsiveContainer>


          {/* CENTER TEXT */}

          <div
            style={{
              position: "absolute",
              inset: 0,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              pointerEvents: "none",
            }}
          >

            <strong
              style={{
                fontSize: "21px",
                lineHeight: "1",
                color: "#ffffff",
              }}
            >
              {totalAircraft}
            </strong>


            <span
              style={{
                fontSize: "7px",
                color: "#8ea3bd",
                marginTop: "3px",
              }}
            >
              Pesawat
            </span>

          </div>

        </div>


        {/* LEGEND */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",

            gap: "5px",

            width: "108px",

            flexShrink: 0,
          }}
        >

          {altitudeData.map(
            (item, index) => (

              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",

                  gap: "4px",

                  fontSize: "8px",

                  color: "#8ea3bd",

                  lineHeight: "1",
                }}
              >

                {/* COLOR DOT */}

                <span
                  style={{
                    width: "6px",
                    height: "6px",

                    borderRadius: "50%",

                    backgroundColor:
                      colors[index],

                    flexShrink: 0,
                  }}
                />


                {/* LABEL */}

                <span>
                  {item.name}
                </span>


                {/* VALUE */}

                <strong
                  style={{
                    marginLeft: "auto",
                    color: "#ffffff",
                  }}
                >
                  {item.value}
                </strong>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default AltitudeDistribution;