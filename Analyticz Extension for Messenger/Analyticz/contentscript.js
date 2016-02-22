// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var loading = 2;
var init = 1;
var current = init;
var timerId;
var count =0;

var youMsgLen = 0;
var theirMsgLen = 0;
function updateIcon() {
  	count =0;
    a = document.getElementsByClassName("uiScrollableAreaContent");
	a = a[2];
	timerId = window.setInterval(runOften, 1000);
}
updateIcon();


function runOften(){
		count +=1;
		console.log(count);
		a.scrollIntoView();

		if(count==40){
			runAnalytics();
		}
		if (count>40){
			clearInterval(timerId);
		}
}

function runAnalytics(){

	var yourMsgs = document.getElementsByClassName("_o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr").length;
	var theirMsgs = document.getElementsByClassName("_o46 _3erg _29_7 direction_ltr text_align_ltr").length;

	console.log("Total number of messages sent: " + yourMsgs);
	console.log("Total number of replies: " + theirMsgs);
	console.log(yourMsgs/theirMsgs);

	chrome.runtime.sendMessage({ "newIconPath" : "icon" + 1 + ".png" });

}
// chrome.browserAction.setIcon({path:"icon" + current + ".png"});

// updateIcon();



