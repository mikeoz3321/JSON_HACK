$(document).ready(function(){
	var ajaxOptions = {
	  url: 'http://data.unhcr.org/api/instances/show.jsonp?id=syria',
	  dataType: 'jsonp',
	  
	};

// Initiate the request!
$.ajax(ajaxOptions);

	$("#submit").click(function(){
		alert("Yup");
		return false;
	})

})