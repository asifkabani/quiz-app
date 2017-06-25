'user strict';

// Create questions array with each question as an object, which holds each
// question, choices of answers which is an array, and the correct answer.
var quizQuestions = [
  {
    question: "Which Disney movie did NOT debut in the 90's?",
    choices: ["Tarzan", "Beauty & the Beast", "The Little Mermaid", "The Lion King"],
    correct: "2"
  },
  {
    question: "Question2",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "1"
  },
  {
    question: "Question3",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "2"
  },
  {
    question: "Question4",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "3"
  },
  {
    question: "Question5",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "4"
  },
  {
    question: "Question6",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "4"
  },
  {
    question: "Question7",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "3"
  },
  {
    question: "Question8",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "2"
  },
  {
    question: "Question9",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "1"
  },
  {
    question: "Question10",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correct: "4"
  }
]

// From the array, get a copy of the original array.
var getObj = function() {
  return quizQuestions.slice();
};

// Use splice to get the first object and return the array length.
var arraySplice = function(obj) {
  return obj.splice(1);
}
console.log(arraySplice(getObj()))

// To get the next question in the list, keep a counter on the splice.
var nextQuestionCount = 0;
var nextSplice = function() {
  return nextQuestionCount ++;
}
console.log(nextSplice(arraySplice(getObj())))

// From the current object, pull the current first object.
var getFirstObj = function(obj) {
  return obj.shift();
};
console.log(getFirstObj(arraySplice(getObj())))

// From the current object, get the question.
var getQuestion = function(obj) {
  return obj.question;
};
console.log(getQuestion(getFirstObj(getObj())))

// Target the element to show the question inside.
var showQuestion = function(question) {
  $('.js-question').text(question);
};

// From the current object, get the correct answer.
var getCorrectAnswer = function(obj) {
  return obj.correct;
};
console.log(getCorrectAnswer(getFirstObj(getObj())))
// From the current object, get the value of the answer key, which is an array
// of items.
var getAnswerChoices = function(obj) {
  return obj.choices;
};

// Create radio buttons by taking the array and for each item in the array, map
// the item and it's index position in the array. On the parent element, append
// the created elements. Item in places as needed for the name values, and the
// index as the specific 'value' in the radio input element.
function createRadioButtons(array) {
  return array.map(function(item, index) {
    return $('#js-radio').append(
      '<label for="' + item + '">' + item + '</label>' +
      '<input class="radio-button" type="radio" name="answer-choice" value="' +
      index + '"><br>'
    );
  });
}

// Clear the html elements for the next round of radio button inputs.
function clearRadioButtons() {
  return $('#js-radio').html("");
}

// Get the index locations of each choice and return a modified array of them.
function getAnswerChoicesIndex(array) {
  return array.map(function(item) {
    return array.indexOf(item);
  });
}

// Check if the radio button input is selected or not.
function isInputSelected() {
  // If the radio button is filled in do something, else do something else.
  // Note: the length of 0 is an unfilled choice in a radio button.
  if (!$('input[name=answer-choice]:checked').length > 0) {
    alert("choose one")
  } else {
    checkAnswer();
  }
}

// Check to see if the user has selected the correct answer or not.
function checkAnswer() {
  // Get the correct answer.
  var correctAnswer = getCorrectAnswer(getFirstObj(getObj()));
  // Get the value of the answer the user selected. The value is a string
  // as the correct answer is also a string.
  var selectedChoice = $('input[name=answer-choice]:checked').val();
  // Check if the users choice is the correct answer. If it is add a point
  // to the score.
  if (selectedChoice === correctAnswer) {
    alert("correct")
    addPoint();
    nextQuestionButton();
  } else {
    alert("incorrect")
    nextQuestionButton();
  }
}

// Create a function to add a point if the user gets the correct answer.
// Create a global score counter.
var scoreCounter = 0;
function addPoint() {
  $('.js-score-count').text(scoreCounter);
  scoreCounter ++;
  $('.js-score-count').text(scoreCounter);
}

// Create a function to show the next question number.
// Create global question counter.
var questionCounter = 0;
function nextQuestionText() {
  $('.js-question-count').text(questionCounter);
  questionCounter ++;
  $('.js-question-count').text(questionCounter);
}

// Once the user gets a score, disable the submit button and the radio choices
// and enable the next button.
function nextQuestionButton() {
  $('main').find('.js-submit').attr("disabled", true);
  $('.js-next').removeAttr('disabled');
  $('#js-radio').find('input[name=answer-choice]').attr('disabled', true);
}

// Once the user gets to the next question, enable the submit button and the
// radio choices and disable the next button.
function disableQuestionButton() {
  $('main').find('.js-submit').attr("disabled", false);
  $('.js-next').attr('disabled', true);
}

// Create a function to hide the starting elements and show the questions.
function hideElements() {
  $('header').fadeOut('fast');
  showElements();
}

// Event listener to start the quiz.
$('header').find('.js-start').click(function(event) {
  event.preventDefault();
  let getQuestionText = getQuestion(getFirstObj(getObj()))
  let getChoices = getAnswerChoices(getFirstObj(getObj()))
  showQuestion(getQuestionText) // show question on page
  createRadioButtons(getChoices) // create radio buttons on the page
  nextQuestionText();
});

// Event listener for the submit button.
$('.js-form').submit(function(event) {
  event.preventDefault();
  // Run the function isInputSelected.
  isInputSelected();
});

// Event listener for the next button.
$('.js-next').click(function(event) {
  event.preventDefault();
  let getObjAgain = getFirstObj(arraySplice(getObj()));
  let getQuestionText = getQuestion(getObjAgain);
  let getChoices = getAnswerChoices(getObjAgain)
  clearRadioButtons()
  showQuestion(getQuestionText) // show question on page
  createRadioButtons(getChoices) // create radio buttons on the page
  disableQuestionButton()

  console.log(getObjAgain)
  console.log(getQuestionText)
  console.log(getChoices)
});

// On run time hide the questions.
// (function hideQuestions() {
//   $('.hide').animate('opacity', 0);
// }());




// To Do:
// - On click of the next button need a counter. Because you start it initially
//   but when you click it again, it does nothing as it has already finished.
// - If answer is incorrect, show them the correct answer.
// - After the user submits their answer and everything happens, clicking
//   on Next button will progress to the next question.
// - After last question, show user overall score how many they got right
//   out of total questions asked.
// - After last question, user can start a new game.
// - If time permits, try to save their score and show it on the page
//   using local storage caching HTML5.
