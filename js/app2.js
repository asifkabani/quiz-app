'use strict';

(function( App ) {
  var quizApp = (function() {

    var questions = [
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
        correct: "2"
      },
      {
        question: "What the top selling ablum of the 1990's?",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correct: "3"
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
    ];

    return {
      // This is some boolean property
      bool: true,
      // Some string value
      string: "a string",
      // An array property
      array: [ 1, 2, 3, 4 ],
      // An object property
      object: {
        lang: "en-Us"
      },
      getData: function() {
        // get the current value of `data`
        return questions;
      },
      setData: function( value ) {
        // set the value of `data` and return it
        return ( questions = value );
      }
    };
  })();

  // Other things might happen here

  // expose our module to the global object
  App.quizApp = quizApp;

})( this );
