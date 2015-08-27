$(document).ready(function(){
	$('.btn-test').click(function(){
		alert('Hey cool plugin! \nHow are you?');
		sayHi();
		return true;
	});
});

function sayHi(){
	// Send Message to active tab page's content.js
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action:'one', from: "popup", message: 'Hi page'}, function(response) {
          console.log(response.from, ':', response.message);
      });
  });

  //Send message to background.js
  chrome.runtime.sendMessage({action:'haha', from: "popup", message: 'hehehe'}, function(response){
		console.log(response.from, ':', response.message);
	});
}

function iAmGood(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action:'three', from: "popup", message: 'I am good.'}, function(response) {
          console.log(response.from, ':', response.message);
      });
  });
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.action == 'two'){
			console.log(request.from, ':', request.message);
			iAmGood();
		}else if(request.action == 'four'){
			console.log(request.from, ':', request.message);
			sendResponse({from: "popup", message: 'Sure'});
		}
});

