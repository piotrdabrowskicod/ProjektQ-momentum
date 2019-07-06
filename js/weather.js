// Wybrane elementy pogody
const iconElement = document.querySelector(".pogoda-ikona");
const tempElement = document.querySelector(".pogoda-temperatura span");
const locationElement = document.querySelector(".lokalizacja span");
const notificationElement = document.querySelector(".geo_blok");

// Dane pogodowe

const weather = {};

weather.temperature = {
    unit : "celsius"
}

// Warunki i zmienne pogodowe
const kelvin = 273;

// Klucz
const key = "40acb63ef308175bf6287408bbdf84b3";

// Sprawdzenie czy przeglądarka wspiera geolokalizację
// na Caniuse - w sumie z popularnych IE od 6 do 8 tylko nie wspiera i cała Opera mini
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Odmowa geolokalizacji</p>";
}

// Ustalenie pozycji użytkownika
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude,longitude);
}

// Pokazywanie ewnetualnego błędu
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>Odmowa geolokalizacji</p>`;
}

// Funkcja pobierania pogody
function getWeather(latitude,longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - kelvin);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// Pokazanie pogody użytkownikowi
function displayWeather(){
    iconElement.innerHTML = `<img src="img/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    
        fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - kelvin);
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}


// Pokazanie pogody w apce użytkownikowi
function displayWeather(){
    iconElement.innerHTML = `<img src="img/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}





