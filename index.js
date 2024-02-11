const input=document.querySelector("input");
const searchBtn=document.getElementById("searchBtn");
const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const windspeed=document.getElementById("windSpeed");
const humindy=document.getElementById("humidity");
const apikey="5bc2ee6821c5bc629fcbc29591490932";

searchBtn.addEventListener("click",async()=>{
    try{
        var api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}`)
        var apijson=await api.json()
        //console.log(apijson);
        //console.log(apijson.weather[0].main);
        temp.innerHTML=`${Math.floor(apijson.main.temp -273)}°C`
        city.innerHTML=`${apijson.name}`
        windspeed.innerHTML=`${apijson.wind.speed} km/h`
        humindy.innerHTML=`${apijson.main.humidity} %`
    }
    catch(error){
        console.log(error)
    }
})