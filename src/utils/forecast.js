const request = require('request')

const forecast = (longitude, latitude , callback) => {

    const url = 'https://api.darksky.net/forecast/a4676cd15d6c1055d9966789b89e0bbd/' + longitude + ',' + latitude + '?units=si'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service')
        } else if(body.error) {
            callback('Unable to find location')
        } else {
            const {daily, currently} = body
            callback(undefined, daily.data[0].summary + ' It is currently ' +  currently.temperature+ ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.' )
        }})
}

module.exports = forecast