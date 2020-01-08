

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
//search









$('#button').on('click', function (event) {

  searchTerm = $('#states').val()

  var searchResults = {
    "url": `https://developer.nps.gov/api/v1/parks?parkCode=&limit=10&stateCode=${searchTerm}&api_key=Pdcuwde0uYcGlFQwqha0ym4sxfIyAh5hvWQ7k4qV`,
    "method": "GET",
    "timeout": 0,
  };


  $.ajax(searchResults).done(function (response) {
    
    var latLong = response.data[0].latLong;
  
    
    for (var i = 0; i <= 9 && i < response.data.length; i++) {
      var parkCard= $("<div class='card'> <div class='card-title'> <h3 class='park'>" + response.data[i].fullName + "</h3> </div> </div>")

      parkCard.data("data", {fullName: response.data[i].fullName, 
       description: response.data[i].description,
       directionsInfo: response.data[i].directionsInfo,
       entranceFees: response.data[i].entranceFees,
       entrancePasses: response.data[i].entrancePasses});
      //  standardHours: response.data[i].operatingHours.standardHours,
      //  email: response.data[i].contacts.emailAddresses});
      var latLong = response.data[i].latLong
      var x = latLong.split(',')
      latFull = x[0]
      longFull = x[1]
      
      // console.log(lat)
  
  
      //  weather(lat[1],long[1])
      console.log(parkCard)
      $("#cards-go-here").append(parkCard);
      
    }

    // $(".wrapperDivForParks").append(park);
  
  })

})

function parkStorage(data){
  localStorage.setItem("parkData", JSON.stringify(data));
}

$("#cards-generated").on("click", ".card", function() {
  console.log($(this).data("data"))
parkStorage($(this).data("data"));
})

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


// later, when the user clicks on one of the park/location 'more info' links, write code to grab the .data 
// function parkStorage(){
//     localStorage.setItem('parkData', JSON.stringify(parkCard));
// }
