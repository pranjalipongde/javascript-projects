 // loop through and array but uses function . it passes a callback function 
 
 months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

months.forEach((month, index) => {
  console.log("index :" + index + " " + "month :" + month);
});
