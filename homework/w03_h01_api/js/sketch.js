

var populationData;
// var radius;
// var m;
function setup(){
	var canvas=createCanvas(windowWidth,windowHeight/1.5);
	canvas.parent('container');
	background(255,182,193);
	loadJSON('http://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=state:*&key=55edbd0e655c7314f041499a12f1605f4ca8670d',gotData);
	
}

function gotData(data){
	// println(data);
	populationData=data;
	console.log(populationData);

	
}

$("document").ready(function() {
            $("#myButton").click(function() {
               		drawCircles();
                    
                });

	drawCircles = function draw(){
	if(populationData){
	fill(255);
	randomSeed(4);
	
	for(var i=1;i<populationData.length;i++){
		// console.log("test");
		var obj=populationData[i]; //obj or obj[]?
		var radius=obj[0];
		var m=map(radius,0,15000000,0,100)
		ellipse(random(width),random(height),m,m); //my intention is to draw 52 circles of various sizes based
													//on the population of each state, the console doesn't return
													//any errors. I wonder if there's something with the way I extract
													//the data from the array
	}
	}
}

});
