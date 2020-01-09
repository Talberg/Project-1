

// Open Weather API call. This pulls information on current weather for the city.
var apiKey = '25f5253d7be788ad89940c40b9d3c859';
cityName = 'denver';
var lat = ''
var long = ''
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=' + apiKey + '&q=' + cityName + '&units=imperial'
var siteImg = 'cats'
var searchTerm;
var parkCard;

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


$('#button').on('click', function (event) {

  searchTerm = $('#states').val()

  var searchResults = {
    "url": `https://developer.nps.gov/api/v1/parks?parkCode=&limit=10&stateCode=${searchTerm}&api_key=Pdcuwde0uYcGlFQwqha0ym4sxfIyAh5hvWQ7k4qV`,
    "method": "GET",
    "timeout": 0,
  };

  //search
  $.ajax(searchResults).done(function (response) {
//pulls the lat & long then splits into usable data 
    


    $("#cards-generated").empty();
 
    //$("#").empty();
    for (var i = 0; i <= 9 && i < response.data.length; i++) {var latLong = response.data[i].latLong
    var x = latLong.split(',')
    latFull = x[0]
    longFull = x[1]
    lat = latFull.split(':')
    long = longFull.split(':')

    var latLong = response.data[0].latLong;

      var parkCard = $(`

          <div class="card clickable">
              <div class="card-image">
                  <img class='npsImg' src="npsLogo.png">
                  </div>
                  <div class="card-content">
                  <span class="card-title">${response.data[i].fullName}</span>
                  <p></p>
              </div>
              <div class="card-action">
                  <a href="#">More Info</a>
              </div>
          </div>

  `)

      parkCard.data("data", {
        fullName: response.data[i].fullName,
        description: response.data[i].description,
        directionsInfo: response.data[i].directionsInfo,
        entranceFees: response.data[i].entranceFees,
        entrancePasses: response.data[i].entrancePasses,
        Lat: lat[1],
        Long: long[1],
      });
      //  standardHours: response.data[i].operatingHours.standardHours,
      //  email: response.data[i].contacts.emailAddresses});
      var latLong = response.data[i].latLong
      var x = latLong.split(',')
      latFull = x[0]
      longFull = x[1]

      console.log(parkCard)
      $("#cards-generated").append(parkCard);

    }

  })

})





function latLongGen(i) {
  var searchResults = {
    "url": `https://developer.nps.gov/api/v1/parks?parkCode=&limit=10&stateCode=${searchTerm}&api_key=Pdcuwde0uYcGlFQwqha0ym4sxfIyAh5hvWQ7k4qV`,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(searchResults).done(function (response) {
    var latLong = response.data[i].latLong
    var x = latLong.split(',')
    latFull = x[0]
    longFull = x[1]
    lat = latFull.split(':')
    long = longFull.split(':')

  })
}


function parkStorage(data) {
  localStorage.setItem("parkData", JSON.stringify(data));
}
$("#cards-generated").on("click", ".card-action a", function (event) {
  event.preventDefault();
})
$("#cards-generated").on("click", ".clickable", function (event) {
  event.preventDefault();

  parkStorage($(this).data("data"));
  window.location.replace('moreINFO.html')
})

function weather(lat, long) {

  var apiKey = '25f5253d7be788ad89940c40b9d3c859';
  var queryURL = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=' + apiKey + '&lat=' + lat + '&lon=' + long + '&units=imperial'


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response)
  })

}



