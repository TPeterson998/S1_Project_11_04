"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Trent Peterson
      Date:   2.14.19

   Filename:   ph_clock.js     

*/
// This is my varaibles
// sets minutes 
var minsLeft = 30;
// sets seconds
var secsLeft = 0;
// this Finds the time left in seconds
var timeLeft = ((minsLeft * 60) + secsLeft);
// This calls the function in and sets it to go for every second
var clockID = setInterval("Countdown()", 1000);
// This is the function that has the clock go down every second by redefining the mins and secs minus one sec
function Countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - (60 * minsLeft);
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    document.getElementById("minutes").innerHTML = minsString;
    document.getElementById("seconds").innerHTML = secsString;
    checkTimer()
    timeLeft--;
}
// This is the function that is called in countdown and it makes it so when the countdown ends it will add in some text and stop the count down
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', '<br /> (Order Expired)');
    clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}