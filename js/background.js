chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
	if( request.conexion == "aula" ){
		sendResponse({
			username: localStorage['aula_username'],
			password: localStorage['aula_password']
		});
	}else if( request.conexion == "siga" ){
		sendResponse({
			username: localStorage['siga_username'],
			mail 	: localStorage['mail'],
			password: localStorage['siga_password']
		});
	}else if( request.conexion == "moodle" ){
		sendResponse({
			username: localStorage['siga_username'],
			mail 	: localStorage['mail'],
			password: localStorage['siga_password']
		});
	}else if( request.conexion == "sg_industrias" ){
		sendResponse({
			username: localStorage['siga_username'],
			mail 	: localStorage['mail'],
			password: localStorage['siga_password']
		});
	}else if (typeof request.storeRedirect != "undefined") {
    	localStorage['redirect_url'] = request.storeRedirect;
  	}else if (typeof request.requestStoreRedirect != "undefined") {
    	sendResponse({
      		url: localStorage['redirect_url']
    	});
  	}
});