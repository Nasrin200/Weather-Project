
function formatDate(timestamp){
let date= new Date(timestamp)
let hours= date.getHours();
if (hours<10){
`0${hours}`
}
let minutes= date.getMinutes();
if (minutes<10){
  `0${minutes}`
  }
  let days=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
  let day= days[date.getDay()];
return `${day} ${hours}:${minutes}`;

}
function getforecast(coordinates){
  let apiKey = "001bc651977f4b024af4d84282b0f02a";
 let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=${apiKey}&units=metric`
 console.log(apiUrl);
 axios.get(apiUrl).then(displayForecast);

}

function showWeather(response) {
  document.querySelector("#hc").innerHTML = response.data.name;
  document.querySelector("#condition").innerHTML = 
    response.data.weather[0].description
    centigradTemperature= response.data.main.temp
    
  document.querySelector("#cityTemp").innerHTML = Math.round(
    centigradTemperature
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#hum").innerHTML = Math.round(
    response.data.main.humidity
  );
  //document.querySelector("#prec").innerHTML = Math.round(
   // response.data.clouds.all
 // );
  let dateElement=document.querySelector("#date")
  dateElement.innerHTML=formatDate(response.data.dt*1000)
let iconElement= response.data.weather[0].icon
 document.querySelector("#icon").setAttribute ("src",`http://openweathermap.org/img/wn/${iconElement}@2x.png`)
 getforecast(response.data.coord)
  
}
function search(event) {
  event.preventDefault();
  let apiKey = "001bc651977f4b024af4d84282b0f02a";
  let cityName = document.querySelector("#cityname").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

 
let form = document.querySelector("#forms");
form.addEventListener("submit", search);

//function showCurrent(response) {
  //document.querySelector("#hc").innerHTML = response.data.name;
  //document.querySelector("#condition").innerHTML = 
    //response.data.weather[0].description;
  //document.querySelector("#cityTemp").innerHTML = Math.round(
//    response.data.main.temp
//  );
//  document.querySelector("#wind").innerHTML = Math.round(
    //response.data.wind.speed
  //);
  //document.querySelector("#hum").innerHTML = Math.round(
//    response.data.main.humidity
  //);
  //document.querySelector("#prec").innerHTML = Math.round(
//    response.data.clouds.all
// 
//  );

//}
//function endButton() {
  //function showPosition(position) {
  //  let lat = position.coords.latitude;
   // let long = position.coords.longitude;
   // let apiKey = "001bc651977f4b024af4d84282b0f02a";

    //let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
   // axios.get(apiUrlCurrent).then(showCurrent);
 // }
  //navigator.geolocation.getCurrentPosition(showPosition);
//}
//let button = document.querySelector("button");
//button.addEventListener("click", endButton);
let centigradTemperature= null;
function displayFahrenheitTemperature(event){
event.preventDefault()
centigradLink.classList.remove("active")
fahrenheitLink.classList.add("active")
let fahrenheitTemperature = (centigradTemperature*9)/5+32;
let temperatureElement=document.querySelector("#cityTemp")

temperatureElement.innerHTML= Math.round(fahrenheitTemperature)
}

function displaCentigradTemperature(event){
  event.preventDefault()
  centigradLink.classList.add("active")
fahrenheitLink.classList.remove("active")

  let temperatureElement=document.querySelector("#cityTemp")

temperatureElement.innerHTML= Math.round(centigradTemperature)
}
 
  let fahrenheitLink=document.querySelector("#fahrenheit")
fahrenheitLink.addEventListener("click",displayFahrenheitTemperature)

  let centigradLink=document.querySelector("#centigrad")
  centigradLink.addEventListener("click",displaCentigradTemperature)

  
 function displayForecast(response){
   console.log(response.data.daily)
  let forecastElement= document.querySelector("#forecast")
  let days=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
  let forecastHTML=`<div class="row">`

days.forEach(function(day){
   
    forecastHTML=forecastHTML+` <div class="tomorrow">
    <div class="row">
      <div class="col-2"><strong> ${day}</strong></div>
      <div class="col-2">
        28℃ <br />
        19℃
      </div>
    <div class="col-2">Wind: 7 km/h</div>
    </div>`
    forecastHTML=forecastHTML+`</div>`;
    forecastElement.innerHTML=forecastHTML

 
});
};
