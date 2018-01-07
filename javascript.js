
	document.querySelectorAll('button').forEach(function(button) {

		button.addEventListener('click', function(){
	    var param1 = [];
	    var param2 = [];
	    var param3 = [];
	    this.parentNode.querySelectorAll('h3').forEach(function(values) {
	    	param1.push(values.innerText);
	    });
	   	this.parentNode.querySelectorAll('ul li').forEach(function(values2) {
	    	param2.push(values2.innerText);
	    });
	   	this.parentNode.querySelectorAll('p').forEach(function(values3) {
	    	param3.push(values3.innerText);
	    });
		console.log(param1 +' ' + param2 + ' Price: ' + param3);
		});
	});
