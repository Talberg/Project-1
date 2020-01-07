

// Open Weather API call. This pulls information on current weather for the city.
var apiKey = '25f5253d7be788ad89940c40b9d3c859';
cityName = 'denver';
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=' + apiKey + '&q=' + cityName + '&units=imperial'

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
})

var imgur = {
    "url": "https://api.imgur.com/3/gallery/t/trail_of_tears/",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Client-ID 654f4769131264e"
    },
  };
  
  $.ajax(imgur).done(function (response) {
    console.log(response);
  });
