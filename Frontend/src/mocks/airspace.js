
 // =========================
 // MOCK AIRCRAFT DATA
 // =========================

export const aircraftData = [
  {
    aircraft_id: "AC001",
    callsign: "GA123",
    latitude: -6.9147,
    longitude: 107.6098,
    altitude: 32000,
    speed: 450,
    heading: 90,
    vertical_rate: 0,
    timestamp: "2026-10-03T08:00:00Z",
    status: "active",
  },

  {
    aircraft_id: "AC002",
    callsign: "ID456",
    latitude: -6.2088,
    longitude: 106.8456,
    altitude: 28000,
    speed: 420,
    heading: 180,
    vertical_rate: -200,
    timestamp: "2026-10-03T08:01:00Z",
    status: "active",
  },

  {
    aircraft_id: "AC003",
    callsign: "SJ789",
    latitude: -7.2575,
    longitude: 112.7521,
    altitude: 35000,
    speed: 470,
    heading: 270,
    vertical_rate: 100,
    timestamp: "2026-10-03T08:02:00Z",
    status: "active",
  },

  {
    aircraft_id: "AC004",
    callsign: "QZ321",
    latitude: -8.4095,
    longitude: 115.1889,
    altitude: 0,
    speed: 0,
    heading: 0,
    vertical_rate: 0,
    timestamp: "2026-10-03T08:03:00Z",
    status: "grounded",
  },
];

// =========================
// MOCK FLIGHT DATA
// =========================

export const flightData = [
  {
    flight_id: "FL001",
    callsign: "GA123",
    aircraft_id: "AC001",
    origin: "CGK",
    destination: "DPS",
    status: "active",
    departure_time: "2026-10-03T07:00:00Z",
    estimated_arrival: "2026-10-03T09:50:00Z",
  },

  {
    flight_id: "FL002",
    callsign: "ID456",
    aircraft_id: "AC002",
    origin: "CGK",
    destination: "SUB",
    status: "active",
    departure_time: "2026-10-03T07:30:00Z",
    estimated_arrival: "2026-10-03T09:00:00Z",
  },

  {
    flight_id: "FL003",
    callsign: "SJ789",
    aircraft_id: "AC003",
    origin: "SUB",
    destination: "CGK",
    status: "active",
    departure_time: "2026-10-03T06:45:00Z",
    estimated_arrival: "2026-10-03T09:15:00Z",
  },

  {
    flight_id: "FL004",
    callsign: "QZ321",
    aircraft_id: "AC004",
    origin: "DPS",
    destination: "CGK",
    status: "grounded",
    departure_time: "2026-10-03T08:30:00Z",
    estimated_arrival: "2026-10-03T10:00:00Z",
  },
];

// =========================
// MOCK ACTIVITY DATA
// =========================

export const activityData = [
  { time: "06:00", aircraft: 8 },
  { time: "06:30", aircraft: 12 },
  { time: "07:00", aircraft: 16 },
  { time: "07:30", aircraft: 21 },
  { time: "08:00", aircraft: 34 },
  { time: "08:30", aircraft: 27 },
  { time: "09:00", aircraft: 31 },
  { time: "09:30", aircraft: 28 },
  { time: "10:00", aircraft: 30 },
  { time: "10:30", aircraft: 24 },
  { time: "11:00", aircraft: 18 },
  { time: "11:30", aircraft: 15 },
  { time: "12:00", aircraft: 17 },
  { time: "12:30", aircraft: 13 },
  { time: "13:00", aircraft: 10 },
  { time: "13:30", aircraft: 8 },
  { time: "14:00", aircraft: 9 },
  { time: "14:30", aircraft: 12 },
  { time: "15:00", aircraft: 11 },
  { time: "15:30", aircraft: 15 },
  { time: "16:00", aircraft: 12 },
  { time: "16:30", aircraft: 10 },
  { time: "17:00", aircraft: 9 },
  { time: "17:30", aircraft: 8 },
  { time: "18:00", aircraft: 6 },
];

// =========================
// MOCK WEEKLY ACTIVITY DATA
// =========================

export const weeklyActivityData = [
  { day: "18/05", aircraft: 55 },
  { day: "19/05", aircraft: 70 },
  { day: "20/05", aircraft: 60 },
  { day: "21/05", aircraft: 85 },
  { day: "22/05", aircraft: 72 },
  { day: "23/05", aircraft: 92 },
  { day: "24/05", aircraft: 65 },
];
