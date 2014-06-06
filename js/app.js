$(document).ready(function() {
	playFizzBuzz();
})

var playFizzBuzz = function() {
	var fizz = false;
	var buzz = false;
	for (var count = 1; count <= 50; count++){
		if (isFizzBuzz(count)) {
			showScore("Fizz Buzz");
		} else if (isFizz(count)){
			showScore("Fizz");
		} else if (isBuzz(count)) {
			showScore("Buzz");
		} else { 
			showScore(count)
		}
	}
}

var isFizz = function(number) {
	if(number % 3 == 0){
		return true;
	} else { return false; }
}

var isBuzz = function(number) {
	if(number % 5 == 0){
		return true;
	} else { return false; }
}

var isFizzBuzz = function(number) {
	if (isFizz(number) && isBuzz(number)) {
		return true;
	} else { return false; }
}
var showScore = function(score) {
	var newP = $("<span>" + score + ",\t" + "</span>");
	$('body').append(newP);
}