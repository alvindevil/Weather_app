const apiKey = "9d7bb8eeac4742927478da8b2d491b2d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_btn = document.getElementById("search_icon");
const user_input = document.getElementById("input_search");
const search_div = document.querySelector(".search");
const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");
const weather_icon = document.querySelector(".weather-icon");

user_input.addEventListener("keyup", (event)=>
{
    if (event.key == "Enter")
    {
        const city_name = user_input.value.trim();
        checkWeather(city_name);
    }
});

search_btn.addEventListener("click",  () => {
    const city_name = user_input.value.trim();
    checkWeather(city_name);
    
});


async function checkWeather(city)
    {
        try {
            const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
     
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";
            document.querySelector(".feels_like").innerHTML = data.main.feels_like + "°C";
            document.querySelector(".preassure").innerHTML = data.main.pressure + " pa";
            user_input.value = "";
            hero.style.display = "flex";
            footer.style.display = "flex";
            
            if(data.weather[0].main == "Clear")
            {
                weather_icon.src = "images/clear.png";
                weather_icon.classList.add("weather-icon-scaleUp");
                setTimeout(()=>
                {
                    weather_icon.classList.remove("weather-icon-scaleUp");
                },3000);
            }

            else if(data.weather[0].main == "Fog")
            {
                weather_icon.src = "images/fog.png";
                weather_icon.classList.add("weather-icon-scaleUp");
                setTimeout(()=>
                {
                    weather_icon.classList.remove("weather-icon-scaleUp");
                },3000)
            }
            else if(data.weather[0].main == "Snow")
            {
                weather_icon.src = "images/snow.png";
                weather_icon.classList.add("weather-icon-scaleUp");
                setTimeout(()=>
                {
                    weather_icon.classList.remove("weather-icon-scaleUp");
                },3000)
            }
            else if(data.weather[0].main == "Clouds")
            {
                weather_icon.src = "images/clouds.png";
                weather_icon.classList.add("weather-icon-scaleUp");
                setTimeout(()=>
                {
                    weather_icon.classList.remove("weather-icon-scaleUp");
                },3000)
            }
            else if(data.weather[0].main == "Mist")
            {
                weather_icon.src = "images/mist.png";
                weather_icon.classList.add("weather-icon-scaleUp");
                setTimeout(()=>
                {
                    weather_icon.classList.remove("weather-icon-scaleUp");
                },3000)
            }
            else if(data.weather[0].main == "Rain")
            {
                weather_icon.src = "images/rain.png";
                weather_icon.classList.add("weather-icon-scaleUp");
                setTimeout(()=>
                {
                    weather_icon.classList.remove("weather-icon-scaleUp");
                },3000)
            }

        }
        catch(error)
        {

            console.error("Error fetching weather data:", error);
            document.querySelector(".city").innerHTML = "Wrong city name";
            document.querySelector(".temp").innerHTML = "___°C";
            document.querySelector(".humidity").innerHTML = "%";
            document.querySelector(".wind").innerHTML = "m/s";

        }
    }

