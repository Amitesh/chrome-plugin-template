
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "one"){
    		console.log(request.from, ':', request.message);
        sendResponse({from: "content", message: 'Hi popup'});
        howAreYou();
    }else if (request.action == "three"){
    		console.log(request.from, ':', request.message);
        sendResponse({from: "content", message: 'Great'});
        letsMeet();
    }
});

function howAreYou(){
	//Broadcast message to all listener (popup.js and background.js)
	chrome.runtime.sendMessage({action:'two', from: "content", message: 'How are you?'}, function(response){
		console.log(response.from, ':', response.message);
	});
}

function letsMeet(){
	//Broadcast message to all listener (popup.js and background.js)
	chrome.runtime.sendMessage({action:'four', from: "content", message: 'Let\'s go for coffee'}, function(response){
		console.log(response.from, ':', response.message);
	});
}