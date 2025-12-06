const text = "20-03-2023, 15-11-2024, 01-01-2025";
const regexGlobal = /\d{2}-\d{2}-\d{4}/g; // Global 'g' flag

const allDates = text.match(regexGlobal);
/*
// allDates will be a simple Array:
[
  "20-03-2023",
  "15-11-2024",
  "01-01-2025"
]
*/
console.log(allDates);