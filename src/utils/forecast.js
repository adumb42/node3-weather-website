const request = require('request');

// 
// Goal: Add new data to forecast
// 
// 1. Update the forecast string to include new data
// 2. Commit your changes
// 3. Push your changes to Github and deploy to Heroku
// 4. Test you work in the live application

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e1d27d27169f10b63898e523bc10989&query=' + latitude + ',' + longitude + 'units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 'There is currently ' + body.current.weather_descriptions[0].toLowerCase() + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + '. The humidity is at ' + body.current.humidity + '.')
        }
    })
}

module.exports = forecast;
