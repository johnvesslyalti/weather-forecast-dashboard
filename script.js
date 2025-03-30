async function getWeather() {
    const city = document.getElementById('city').value;
    if(!city) return 'Please enter the city name';

    const apiKey = '1f6531f1cba0d472f9c98917e417308c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(data.cod !== 200) {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`
        }
        document.getElementById('weather-info').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}</p>
        <p>Humidity: ${data.weather[0].description}</p>
        <p>Wind speed: ${data.wind.speed}</p>
        `   
    } catch(error) {
        document.getElementById('weather=info').innerHTML = '<p>Failed to fetch weather data.</p>'
    }
}