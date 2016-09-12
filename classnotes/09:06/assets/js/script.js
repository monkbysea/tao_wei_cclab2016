var replies = ["Yes", "No", "How should I know?", "Feed me and then I'll tell you.", "Maaaaybe."]; // list of replies, order must correspond with the right sound file
var sounds = ["yes", "no", "how", "feedme", "maybe"]; // name of sound files
var eyes = ["eyes", "eyes2", "eyes3", "eyes4", "eyes5", "eyes", "eyes7" ]; // name of image files for eyes
var randomNum = 0; // this variable will hold the current randomized number to pull from the replies array
var randomEyes = 0; // variable that holds random number to pull a new eye expression, separate variable because the amount of eyes exceed the amount of replies
var audioElement;

$(document).ready(function(){
	init();
});

function init(){
	console.log("Hello Duck");
	audioElement=document.createElement('audio');
	audioElement.setAttribute('autoplay','autoplay');
	$('#submit').click(function(){
		answerQuestion();
	})

};

function answerQuestion(){
	randomNum=randomNumGenerator(replies);
	console.log("random reply:"+randomNum);
	$('#speech').text(replies[randomNum]);
	playSounds(randomNum);
	
	randomEyes= randomNumGenerator(eyes);
	$('#eyes').css("background","url('assets/img/"+eyes[randomEyes]+".png') no-repeat");
	$('#eyes').css("background-size","100% auto");
}

function playSounds(val){
	audioElement.setAttribute('src',"assets/sound/"+sounds[val]+".mp3");
	audioElement.play();
};

function randomNumGenerator(arrayName){
	return Math.floor(Math.random()*arrayName.length);
};




