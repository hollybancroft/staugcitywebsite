//Holly Bancroft
//Seminole State College
//COP2831
//Professor Rebekah Rosario

$(document).ready(function(){

//Animate the history.html h1 tag
$("#history h1").animate(
{ fontSize: "275%", opacity: 1, left: 0 },
2000
);//end animate

//Animate the things.html h1 tag
$("#things h1").animate(
{ fontSize: "275%", opacity: 1, left: 0 },
2000
); //end  animate

$("#events h1").animate(
{ fontSize: "275%", opacity: 1, left: 0 },
2000
); //end  animate
$("#gettinghere h1").animate(
{ fontSize: "275%", opacity: 1, left: 0 },
2000
); //end  animate

// Menu items change color when mouse hovers over the menu items
$("#topnav a").hover(
	function(){
		this.style.color = "grey";
	},
	function() {
		this.style.color = "white";
	}
);
$("#sidenav a").hover(
	function(){
		this.style.color = "grey";
	},
	function() {
		this.style.color = "white";
	}
);
$(".page h3 a").hover(
	function(){
		this.style.color = "grey";
	},
	function(){
		this.style.color =  "white";
	}
);

// history.html feature
var showingText;

$(".first-column").click(function(){
	if(!showingText){
	$(".second-column").show();
	 showingText = true;
	}
	else if(showingText = true){
		$(".second-column").hide();
		showingText = false;
	}
});

$("#signup_form").submit(
	function(event){
		var isValid = true;
		
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		var email = $("#email").val().trim();
		if (email == ""){
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if( !emailPattern.test(email) ) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else{
			$("#email").next().text("");
		}
		$("#email").val(email);
		
		var first_name = $("#first_name").val().trim();
		if (first_name == ""){
			$("#first_name").next().text("This field is required.");
			isValid = false;
		} else{
			$("#first_name").next().text("");
		}
		$("#first_name").val(first_name);
		
		var last_name = $("#last_name").val().trim();
		if (last_name == ""){
			$("#last_name").next().text("This field is required.");
			isValid = false;
		} else{
			$("#last_name").next().text("");
		}
		$("#last_name").val(last_name);
		
		if (isValid == false){event.preventDefault();}
	}


);


}); //end ready

window.onload = function() {

	// Image slideshow under things-sights.html
var listNode = document.getElementById("image_list");
var imageNode = document.getElementById("image");

var links = listNode.getElementsByTagName("a");
//Process image links
var i, linkNode, image;
var imageCache = [];
for(i =0; i < links.length; i++ ) {
	linkNode = links[i];
	// Preload images
	image = new Image();
	image.src = linkNode.getAttribute("href");
	imageCache[imageCache.length] = image;
	
}
var imageCounter = 0;
var timer = setInterval(
	function() {
		imageCounter = (imageCounter + 1) % imageCache.length;
		image = imageCache[imageCounter];
		imageNode.src = image.src;
		
	},
	3000);

}; // end function

