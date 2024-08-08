//Scroll Index
//const getDocumentHeight = () => {
//return Math.max(
//document.body.scrollHeight, document.documentElement.scrollHeight,
//document.body.offsetHeight, document.documentElement.offsetHeight,
//document.body.clientHeight, document.documentElement.clientHeight
//);
//};
//document.addEventListener('DOMContentLoaded', () => {
//const height = getDocumentHeight();
//const scrollProgress = document.getElementById('progressBar');
//scrollProgress.max = height;
//console.log(height)
//console.log(scrollProgress)
// window.addEventListener('scroll', () => {
//  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// scrollProgress.value = (scrollTop / height) * 100;
//});
//});
//
//
//  <p clas="details_text">
//
function numberToWords(num) {
  const words = ["zero", "one", "two", "three",
    "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"];
  const tens = ["twenty", "thirty",
    "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (num < 20) return words[num];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? "-" + words[num % 10] : "");
  if (num < 1000) return words[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? " and " + numberToWords(num % 100) : "");

  return num;
}

function updateExperience() {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const yearsInWords = numberToWords(yearsOfExperience);
  document.getElementById("inner_years").textContent = yearsInWords;
}

window.onload = updateExperience;
