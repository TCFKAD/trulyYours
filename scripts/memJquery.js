// JavaScript Document
$( document ).ready(function() {
	letterBox = new Array();
	loading = true

	var loadBox = function( letterBox ){
		var $letterL = $("<div class=\"rightLetter\"> </div>");	
		var $letterR = $("<div class=\"leftLetter\"> </div>");	
		letterBox.push($letterL);
		letterBox.push($letterR);
	};
		
	var addToPage = function( letters ){
		do{
			$(letterFed).append(letters.pop());	
		}while ((letters.length != 0)&&(loading))
	};
	
	loadBox(letterBox);
	addToPage(letterBox);
});