

// Open Weather API call. This pulls information on current weather for the city.
var apiKey = '25f5253d7be788ad89940c40b9d3c859';
cityName = 'denver';
var lat = ''
var long = ''
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=' + apiKey + '&q=' + cityName + '&units=imperial'
var siteImg = 'cats'
var searchTerm
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

  console.log(response)
})
//imgs
var imgur = {
  "url": `https://api.imgur.com/3/gallery/t/${siteImg}/`,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Client-ID 654f4769131264e"
  },

};

$.ajax(imgur).done(function (response) {
  console.log(response);
});
//search









$('#button').on('click', function (event) {

searchTerm = $('#states').val()

  var searchResults = {
    "url": `https://developer.nps.gov/api/v1/parks?parkCode=&limit=10&stateCode=${searchTerm}&api_key=Pdcuwde0uYcGlFQwqha0ym4sxfIyAh5hvWQ7k4qV`,
    "method": "GET",
    "timeout": 0,
  };


  $.ajax(searchResults).done(function (response) {
    

    console.log(long)
    console.log(lat)
    for (var i = 0; i <= 9 && i < response.data.length; i++) {
      $(".fullName").text(response.data[i].fullName);
    var latLong = response.data[i].latLong
    var x = latLong.split(',')
    console.log(x)
    latFull = x[0]
    longFull = x[1]
    lat = latFull.split(':')
    long = longFull.split(':')
    console.log(lat)


     weather(lat[1],long[1])

    }

    console.log(response);
  })
  
  console.log(searchTerm)
})

    // $(".description").text(response.data[i].description);
    // $(".directionsInfo").text("Directions: " + response.data[i].directionsInfo);
    // $(".entranceFees").text("Entrance Fees: " + response.data[i].entranceFees);
    // $(".entrancePasses").text("Entrance Passes: " + response.data[i].entrancePasses);
    // $(".standardHours").text("Park Hours: " + response.data[i].operatingHours.standardHours);
    // $(".email").text("Email: " + response.data[i].contacts.emailAddresses);
    function latLongGen(){
      var latLong = response.data[i].latLong
    var x = latLong.split(',')
    lat = x[0]
    console.log(lat)
    long = x[1]
    }

    function weather(lat,long){

      var apiKey = '25f5253d7be788ad89940c40b9d3c859';
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=' + apiKey + '&lat=' + lat + '&lon=' + long + '&units=imperial'


    $.ajax({
  url: queryURL,
  method: "GET"
    }).then(function (response) {

  console.log(response)
    })

    }