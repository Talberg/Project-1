



function navigateMoreINFO(){
    // location.href=("./moreINFO.html");
    $('#photo1').empty(),
    $('#photo2').empty(),
    $('#Title').empty()
    $('#description').empty()
    
    var getPark = JSON.parse(localStorage.getItem("parkData"));
    // getPark.setAttribute("class", "container");
    // $("#Title").append(getPark)
    console.log(getPark)
    
    var photos = {
    "url": `https://api.pexels.com/v1/search?query=${getPark.name}&per_page=15&page=1`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "563492ad6f917000010000018ab017d1bc584b428babb3e74888fc2f"
    },
  };
  weather(getPark.Lat,getPark.Long)

  //Generated the photo then appends the data 
  $.ajax(photos).done(function (response) {
      
   
    $('#photo1').attr('src',response.photos[0].src.medium),
    $('#photo2').attr('src',response.photos[1].src.medium),
    // $('#photos').append(img)
    console.log(response);
  });
  function weather(lat, long) {

    var apiKey = '25f5253d7be788ad89940c40b9d3c859';
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=' + apiKey + '&lat=' + lat + '&lon=' + long + '&units=imperial'
  
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        
        logResults(response)
      
    })
  
  }
  $('#Title').append(getPark.fullName)
  $('#description').append(getPark.description)
 

  
}
navigateMoreINFO()



function logResults(response) {
    // var cityName = response.name;
    var cityTemp = response.main.temp;
    var cityHumidity = response.main.humidity;
    var cityWind = response.wind.speed;
    // $('#city').append(`<h1>${cityName}</h1>`)
    // $('#date').append(`<h3>${currentDay}</h3>`)
    $('#temp').append(`<h5>Temperature: ${cityTemp} F</h5>`)
    $('#humidity').append(`<h5>Humidity: ${cityHumidity} RH</h5>`)
    $('#wind-speed').append(`<h5>Wind Speed: ${cityWind} mph</h5>`)
}
  
