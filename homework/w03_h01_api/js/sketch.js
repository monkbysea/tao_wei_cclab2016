

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


$("#myButton").click(function(){
	console.log("test")
})

function draw(){

	$("#myButton").click(function(){
	
		if(populationData){
			fill(255);
			randomSeed(4);
			console.log("test");
			
			for(var i=1;i<populationData.length;i++){
				console.log("test");
				var obj=populationData[i]; 
				// console.log("test");
				var radius=obj[0];
				var m=map(radius,0,15000000,0,100)
				// console.log("test");
				// strokeWeight(1);
				// fill(255);
				ellipse(random(width),random(height),m,m); //draw 52 circles of various sizes based
															//on the population of each state;
			}
		}
	});
	
	//clear the canvas
	$("#clear").click(function(){
		fill(0);
		rect(0,0,width,height);
	});

	//choose color
	$("#red").click(function(){
		stroke(255,0,0);
	});

	$("#green").click(function(){
		stroke(255,255,0);
	});



	
}

function mouseDragged() 
{ 
	
	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}


