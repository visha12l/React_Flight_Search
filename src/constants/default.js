function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(duration) {
  const date = new Date();
  date.setDate(date.getDate() + Number(duration))
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('/');
}


export const Data = [
  {
    arrivalTime: "6:00",
    date: formatDate(0),
    departureTime: "5:00",
    destination: "Mumbai (BOM)",
    flightNo: "AI-101",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 3525
  },
  {
    arrivalTime: "9:50",
    date: formatDate(0),
    departureTime: "7:20",
    destination: "Delhi (DEL)",
    flightNo: "AI-102",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 5635
  },
  {
    arrivalTime: "7:10",
    date: formatDate(0),
    departureTime: "6:10",
    destination: "Mumbai (BOM)",
    flightNo: "AI-103",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 2537
  },
  {
    arrivalTime: "10:20",
    date: formatDate(0),
    departureTime: "8:10",
    destination: "Delhi (DEL)",
    flightNo: "AI-104",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 4681
  },
  {
    arrivalTime: "9:15",
    date: formatDate(0),
    departureTime: "8:15",
    destination: "Bengaluru (BLR)",
    flightNo: "SJ-105",
    name: "SpiceJet",
    origin: "Pune (PNQ)",
    price: 3549
  },
  {
    arrivalTime: "13:00",
    date: formatDate(0),
    departureTime: "11:00",
    destination: "Delhi (DEL)",
    flightNo: "SJ-106",
    name: "SpiceJet",
    origin: "Bengaluru (BLR)",
    price: 5645
  },
  {
    arrivalTime: "10:00",
    date: formatDate(0),
    departureTime: "8:00",
    destination: "Delhi (DEL)",
    flightNo: "SJ-107",
    name: "SpiceJet",
    origin: "Bengaluru (BLR)",
    price: 5000
  },
  {
    arrivalTime: "10:30",
    date: formatDate(0),
    departureTime: "8:00",
    destination: "Bengaluru (BLR)",
    flightNo: "TW-108",
    name: "Air Taiwan",
    origin: "Mumbai (BOM)",
    price: 4004
  },
  {
    arrivalTime: "15:30",
    date: formatDate(0),
    departureTime: "12:00",
    destination: "Delhi (DEL)",
    flightNo: "TW-109",
    name: "Air Taiwan",
    origin: "Bengaluru (BLR)",
    price: 3495
  },
  {
    arrivalTime: "11:30",
    date: formatDate(0),
    departureTime: "9:00",
    destination: "Delhi (DEL)",
    flightNo: "AI-110",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 4137
  },
  {
    arrivalTime: "16:30",
    date: formatDate(0),
    departureTime: "14:00",
    destination: "Bengaluru (BLR)",
    flightNo: "AI-111",
    name: "Air India",
    origin: "Delhi (DEL)",
    price: 5217
  },
  {
    arrivalTime: "16:30",
    date: formatDate(0),
    departureTime: "14:30",
    destination: "Mumbai (BOM)",
    flightNo: "AI-112",
    name: "Air India",
    origin: "Delhi (DEL)",
    price: 4170
  },
  {
    arrivalTime: "22:30",
    date: formatDate(0),
    departureTime: "20:00",
    destination: "Mumbai (BOM)",
    flightNo: "AI-113",
    name: "Air India",
    origin: "Bengaluru (BLR)",
    price: 5132
  },
  {
    arrivalTime: "22:45",
    date: formatDate(0),
    departureTime: "21:30",
    destination: "Mumbai (BOM)",
    flightNo: "AI-114",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 2001
  },
  {
    arrivalTime: "22:10",
    date: formatDate(0),
    departureTime: "20:00",
    destination: "Pune (PNQ)",
    flightNo: "AI-115",
    name: "Air India",
    origin: "Delhi (DEL)",
    price: 5233
  },
  {
    arrivalTime: "19:30",
    date: formatDate(0),
    departureTime: "17:20",
    destination: "Bengaluru (BLR)",
    flightNo: "AI-116",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 6348
  },
  {
    arrivalTime: "14:15",
    date: formatDate(0),
    departureTime: "13:15",
    destination: "Pune (PNQ)",
    flightNo: "AI-117",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 5117
  },
  {
    arrivalTime: "6:00",
    date: formatDate(3),
    departureTime: "5:00",
    destination: "Mumbai (BOM)",
    flightNo: "AI-119",
    name: "Air India",
    origin: "Delhi (DEL)",
    price: 3525
  },
  {
    arrivalTime: "9:50",
    date: formatDate(4),
    departureTime: "7:20",
    destination: "Pune (PNQ)",
    flightNo: "AI-120",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 5635
  },
  {
    arrivalTime: "6:58",
    date: formatDate(3),
    departureTime: "6:10",
    destination: "Pune (PNQ)",
    flightNo: "AI-121",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 2537
  },
  {
    arrivalTime: "10:20",
    date: formatDate(3),
    departureTime: "8:10",
    destination: "Pune (PNQ)",
    flightNo: "AI-131",
    name: "Air India",
    origin: "Delhi (DEL)",
    price: 4681
  },
  {
    arrivalTime: "9:15",
    date: formatDate(2),
    departureTime: "8:15",
    destination: "Bengaluru (BLR)",
    flightNo: "SJ-115",
    name: "SpiceJet",
    origin: "Delhi (DEL)",
    price: 3549
  },
  {
    arrivalTime: "13:00",
    date: formatDate(2),
    departureTime: "11:00",
    destination: "Pune (PNQ)",
    flightNo: "SJ-116",
    name: "SpiceJet",
    origin: "Bengaluru (BLR)",
    price: 5645
  },
  {
    arrivalTime: "10:00",
    date: formatDate(2),
    departureTime: "8:00",
    destination: "Bengaluru (BLR)",
    flightNo: "SJ-117",
    name: "SpiceJet",
    origin: "Delhi (DEL)",
    price: 5000
  },
  {
    arrivalTime: "10:30",
    date: formatDate(2),
    departureTime: "8:00",
    destination: "Bengaluru (BLR)",
    flightNo: "TW-118",
    name: "Air Taiwan",
    origin: "Delhi (DEL)",
    price: 4004
  },
  {
    arrivalTime: "15:30",
    date: formatDate(2),
    departureTime: "12:00",
    destination: "Mumbai (BOM)",
    flightNo: "TW-119",
    name: "Air Taiwan",
    origin: "Bengaluru (BLR)",
    price: 3495
  },
  {
    arrivalTime: "11:30",
    date: formatDate(2),
    departureTime: "9:00",
    destination: "Mumbai (BOM)",
    flightNo: "AI-130",
    name: "Air India",
    origin: "Delhi (DEL)",
    price: 4137
  },
  {
    arrivalTime: "16:30",
    date: formatDate(2),
    departureTime: "14:00",
    destination: "Delhi (DEL)",
    flightNo: "AI-131",
    name: "Air India",
    origin: "Bengaluru (BLR)",
    price: 5217
  },
  {
    arrivalTime: "16:30",
    date: formatDate(2),
    departureTime: "14:30",
    destination: "Delhi (DEL)",
    flightNo: "AI-132",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 4170
  },
  {
    arrivalTime: "22:30",
    date: formatDate(2),
    departureTime: "20:00",
    destination: "Bengaluru (BLR)",
    flightNo: "AI-133",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 5132
  },
  {
    arrivalTime: "22:45",
    date: formatDate(2),
    departureTime: "21:30",
    destination: "Pune (PNQ)",
    flightNo: "AI-134",
    name: "Air India",
    origin: "Mumbai (BOM)",
    price: 2001
  },
  {
    arrivalTime: "22:10",
    date: formatDate(2),
    departureTime: "20:00",
    destination: "Delhi (DEL)",
    flightNo: "AI-135",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 5233
  },
  {
    arrivalTime: "19:30",
    date: formatDate(2),
    departureTime: "17:20",
    destination: "Pune (PNQ)",
    flightNo: "AI-136",
    name: "Air India",
    origin: "Bengaluru (BLR)",
    price: 6348
  },
  {
    arrivalTime: "14:15",
    date: formatDate(2),
    departureTime: "13:15",
    destination: "Mumbai (BOM)",
    flightNo: "AI-137",
    name: "Air India",
    origin: "Pune (PNQ)",
    price: 5117
  }
];

export const DEFAULT_USER_STATE = {
  originCity: "",
  destinationCity: "",
  journeyDate: new Date("2020/11/01"),
  returnDate: new Date(formatDate(2)),
  numOfPassenger: "",
  isOneWayFlight: true,
  priceRange: { min: 0, max: 15000 }
};

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// customizable passenger limit
export const PASSENGER_LIMIT = 20;

const PASSENGER_DATA = [];
for (let i = 0; i < PASSENGER_LIMIT; i++) {
  PASSENGER_DATA.push({ value: i + 1, label: i + 1 });
}

export { PASSENGER_DATA };
