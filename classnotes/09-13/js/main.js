var city='';
var state='';
var APIKey='7d34399e7f7ed5c1';


$(document).ready(function(){
	init();

});

var init=function(){
console.log("whats the weather?");
$('#submit').click(function(e){
	e.preventDefault();
	setLocation();

})

}

var setLocation = function(){
	city=$('.currentCity').val();
	state=$('.currentState').val();

	if(city==null||city==''){
		alert("Enter a city please!!");
		return;

	}

	getWeather();
};

var getWeather=function(){

	var myUrl="http://api.wunderground.com/api/"+APIKey+"/geolookup/conditions/q/"+state+"/"+city+".json";

	$.ajax({
		url:myUrl,
		dataType:"jsonp", //jsonp vs json-
		success:function (response){       //what's response?
			// console.log(5);
			// console.log("test");//debugging technique to see if each part of the codes gets excuted 
			console.log(response);
			loadWeather(response);

		}
	});
}

var loadWeather=function(response){
	if(response.response.error){
		alert(response.response.error.description);
		return;
	}


// var thisCity=response.location.city;
var temp=response.current_observation.temp_f;
console.log(temp);
var weather=response.current_observation.weather;
var icon= response.current_observation.icon_url;

$('.temperature').html(temp);
$('.weather').html(weather);
$('.weatherIcon').html('<img src="'+ icon+'">');
$('.currentCity').html(thisCity);
}