console.log('this is to get weather data');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messsageOne = document.getElementById('message_one');
const messsageTwo = document.getElementById('message_Two');
message_one.textContent = '';
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
fetch('https://api.weatherstack.com/current?access_key=36e30cb5c24c7928fe571b1d9f4fd2ad&query='+location+'').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            message_one.textContent=(data.error.info)  
        } else {
            message_one.textContent=(data.location.name);
            message_Two.textContent=(data.current.temperature);
        }
    })
})

})