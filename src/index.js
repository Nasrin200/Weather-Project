
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
function showWeather(response) {
  document.querySelector("#hc").innerHTML = response.data.name;
  document.querySelector("#condition").innerHTML = 
    response.data.weather[0].description
  document.querySelector("#cityTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#hum").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#prec").innerHTML = Math.round(
    response.data.clouds.all
  );
  let dateElement=document.querySelector("#date")
  dateElement.innerHTML=formatDate(response.data.dt*1000)
 
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

function showCurrent(response) {
  document.querySelector("#hc").innerHTML = response.data.name;
  document.querySelector("#condition").innerHTML = 
    response.data.weather[0].description;
  document.querySelector("#cityTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#hum").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#prec").innerHTML = Math.round(
    response.data.clouds.all
 
  );

}
function endButton() {
  function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiKey = "001bc651977f4b024af4d84282b0f02a";
    //let cityName = document.querySelector("#cityname").value;

    let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlCurrent).then(showCurrent);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", endButton);
