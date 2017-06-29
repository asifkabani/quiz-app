# Quiz App - Do You Know the 90's?
```
Hight Level:
-User starts on a screen where they click a button to start
the quiz.
-Give user 10 questions with 4 choices each.
-User can only view one question at a time.
-User can't skip questions.
-User should see what question they are on (7-10) and their current score
(5 correct, 2 incorrect).
-When a user submits an answer to a question, they should get feedback
if answer was correct or not. If incorrect, show correct answer.
Then move on to the next question.
-After the use has completed final question, they should be shown
their overall score (how many questions they got right, out of total
questions asked) and be able to start a new game.

Low Level:
* Create a global variable to hold an array called 'quizQuestions'.
* This array will hold objects with keys per question, choices, correct answer.
* The question value will hold the question in a string.
* The choices value will hold an array of items, which are strings
  for choices to choose from for the correct answer.
* The correct key will hold the correct answer as the value. The value is the
  item in the choices array which is the correct answer.
* When user clicks start, hide the start button and show the first
  question, the choices for the answers, and the submit and next buttons.
  * Create a function to get the question.



* Loop through the questions array and grab the first object.
* Grab the question from the object and put it in a variable.
* Show this variable's value on the page.
* Grab the choices from the object and put them in variables.
* Show this variables's values on the page inside radio button.


* Show the value of the variable on the page.
* Within the same function, grab the choices values and show them on the page,
  each as a radio button item.
* Put the value of the correct choice inside a variable.
* Create a function which will compare the radio choice the user selects with the
  correct answer.
* If it is correct, show them an approval message, if not show them the denial
  message with the correct choice highlighted.


* When the user clicks on the start button:
  * Create a function to show the first question to the user.
    * Loop through the questions array and get the first object.
    *


  * Create a function to check if the quiz has started called 'inProgress'.
    * The function will check to see if the start button has been clicked.
      If it has been clicked, do nothing, if it has not been then start the
      quiz by getting the first set of questions, choices and hide the start button.




  * From this variable, get the value of the 'question' key and put it
    inside a variable 'getQuestionText'.
  * Target HTML element using class 'js-question' and show the text inside it.
  * Create a function to put the choices inside radio buttons, called
    'createRadioButtons'. This will have one parameter of items.
  * This function will