console.log('this is to get weather data');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messsageOne = document.getElementById('message_one');
const messsageTwo = document.getElementById('message_Two');
message_one.textContent = '';
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=7658e29ee6204da60dcec48c4cd297a5').then((response) => {
    response.json().then((data) => {
        if (data.cod==404) {
            message_one.textContent=(data.message)  
        } else {
            message_one.textContent = (data.name);
            const temp_now = Math.round((data.main.temp - 273.15) * 100) / 100;


            message_Two.textContent='The temperature is '+temp_now+' and the weather is like '+data.weather[0].description+'.';
        }
    })
})

})