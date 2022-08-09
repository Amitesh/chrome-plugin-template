chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // NOTE : console log is not showing.
    alert('Hello from background.js \n' + JSON.stringify(request));
  }
);