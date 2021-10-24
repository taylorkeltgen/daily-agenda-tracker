var currentDayEl = document.querySelector('#currentDay');
// Time Blocks
var nineEl = document.querySelector('#nineText');
var tenEl = document.querySelector('#tenText');
var elevenEl = document.querySelector('#elevenText');
var twelveEl = document.querySelector('#twelveText');
var oneEl = document.querySelector('#oneText');
var twoEl = document.querySelector('#twoText');
var threeEl = document.querySelector('#threeText');
var fourEl = document.querySelector('#fourText');
var fiveEl = document.querySelector('#fiveText');

var today = moment().format('dddd, MMMM Do');


// Set Current Date in Jumbotron
currentDayEl.textContent = today;

var getCurrentTime = function(){
    var currentHour = moment().hour();
    console.log('Current hour: ' + currentHour);
    // 9AM Time Block
    if(9 < currentHour){
        nineEl.classList = 'past';
    } else if (9 > currentHour){
        nineEl.classList = 'future';
    } else{
        nineEl.classList = 'present';
    }
    // 10AM Time Block
    if(10 < currentHour){
        tenEl.classList = 'past';
    } else if (10 > currentHour){
        tenEl.classList = 'future';
    } else{
        tenEl.classList = 'present';
    }
    // 11AM Time Block
    if(11 < currentHour){
        elevenEl.classList = 'past';
    } else if (11 > currentHour){
        elevenEl.classList = 'future';
    } else{
        elevenEl.classList = 'present';
    }
    // 12PM Time Block
    if(12 < currentHour){
        twelveEl.classList = 'past';
    } else if (12 > currentHour){
        twelveEl.classList = 'future';
    } else{
        twelveEl.classList = 'present';
    }
    // 1PM Time Block
    if(13 < currentHour){
        oneEl.classList = 'past';
    } else if (13 > currentHour){
        oneEl.classList = 'future';
    } else{
        oneEl.classList = 'present';
    }
    // 2PM Time Block
    if(14 < currentHour){
        twoEl.classList = 'past';
    } else if (14 > currentHour){
        twoEl.classList = 'future';
    } else{
        twoEl.classList = 'present';
    }
    // 3PM Time Block
    if(15 < currentHour){
        threeEl.classList = 'past';
    } else if (15 > currentHour){
        threeEl.classList = 'future';
    } else{
        threeEl.classList = 'present';
    }
    // 4PM Time Block
    if(16 < currentHour){
        fourEl.classList = 'past';
    } else if (16 > currentHour){
        fourEl.classList = 'future';
    } else{
        fourEl.classList = 'present';
    }
    // 5PM Time Block
    if(17 < currentHour){
        fiveEl.classList = 'past';
    } else if (17 > currentHour){
        fiveEl.classList = 'future';
    } else{
        fiveEl.classList = 'present';
    }
};

getCurrentTime();