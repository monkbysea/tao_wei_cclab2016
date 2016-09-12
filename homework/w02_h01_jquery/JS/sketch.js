function setup() {
 var canvas=createCanvas(640,340);
 canvas.parent('mycanvas');
 background(0);

 }

 // function draw(){
 // 	line(10, 10, 20, 20);
 // }

$("document").ready(function() {
            $("#start").click(function() {
                    $("#mycontainer").animate({width: 600}, 300)
                    .animate({height: 300}, 400)
                    .animate({left: 290}, 500)
                    .animate({top: "+=50", borderWidth: 10}, "slow")
                    setTimeout(function(){
                    	$('#draw').css("visibility","visible")
                    },2000);
                    
                });
            
            $("#draw").click(function() {
            		// function creatCanvas(){}; //if i can't set up this way, i can set up a canvas
            		//and set it to invisible first 

            		setTimeout(function(){
                    	$('#draw').css("visibility","hidden")
                    },100);
 					
 					setTimeout(function(){
                    	$('#mycanvas').css("visibility","visible")
                    },200);

                    // $('#mycontainer').fadeout(100); //why is this not working?
                    // $('#mycanvas').fadein(200);

 					});
        });

// creatCanvas= function setup() {
//  var canvas=createCanvas(600,300);
//  canvas.parent('mycontainer');
//  background(0);
//  }

 function draw(){
 	strokeWeight(4);
	stroke(255,100);
 	line(mouseX, mouseY, pmouseX, pmouseY);
 }



