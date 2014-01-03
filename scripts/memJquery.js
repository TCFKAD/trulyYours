// JavaScript Document
var letterbox = new Array();
var loading = true;
//alert("The spcript works!");
var loadBox = $(function(){
	var $letterL = $("<div class=\"leftLetter\"> </div>");	
	var $letterR = $("<div class=\"rightLetter\"> </div>");	
	letterBox.push($letterL);
	letterBox.push($letterR);
	alert(letterBox.length);
});
	
var addToPage = $(function( letters ){
	do{
		$(letterFed).append(letters.pop());	
	}while ((letters.length != 0)&&(loading))
});

alert("The spcript works!");
loadBox();
addToPage(letterBox);