
const express = require('express');
const app = express()
const request = require('postman-request');
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bangalore.json?access_token=pk.eyJ1IjoicHVuZWV0aG4iLCJhIjoiY2tkNDM2cDZ3MWt4MjJycXZ4aDhzcXFvdCJ9.PV4HYS1WzdbXGL_L2sGqWw&limit=1'

app.get('', (req, res) => {

request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

    
});

   
app.listen(4000, () => {
    console.log("server is up on port 4000");
})