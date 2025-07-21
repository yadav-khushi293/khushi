#what is object in js 

-object literal denoted by this -->{};
- java script is based on object;
- react mdn filke ob js.

object, array ,filter,reduces,map



const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "YOUR API KEY";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <form class="weatherForm">
        <input type="text" class="cityInput" placeholder="Enter city">
        <button type="submit">Get Weather</button>
    </form>

    <div class="card" style="display: none">
    </div>
 
    <script src="index.js"></script>
</body>
</html>

body{
    font-family: Arial, sans-serif;
    background-color: hsl(0, 0%, 95%);
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.weatherForm{
    margin: 20px;
}
.cityInput{
    padding: 10px;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid hsla(0, 0%, 20%, 0.3);
    border-radius: 10px;
    margin: 10px;
    width: 300px;
}
button[type="submit"]{
    padding: 10px 20px;
    font-weight: bold;
    font-size: 2rem;
    background-color: hsl(122, 39%, 50%);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button[type="submit"]:hover{
    background-color: hsl(122, 39%, 40%);
}
.card{
    background: linear-gradient(180deg, hsl(210, 100%, 75%), hsl(40, 100%, 75%));
    padding: 50px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px hsla(0, 0%, 0%, 0.5);
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    margin-top: 0;
    margin-bottom: 25px;
}
p{
    font-size: 1.5rem;
    margin: 5px 0;
}
.cityDisplay, .tempDisplay{
    font-size: 3.5rem;
    font-weight: bold;
    color: hsla(0, 0%, 0%, 0.8);
    margin-bottom: 25px;
}
.humidityDisplay{
    font-weight: bold;
    margin-bottom: 25px;
}
.descDisplay{
    font-style: italic;
    font-weight: bold;
    font-size: 2rem;
}
.weatherEmoji{
    margin: 0;
    font-size: 7.5rem;
}
.errorDisplay{
    font-size: 2.5rem;
    font-weight: bold;
    color: hsla(0, 0%, 0%, 0.75);
}
