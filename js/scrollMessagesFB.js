a = document.getElementsByClassName("uiScrollableAreaContent");
a = a[2];
window.setInterval(function () {
	a.scrollIntoView();
}, 1000);
