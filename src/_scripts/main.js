// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import YouTubeIframeLoader from 'youtube-iframe';
$(function() {
  if (/Android|iPad|iPhone|iPod|Windows Phone/i.test(navigator.userAgent)) {
    // Sorry mobile users, detecting autoplay videos is annoyingly hard.
    $('.disclaimer').remove();
  } else {
    var videos = ['T4iAnZHsZVM', 'F-oi62m6pdY', 'R9BFVLYqzrk', 'UBcR7tHa9jw', 'kbtYSxX9cT8', '0e5ZiSYSnzA'];
    $('#youtube').css('opacity', 0);
    if (window.location.href.indexOf('dance') >= 0) {
      videos = ['uFO4Riu5DjU'];
    }
    YouTubeIframeLoader.load(function (YT) {
      var player = new YT.Player('youtube', {
        //videoId: videos,//[Math.floor(Math.random() * videos.length)], // YouTube Video ID
        //playlist: videos,
        width: 1066,               // Player width (in px)
        height: 600,              // Player height (in px)
        playerVars: {
          playlist: videos,
          autoplay: 1,        // Auto-play the video on load
          controls: 0,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            e.target.mute();
            e.target.playVideo();
            function checkIfVideoPlaying() {
              if (player.getPlayerState() === 1) {
                $('#youtube').css('opacity', 1);
              } else {
                setTimeout(checkIfVideoPlaying, 100);
              }
            }
            checkIfVideoPlaying();
          }
        }
      });
    });
  }
});
/*

     */


/*
import Link from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  // console.log('Welcome to Yeogurt!');
});
*/
