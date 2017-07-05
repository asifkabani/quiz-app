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
    question: "What is a pog?",
    choices: ["A pig", "Pollen Smog", "Music genre", "Piece in a game played"],
    correct: "3"
  },
  {
    question: "What was the top grossing film of the 1990's?",
    choices: ["Titanic", "Forrest Gump", "Independence Day", "Home Alone"],
    correct: "3"
  },
  {
    question: "NASA’s Hubble Space Telescope was launched in 1990 on what space shuttle?",
    choices: ["Challenger", "Discovery", "Atlantis", "Endeavor"],
    correct: "1"
  },
  {
    question: "Who did former President Bill Clinton have an affair with?",
    choices: ["His Wife", "Monica Lewinsky", "Brooke Shields", "Ann Kelly"],
    correct: "1"
  },
  {
    question: "Which person from Friends was known for their sarcastic behavior?",
    choices: ["Phoebe", "Chandler", "Ross", "Rachel"],
    correct: "0"
  },
  {
    question: "What was the name of the early instant messenger service?",
    choices: ["Netscape Navigator", "Safari", "Google Chat", "AIM"],
    correct: "3"
  },
  {
    question: "Who was known as The Dream in NBA?",
    choices: ["Johnson", "Hakeem", "Hubert", "Lebrone"],
    correct: "1"
  },
  {
    question: "Who plays the lead role in Home Alone?",
    choices: ["Macaulay Culkin", "Bruce Jenner", "Sean Penn", "Christopher Walken"],
    correct: "0"
  },
  {
    question: "In Wayne's World, who is Wayne's best friend?",
    choices: ["Jamey", "Winston", "Garth", "Samson"],
    correct: "2"
  }
]

// Global variable to copy the original into to work from.
var arrayCopy = [];
// Global variable to hold the current question object.
var questionObj = {};
// Global variable to hold the question text.
var questionText = "";
// Global variable to hold the correct answer.
var correctAnswer = "";
// Global variable to hold the answer choices array of items.
var answerChoices = [];
// Global variable to hold the answer choices array of index.
var answerChoicesIndex = [];
// Global variable to hold the question count.
var questionCounter = 0;
// Global variable to hold the score count.
var scoreCounter = 0;


// From the array, get a copy of the original array and push it into the
// arrayCopy to work from.
var copyArray = function() {
	var getOrigArr = quizQuestions.slice();
	return arrayCopy = getOrigArr;
};

// From the current arrayCopy, get the object in the 1st position and put it into
// questionObj.
var getQuestionObject = function() {
	var getObj = arrayCopy.splice(0, 1);
	return questionObj = getObj[0];
};

// From the questionObj, get the question and show it on the page.
var getQuestion = function() {
  var getObj = questionObj.question;
  return questionText = getObj;
};

// From the questionObj, get the correct answer and set it as correctAnswer.
var getCorrectAnswer = function() {
  var getObj = questionObj.correct;
  return correctAnswer = getObj;
};

// From the questionObj, get the choices array and put it into
// answerChoices array.
var getAnswerChoices = function() {
  var getObj = questionObj.choices;
  return answerChoices = getObj;
};

// From the answerChoice array, push the index of each item into the
// answerChoicesIndex to check against the correct answer.
function getAnswerChoicesIndex() {
  answerChoicesIndex = [];
  var getObj = questionObj.choices;
  return getObj.map(function(item, index) {
    answerChoicesIndex.push(index);
    return answerChoicesIndex;
  });
}

// From the answerChoices array, render the item into the the page and
// create the radio buttons using the item and index of each. Value of
// input will be used to check against the correct answer.
function showRadioButtons() {
  var getObj = answerChoices;
  var clearRadio = $('#js-radio').text("");
  return getObj.map(function(item, index) {
    return $('#js-radio').append(
      '<label for="' + item + '">' + item + '</label>' +
      '<input class="form-check-input" type="radio" name="answer-choice" value="' +
      index + '"><br>'
    );
  });
}

// Check if the radio button input is selected or not. If it is not, alert
// the user, if it is run the checkAnswer function.
function isInputSelected() {
  // If the radio button is filled in do something, else do something else.
  // Note: the length of 0 is an unfilled choice in a radio button.
  if (!$('input[name=answer-choice]:checked').length > 0) {
    swal(
      'Don\'t know? Or just not trying hard enough!',
      'Please choose an option from the choices.',
      'warning'
    )
  } else {
    checkAnswer();
  }
}

// Check to see if the user has selected the correct answer or not.
function checkAnswer() {
  // Get the value of the answer the user selected.
  var selectedChoice = $('input[name=answer-choice]:checked').val();
  // Get the correct answer in a variable.
  var correctAnswerChoice = answerChoices[correctAnswer];
  // If the answer is correct, give them a point using addPoint.
  if (selectedChoice === correctAnswer) {
    // If user is correct, add a point to the score.
    swal(
      'You are correct!',
      '"' + correctAnswerChoice + '"' + ' is the correct answer!',
      'success'
    )
    addPoint();
    // Disable all inputs and enable next button.
    nextQuestionButton();
    getQuestionObject();
    getQuestion();
    getCorrectAnswer();
    getAnswerChoices();
    getAnswerChoicesIndex();
  } else {
    swal(
      'Wrong Answer',
      'Sorry, the correct answer is "' + correctAnswerChoice + '".',
      'error'
    )
    // Disable all inputs and enable next button.
    nextQuestionButton();
    getQuestionObject();
    getQuestion();
    getCorrectAnswer();
    getAnswerChoices();
    getAnswerChoicesIndex();
  }
}

// Create a function to add a point if the user gets the correct answer.
// Create a global score counter.
function addPoint() {
  $('.js-score-count').text(scoreCounter);
  scoreCounter ++;
  $('.js-score-count').text(scoreCounter);
}

// Disable the submit button and enable the next button to get the next question.
function nextQuestionButton() {
  $('main').find('.js-submit').attr("disabled", true);
  $('.js-next').removeAttr('disabled');
  $('#js-radio').find('input[name=answer-choice]').attr('disabled', true);
}

// Clear the html elements for the next round of radio button inputs.
function clearRadioButtons() {
  return $('#js-radio').html("");
}

// Once the user gets to the next question, enable the submit button and the
// radio choices and disable the next button.
function disableQuestionButton() {
  $('main').find('.js-submit').attr("disabled", false);
  $('.js-next').attr('disabled', true);
}

// On run time hide the questions.
var hideQuestions = function() {
  $('.js-form').hide();
};

// On start quiz, hide the header and other elements.
function hideElements() {
  showQuestions();
}

// On startQuizButton, show the questions, and hide the intro.
function showQuestions() {
  $('header').hide();
  $('.js-form').show();
}

// Create a function to show the next question number.
function nextQuestionText() {
  questionCounter ++;
  $('.js-question-count').text(questionCounter);
}

function finishQuiz() {
  if (arrayCopy.length === 0) {
    swal({
      title: 'Results',
      text: 'You scored ' + scoreCounter + ' out of 10!',
      type: 'info',
      confirmButtonColor: '#f29200',
      confirmButtonText: 'Try Again?',
      allowOutsideClick: false
    }).then(function () {
      resetQuiz();
    })
  }
}

function resetQuiz() {
  location.reload();
}

// Event listener to start the quiz.
function starQuizButton() {
  $('header').find('.js-start').click(function(event) {
    event.preventDefault();
    // Get the question text.
    $('.js-question').text(questionText);
    // Hide the intro and show the question on the page.
    showQuestions();
    // Show the answer choices on the page.
    showRadioButtons();
    // Increment question counter.
    nextQuestionText();
  });
}

// Event listener for the submit button.
function submitButton() {
  $('.js-form').submit(function(event) {
    event.preventDefault();
    // Check if input is selected or not.
    isInputSelected();
  });
}

// Event listener for the next button.
function nextButton() {
  $('.js-next').click(function(event) {
    // Increment question counter.
    nextQuestionText();
    // Show the next question
    $('.js-question').text(questionText);
    showRadioButtons();
    disableQuestionButton();
    finishQuiz();
  });
}

function runQuiz() {
  copyArray();
  getQuestionObject();
  getQuestion();
  getCorrectAnswer();
  getAnswerChoices();
  getAnswerChoicesIndex();

  starQuizButton();
  submitButton();
  nextButton();
}

(function(){
  hideQuestions();
  runQuiz();
})();

// To Do:
// - After last question, user can start a new game.
// - If time permits, try to save their score and show it on the page
//   using local storage caching HTML5.
