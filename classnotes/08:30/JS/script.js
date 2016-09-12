document.addEventListener("DOMContentLoaded", function () {
	var colorPool = ["#B2FFE9", "#B2BFFC", "#F26969"];
	var seconds =0;

	var parentDiv = document.getElementsByClassName("blockContainer");
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var div3 = document.getElementById("div3");


	div1.style.backgroundColor = "#000";
	div2.style.backgroundColor = "#000";
	div3.style.backgroundColor = "#000";

	setInterval(function(){
		seconds+=1;
		// console.log(seconds);
		parentDiv[0].style.transform="rotate("+ seconds*90+"deg)";
		parentDiv[0].style.WebkitTransform="rotate(90 "+ seconds*90 +" deg)";

		div1.style.backgroundColor = colorPool[0];
		div2.style.backgroundColor = colorPool[1];
		div3.style.backgroundColor = colorPool[2];

		temp=colorPool[0];
		colorPool.shift();
		colorPool.push(temp);

	},1000);

});
