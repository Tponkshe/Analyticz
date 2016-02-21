 function statusChangeCallback(response) {

    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.VENMO
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    console.log("first")
  FB.init({
    appId      : '833302503463467',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use version 2.2
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

 // FB.getLoginStatus(function(response) {
   // statusChangeCallback(response);
  //});

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    console.log("second");
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {

        console.log(response);
        console.log('Successful login for: ' + response.name);
        setCookie("Email", response.id);
        setCookie("Name", response.name);
        var url = "";
        var resp = httpGet(url, response.id);
        if (resp == 1) {
            // window.location.href = "page2.html";
        }
        else {
            var fbButton = document.getElementById("fbButton");
            // fbButton.remove();
            
        }

        //var url = "http://104.131.244.218/users?";
        //var response = httpPost(url,  response.name, response.id);
        //window.location.href = "page2.html";
        //document.getElementById('status').innerHTML =
        //'Thanks for logging in, ' + response + '!';

    });

    
  }

  function httpGet(url, id){
      var url = "http://104.131.244.218/isduplicate?fbid=" + id;
      return httpGet2(url);
  }

function httpGet2(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
};

  function httpPost(theUrl, theUsername, theEmail, theVenmoId, phone)
{
    var xhr = new XMLHttpRequest();
    var params = "user%5Bname%5D=" + theUsername + "&user%5Bemail%5D=" + theEmail + "&user%5BvenmoId%5D=" + theVenmoId + "&user%5Bphone%5D="+phone;
    window.alert(params);
	xhr.open('POST', theUrl + params, true);
	xhr.send(params);
    return xhr.responseText;
};

  function setCookie(name, val){
    var cookieName = name;
    var cookieValue = val;
    document.cookie = cookieName +"=" + cookieValue +";path=/"; 

}