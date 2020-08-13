const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=d7d722850a712f1df1d0566396929b91&units=metric'

request({ url: url, json:true }, (error, response)=>{

         console.log(response.body.weather)
})