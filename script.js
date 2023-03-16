const url= 'https://api.openweathermap.org/data/2.5/'
const key = '9a0118b4224794f42d795058fadd6d2f'
const setQuery = (e) => {
    if(e.keyCode=='13')
    getResults(searchBar.value)
}

const getResults = (cityName)=>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) =>{
    let city =document.querySelector('.city')
    city.innerText =`${result.name} ${result.sys.country}`

    let temp =document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)}°C`

    let desc =document.querySelector('.desc')
    desc.innerText=result.weather[0].description
}

const searchBar =document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)


function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);