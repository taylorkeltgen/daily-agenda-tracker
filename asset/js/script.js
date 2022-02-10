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

function agendaHandler() {
  //   event.preventDefault();

  var nineTextEl = document.querySelector('input[name="nineText"]').value.trim();
  console.log(nineTextEl);
  var tenTextEl = document.querySelector('input[name="tenText"]').value.trim();
  var elevenTextEl = document.querySelector('input[name="elevenText"]').value.trim();
  var twelveTextEl = document.querySelector('input[name="twelveText"]').value.trim();
  var oneTextEl = document.querySelector('input[name="oneText"]').value.trim();
  var twoTextEl = document.querySelector('input[name="twoText"]').value.trim();
  var threeTextEl = document.querySelector('input[name="threeText"]').value.trim();
  var fourTextEl = document.querySelector('input[name="fourText"]').value.trim();
  var fiveTextEl = document.querySelector('input[name="fiveText"]').value.trim();

  // Save Buttons
  var buttonNineEl = document.querySelector('#btnNine');
  var buttonTenEl = document.querySelector('#btnTen');
  var buttonElevenEl = document.querySelector('#btnEleven');
  var buttonTwelveEl = document.querySelector('#btnTwelve');
  var buttonOneEl = document.querySelector('#btnOne');
  var buttonTwoEl = document.querySelector('#btnTwo');
  var buttonThreeEl = document.querySelector('#btnThree');
  var buttonFourEl = document.querySelector('#btnFour');
  var buttonFiveEl = document.querySelector('#btnFive');

  var agenda = [
    {
      time: 9,
      content: nineTextEl,
    },
    {
      time: 10,
      content: '',
    },
    {
      time: 11,
      content: '',
    },
    {
      time: 12,
      content: '',
    },
    {
      time: 1,
      content: '',
    },
    {
      time: 2,
      content: '',
    },
    {
      time: 3,
      content: '',
    },
    {
      time: 4,
      content: '',
    },
    {
      time: 5,
      content: '',
    },
  ];

  return { agenda };
}

var today = moment().format('dddd, MMMM Do');
// Set Current Date in Jumbotron
currentDayEl.textContent = today;

var getCurrentTime = function () {
  var currentHour = moment().hour();
  // 9AM Time Block
  if (9 < currentHour) {
    nineEl.classList = 'past';
  } else if (9 > currentHour) {
    nineEl.classList = 'future';
  } else {
    nineEl.classList = 'present';
  }
  // 10AM Time Block
  if (10 < currentHour) {
    tenEl.classList = 'past';
  } else if (10 > currentHour) {
    tenEl.classList = 'future';
  } else {
    tenEl.classList = 'present';
  }
  // 11AM Time Block
  if (11 < currentHour) {
    elevenEl.classList = 'past';
  } else if (11 > currentHour) {
    elevenEl.classList = 'future';
  } else {
    elevenEl.classList = 'present';
  }
  // 12PM Time Block
  if (12 < currentHour) {
    twelveEl.classList = 'past';
  } else if (12 > currentHour) {
    twelveEl.classList = 'future';
  } else {
    twelveEl.classList = 'present';
  }
  // 1PM Time Block
  if (13 < currentHour) {
    oneEl.classList = 'past';
  } else if (13 > currentHour) {
    oneEl.classList = 'future';
  } else {
    oneEl.classList = 'present';
  }
  // 2PM Time Block
  if (14 < currentHour) {
    twoEl.classList = 'past';
  } else if (14 > currentHour) {
    twoEl.classList = 'future';
  } else {
    twoEl.classList = 'present';
  }
  // 3PM Time Block
  if (15 < currentHour) {
    threeEl.classList = 'past';
  } else if (15 > currentHour) {
    threeEl.classList = 'future';
  } else {
    threeEl.classList = 'present';
  }
  // 4PM Time Block
  if (16 < currentHour) {
    fourEl.classList = 'past';
  } else if (16 > currentHour) {
    fourEl.classList = 'future';
  } else {
    fourEl.classList = 'present';
  }
  // 5PM Time Block
  if (17 < currentHour) {
    fiveEl.classList = 'past';
  } else if (17 > currentHour) {
    fiveEl.classList = 'future';
  } else {
    fiveEl.classList = 'present';
  }
};

var saveAgenda = function () {
  localStorage.setItem('agendaText', JSON.stringify(agenda));
};

document.querySelector('button').addEventListener('click', () => {
  console.log('Hello');
});

getCurrentTime();
agendaHandler();
