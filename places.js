$(document).ready(function(){

//Animate the things.html h1 tag
$("#places h1").animate(
{ fontSize: "275%", opacity: 1, left: 0 },
2000
); //end  animate
$("#topnav a").hover(
	function(){
		this.style.color = "grey";
	},
	function() {
		this.style.color = "white";
	}
);

$("#accordion").accordion({
	event: "mouseover",
	heightStyle: "content",
	collapsible: true
});


});//end ready