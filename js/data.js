// Dziejsza data
const actualData = document.getElementById("date");

const options = { weekday: "long", month: "long", day: "numeric", year: "numeric", };
const today = new Date();

actualData.innerHTML = today.toLocaleDateString("pl-PL", options);
