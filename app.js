$(document).ready(function(){
	var list = 0;
	var count = 100;
	for (var i = 0; i < count; i++){ 
		
		if(i % 3 ==0){
			$(".box").append("fizz");
		}
		else if(i % 5 == 0){
			$(".box").append("buzz");
		}
		else if(i % 5 == 0 && i % 3 ==0 ){
			$(".box").append("fizzbuzz");
		}

		console.log(count);
		print(count);
	};
	

});