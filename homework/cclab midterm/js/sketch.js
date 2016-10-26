var color = $(".selected").css("background-color");


function setup() {
    var canvas = createCanvas(600, 290);
    canvas.parent('canvasWrapper');
    background(68, 61, 52);
    //   loadImage("img/frame.png", function(img) {  //can only load the image with local server
    //   image(img, 0, 0);
    // });

    var frame = document.createElement("img"); //why if I include this in a function called loadFrame, it wont run?
    frame.id = "myFrame"
    frame.src = 'img/frame.png';
    frame.setAttribute("height", "650");
    frame.setAttribute("width", "800");
    frame.setAttribute("alt", "Frame");
    frame.style.zIndex = -1;
    frame.style.position = "absolute";
    frame.style.top = 0;
    frame.style.left = 230;
    $("#frameWrapper").append(frame);
}

//When clicking control list items
$("#stage").on("click", "li", function() {
    //deselect sibling elements
    $(this).siblings().removeClass("selected");
    //select clicked element
    $(this).addClass("selected");
    //cache current color here
    color = $(".selected").css("background-color");
    console.log("selected color = " + color);
});

//When "New Color" is pressed
$("#revealColorSelect").click(function() {
    //show or hide color select
    changeColor();
    $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    var a = $("#alpha").val() / 100;

    $("#newColor").css("background-color", "rgba(" + r + "," + g + "," + b + "," + a + ")");
    console.log($("#newColor").css("background-color"));

}

//When color sliders change
$("input").change(changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function() {
    //append the color to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $("#stage ul").append($newColor);
    //select the new color
    $newColor.click();
});


//When remove color is clicked
$("#removeColor").click(function() {
    $(".selected").hide();
});

function draw() {
    //clear the canvas
    $("#clear").click(function() {
        console.log("test");
        clear();
    });

}


function mouseDragged() {
    strokeWeight(10);
    stroke(color);
    line(mouseX, mouseY, pmouseX, pmouseY);

    var audio = document.getElementById('sound');
    audio.play();

}




//Experimenting 

// var myWrapper=document.getElementById("canvasWrapper");
// var isDragging=false;

// myWrapper.addEventListener('mousedown', function() {
//   isDragging=false;
// });

// myWrapper.addEventListener('mousemove', function() {
//   isDragging=true;
//   if(isDragging){
//     var audio=document.getElementById('sound');
//     audio.play();
//   }
// });

// myWrapper.addEventListener('mouseup', function() {
//   isDragging=false;
//   if(isDragging){
//     var audio=document.getElementById('sound');
//   audio.pause();
//   }
// });






// var isDragging = false;
// $("#canvasWrapper")
// .mousedown(function() {
//     isDragging = false;
// })
// .mousemove(function() {
//     isDragging = true;
//  })
// .mouseup(function() {
//     var wasDragging = isDragging;
//     isDragging = false;
//     if (wasDragging) {
//         var audio=$("#sound");
//         audio.play();
//     }
// });
