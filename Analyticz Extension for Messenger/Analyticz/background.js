
chrome.browserAction.setIcon({path:"icon" + 1 + ".png"});
chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("messenger.com") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.browserAction.setIcon({path:"icon" + 2 + ".png"});
        chrome.tabs.executeScript(tab.id, {
            "file": "contentscript.js"
        }, function () { // Execute your code
        	// chrome.browserAction.setIcon({path:"icon" + 1 + ".png"});
            console.log("Script Executed .. "); // Notification on Completion
        });
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // read `newIconPath` from request and read `tab.id` from sender
        chrome.browserAction.setIcon({
            path:request.newIconPath ,
            tabId: sender.tab.id
        });
    });