
const express = require('express');
const path = require('path');
const app = express()
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port=process.env.PORT || 3000


//define path for express config path
const publicDirectoryPath = path.join(__dirname, ('../public'));
const viewsPath = path.join(__dirname, ('../templates/views'));
const partialsPath = path.join(__dirname, ('../templates/partials'));

//setup path for views
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));
//static path config
app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name:'jackie'
    });
    
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us',
        name:'puneeth'
    });
    
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help page",
        name:'puneeth n viraat'
    });
    
});


app.get('/help/*', (req, res) => {
    res.render('404-page', {
        title: "Artical not found",
        name: 'puneeth',
        errorMessage:'artical not found'
    });
});
    
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
          error:'you must provide the address'
      })
    }
    else {
        const address = req.query.address;
     
        geocode(address, (error, data) => {
        if (error) {
        res.send(    {text:error})
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
        res.send(    {text:error})
            }

            else {
              res.send( { location: data.location,
                    forcast: forecastData})
            }
        })
    })   
    }
    
});
app.get('*', (req, res) => {
    res.render('404-page', {
        title: "Page not found",
        name: 'puneeth',
        errorMessage:'page not found'
    });
    }); 
   
app.listen(port, () => {
    console.log("server is up on port port");
})