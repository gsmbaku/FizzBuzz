$(document).ready(function(){
 	var count = parseInt(prompt("Enter a number: "));
	for (var i = 1; i < count; i++){ 
		
		if(i % 3 == 0 && i % 5 == 0){
			$(".box").append("<p>fizzbuzz</p>");
		}
		else if(i % 5 == 0){
			$(".box").append("<p>buzz</p>");
		}
		else if(i % 3 ==0 ){
			$(".box").append("<p>fizz</p>");
		} else {
			$(".box").append("<p>"+i+"</p>");
		}
	};

});
