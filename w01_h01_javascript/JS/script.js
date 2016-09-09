//FIRST TRY
// document.getElementById("about").onclick = function() {onClick()};
// // document.getElementById("about").onmouseout = function() {mouseOut()};

// function onClick() {
//     document.getElementById("sub-about").style.display = "block";
    
// function mouseOut() {
//     document.getElementById("sub-about").style.display= "none";
// }


//SECOND TRY
// var item = document.getElementById("about");
// item.addEventListener("mouseover", func, false);
// item.addEventListener("mouseout", func1, false);

// function func()
// {  // not needed since item is already global, 
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button"); 
//    item.setAttribute("style", "background-color:blue;")
// }

// function func1()
// {  
//    item.setAttribute("style", "background-color:green;")
// }

//THIRD TRY
// document.getElementById('about').onclick= function(){flyout()};
// function flyout(){
// 	document.getElementById('sub-about').classList.add.("show");
// }