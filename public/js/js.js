
//IBM Cloud Video Embed API instance
/*globals UstreamEmbed */
/*eslint-env jquery */
var embedApi = UstreamEmbed('UstreamPlayer');
//video duration will be stored in this variable
var videoDuration = 0;
//we will query the progress with an interval, we store it to be able to cancel it any time
var progressInterval = false;

var seekbarElement = document.querySelector('seekbar');
var seekProgressElement = document.querySelector('seekbar progress');
var volumeElement = document.querySelector('volume');
var currentTimeElement = document.querySelector('.curentTime');
var durationElement = document.querySelector('duration');

/**
 * API Methods
 */

// PLAY
document.querySelector('play').addEventListener('click', function () {
  embedApi.callMethod('play');
});

// PAUSE
document.querySelector('pause').addEventListener('click', function () {
  embedApi.callMethod('pause');
});

//VOLUME
document.querySelector('volume').addEventListener('click', function (e) {
  //Calculate the desired volume based on the click event position (this is just an example solution)
  var volumePercentage = e.offsetX / volumeElement.offsetWidth * 100;

  embedApi.callMethod('volume', volumePercentage);
  document.querySelector('volume c dslider').style.width = volumePercentage + '%';
});

// SEEK
seekbarElement.addEventListener('click', function (e) {
  //Calculate the desired progress based on the click event position (this is just an example solution)
  var progressPercentage = e.layerX / seekbarElement.offsetWidth;

  embedApi.callMethod('seek', videoDuration * progressPercentage);
});

/**
 * API Events
 */

//duration is needed to calculate % progress
embedApi.addListener('duration', function (eventType, duration) {
  videoDuration = duration;

  durationElement.innerHTML = formatTime(videoDuration);
});

//this is not mandatory, but its unnecessary to query the progress when the playback is stopped.
embedApi.addListener('playing', function (eventType, playing) {
  if (playing) {
    startProgressInterval();
  } else {
    stopProgressInterval();
  }
});

// Progress is not fired with an event from the player because of performance optimization purposes
// you have to query it with the interval you like.
function startProgressInterval() {
  stopProgressInterval();

  progressInterval = setInterval(function () {
    embedApi.getProperty('progress', function (progress) {
      updateSeekbar(progress);
    });
  }, 200);
}

function stopProgressInterval () {
  clearInterval(progressInterval);
}

function updateSeekbar (progress) {
  if (!videoDuration) return;

  seekProgressElement.style.width = (progress / videoDuration) * 100 + '%';
  currentTimeElement.innerHTML = formatTime(progress);
}

//format seconds to hh:mm:ss
function formatTime (sec) {
  var time = new Date(sec * 1000),
      hour = 60*60;

  time = time.toISOString();
  time = time.substr(11, 8);
  if (+sec < hour) {
    time = time.substr(3);
  }

  if (+sec > 24*hour) {
    time = Math.floor(sec / hour) + time.substr(2);
  }

  return time;
}

//nav fix top when scroll
$(document).ready(function() {
  var $navbar = $("#mNavbar");
  
  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
      AdjustHeader();
  });
  
  function AdjustHeader(){
    if ($(window).scrollTop() > 60) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
    }
  }
});



//firebase 
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not want to serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('/__/firebase/4.1.3/firebase-app.js');
importScripts('/__/firebase/4.1.3/firebase-messaging.js');
importScripts('/__/firebase/init.js');

firebase.messaging();

//password
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;