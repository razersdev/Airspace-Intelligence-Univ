function DirectionDistribution({ aircraft = [] }) {

  const directions = {
    N: 0,
    NE: 0,
    E: 0,
    SE: 0,
    S: 0,
    SW: 0,
    W: 0,
    NW: 0,
  };


  aircraft.forEach((aircraftItem) => {

    const heading = Number(
      aircraftItem.heading
    );


    let direction = "N";


    if (
      heading >= 337.5 ||
      heading < 22.5
    ) {

      direction = "N";

    } else if (
      heading >= 22.5 &&
      heading < 67.5
    ) {

      direction = "NE";

    } else if (
      heading >= 67.5 &&
      heading < 112.5
    ) {

      direction = "E";

    } else if (
      heading >= 112.5 &&
      heading < 157.5
    ) {

      direction = "SE";

    } else if (
      heading >= 157.5 &&
      heading < 202.5
    ) {

      direction = "S";

    } else if (
      heading >= 202.5 &&
      heading < 247.5
    ) {

      direction = "SW";

    } else if (
      heading >= 247.5 &&
      heading < 292.5
    ) {

      direction = "W";

    } else {

      direction = "NW";

    }


    directions[direction]++;
  });


  const total = aircraft.length;


  return (

    <div className="panel direction-panel">


      {/* TITLE */}

      <div className="panel-title">

        <span>
          ARAH KEDATANGAN PESAWAT
        </span>

      </div>



      {/* RADAR */}

      <div className="radar-chart">


        <div className="radar-ring ring-1"></div>

        <div className="radar-ring ring-2"></div>

        <div className="radar-ring ring-3"></div>


        <div className="radar-cross horizontal"></div>

        <div className="radar-cross vertical"></div>


        <div className="radar-blobs"></div>



        {/* CENTER */}

        <div
          style={{
            position: "absolute",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#071a2a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
        >

          <strong
            style={{
              color: "#ffffff",
              fontSize: "15px",
              lineHeight: "1",
            }}
          >
            {total}
          </strong>


          <span
            style={{
              color: "#8198ac",
              fontSize: "6px",
              marginTop: "3px",
            }}
          >
            Pesawat
          </span>

        </div>



        {/* N */}

        <span
          style={{
            position: "absolute",
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#9ab0c2",
            fontSize: "7px",
            zIndex: 6,
          }}
        >
          N
        </span>



        {/* NE */}

        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "#9ab0c2",
            fontSize: "6px",
            zIndex: 6,
          }}
        >
          NE
        </span>



        {/* E */}

        <span
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#9ab0c2",
            fontSize: "7px",
            zIndex: 6,
          }}
        >
          E
        </span>



        {/* SE */}

        <span
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            color: "#9ab0c2",
            fontSize: "6px",
            zIndex: 6,
          }}
        >
          SE
        </span>



        {/* S */}

        <span
          style={{
            position: "absolute",
            bottom: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#9ab0c2",
            fontSize: "7px",
            zIndex: 6,
          }}
        >
          S
        </span>



        {/* SW */}

        <span
          style={{
            position: "absolute",
            left: "20px",
            bottom: "20px",
            color: "#9ab0c2",
            fontSize: "6px",
            zIndex: 6,
          }}
        >
          SW
        </span>



        {/* W */}

        <span
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#9ab0c2",
            fontSize: "7px",
            zIndex: 6,
          }}
        >
          W
        </span>



        {/* NW */}

        <span
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            color: "#9ab0c2",
            fontSize: "6px",
            zIndex: 6,
          }}
        >
          NW
        </span>



        {/* LEGEND */}

        <div
          style={{
            position: "absolute",
            right: "7px",
            top: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            fontSize: "5px",
            zIndex: 10,
          }}
        >

          {Object.entries(directions).map(
            ([direction, count]) => {

              const percentage =
                total > 0
                  ? Math.round(
                      (count / total) * 100
                    )
                  : 0;


              return (

                <div
                  key={direction}
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "14px 20px",
                    gap: "3px",
                    alignItems: "center",
                  }}
                >

                  <span
                    style={{
                      color: "#91a8ba",
                    }}
                  >
                    {direction}
                  </span>


                  <strong
                    style={{
                      color: "#dcecff",
                      fontSize: "5px",
                      fontWeight: "600",
                    }}
                  >
                    {percentage}%
                  </strong>

                </div>

              );

            }
          )}

        </div>


      </div>

    </div>
  );
}


export default DirectionDistribution;