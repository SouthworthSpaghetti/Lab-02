'use strict';

var masterCorrect = 0;//int counter for correct user input
var x = Math.round(Math.random() * 99);//ONE-TIME RANDOM NUMBER GENERATOR
var zipUp = '';
var OneOfManyArray = ['quesadillas', 'steak salad', 'salmon', 'strawberries', 'icecream', 'cookies', 'tamales', 'pozole', 'bratwurst', 'shepherds pie'];

var quizItemData = [];//WHERE ELEMENT3 IS RESERVED FOR USER INPUT
quizItemData[0] = ['Auth', 'What is your name?', '', ''];
quizItemData[1] = ['YesNo', 'Anthony rides the ferry to work', 'YES', ''];
quizItemData[2] = ['YesNo', 'hen hau translates to very bad in Mandarin', 'NO', ''];
quizItemData[3] = ['YesNo', 'Anthony studied abroad in China', 'YES', ''];
quizItemData[4] = ['YesNo', 'Anthony works in Global Transportation', 'YES', ''];
quizItemData[5] = ['YesNo', 'The Highest Sea Cliffs in the world are in Alaska', 'NO', ''];
quizItemData[6] = ['OneOfNumber', 'Guess a number between 0 and 100', x, ''];//FOR TESTING IN CASE OF CORRECT USER INPUT ['Guess a number between 0 and 100/' + x, x, ''];
quizItemData[7] = ['OneOfMany', 'Try and guess one of my favorite foods!', OneOfManyArray, ''];

for (var k = 0; k < quizItemData.length; k++) {//Iniate pop-quiz by passing array of Quiz Items
  callQuiz(quizItemData[k]);
}
//Greeting goodbye
if (quizItemData[0][3] === '') {
  alert('Mahalo, you, thanks again for visiting. You answered ' + masterCorrect + ' of the pop-quiz items correctly. My top ten favorite foods are: ' + zipUp + ".");
} else {
  alert('Mahalo, ' + quizItemData[0][3] + ', thanks again for visiting. You answered ' + masterCorrect + ' of the pop-quiz items correctly. My top ten favorite foods are: ' + zipUp + ".");
}//Greeting goodbye

function callQuiz(quizKeyArray){
  var gameMeta = quizKeyArray[0];//Quiz Item element0 'gameMeta' confirms which of the four quizes relates to the Quiz Items
  switch(gameMeta){
  case('Auth')://Quiz Item 'gameMeta' initiates the 'Auth' quiz type function
    Auth(quizKeyArray)
    break;
  case ('YesNo')://Quiz Item 'gameMeta' initiates the 'YesNo' quiz type function
    YesNo(quizKeyArray)
    break;
  case ('OneOfNumber')://Quiz Item 'gameMeta' initiates the 'OneOfNumber' quiz type function
    OneOfNumber(quizKeyArray)
    break;
  case ('OneOfMany')://Quiz Item 'gameMeta' initiates the 'OneOfMany' quiz type function
    OneOfMany(quizKeyArray)
    break;
  default:
    break;
  }//end callQuiz switch
}//end callQuiz function

function Auth(quizKeyArray){
  do {//LOOP REQUIRES INPUT HERE
    quizKeyArray[3] = prompt(quizKeyArray[1]);//Quiz Item element1 confirms text prompting user feedback
  } while (quizKeyArray[3] === '');
  alert('Aloha, ' + quizKeyArray[3] + ', welcome to this website. Thank you for stopping by.');
}//end Auth function

function YesNo(quizKeyArray) {
  quizKeyArray[3] = prompt('Yes (Y)/No (N)--' + quizKeyArray[1]);//Quiz Item element1 confirms text prompting user feedback
  if (quizKeyArray[2].toUpperCase() === quizKeyArray[3].toUpperCase()) {
    masterCorrect++;
    alert('Good job, you are correct!');
  } else if (quizKeyArray[2].charAt(0).toUpperCase() === quizKeyArray[3].toUpperCase()) {
    masterCorrect++;
    alert('Good job, you are correct!');
  } else {
    alert('That was close. But incorrect.');
  }
}//end YesNo function

function OneOfNumber(quizKeyArray) {
  quizKeyArray[3] = Number(prompt(quizKeyArray[1] + x + ' You have four chances to guess correctly.'));//THREE MORE USER PROMPTS, UNLESS RANDOM NUMBER 'x' IS INPUTED //ONLY THE LAST USER INPUT IS STORED; A FEW ATTEMPT MADE AT STORING ALL USER INPUTS, AND REQUIRES MORE CODING TO COMPLETE
  for (var j = 0; j < 3; j++) {
    if (quizKeyArray[2] === quizKeyArray[3]) {
      masterCorrect++;
      j = 4;//EXIT FOR LOOP IF USER INPUT EQUALS THAT OF VARIABLE 'x'
      alert('Good job, you (suprisingly) answered correctly.');
    } else if (quizKeyArray[2] > quizKeyArray[3]) {//ALERTS USER IF THEIR GUESS IS TOO LOW
      quizKeyArray[3] = Number(prompt('Good guess, but your answer is too low.'));
    } else if (quizKeyArray[2] < quizKeyArray[3]) {//ALERTS USER IF THEIR GUESS IS TOO HIGH
      quizKeyArray[3] = Number(prompt('Good guess, but your answer is too high.'));
    } else {
      quizKeyArray[3] = Number(prompt('Please try and input a number, again.'));//(OPTIONAL) ALERT IF USER INPUT NOT A NUMBER
    }
  }
  if (quizKeyArray[2] !== quizKeyArray[3]) {//AFTER ALL FAILED ATTEMPTS, ALERT USER OF CORRECT ANSWER
    alert('The correct number is ' + x);
  }
}//end OneOfNumber function

function OneOfMany(quizKeyArray) {  
  for (var i = 7; i > 0; i--) {
    if (i > 6){quizKeyArray[3] = prompt(quizKeyArray[1] + ' You have ' + i + ' chances to guess one item correctly.');
    } else {
      quizKeyArray[3] = prompt('Yum, I guess I can see why you like ' + quizKeyArray[3] + '. But its not one of my favorites. You have ' + i + ' chances left to guess one item correctly.');
    }
    for (var j = 0; j < quizKeyArray[2].length; j++){
      if (quizKeyArray[3].toUpperCase() === quizKeyArray[2][j].toUpperCase()) {
        alert('Good job, you guessed one of my favorite foods correctly. I love to eat ' + quizKeyArray[2][j] + '.');
        masterCorrect++;
        j = quizKeyArray[2].length;
        i = 0;
      } 
    }
  }
  var popReplace = quizKeyArray[2].length - 1;//FUN FOR UNZIPPING ARRAY INTO DESIRED STRING FORMAT
  var zipArrayOmega = quizKeyArray[2][popReplace];//GETS THE LAST ELEMENT
  var zipArrayAlpha = quizKeyArray[2][0];//GETS THE FIRST ELEMENT
  for (var i = 1; i < quizKeyArray[2].length - 1; i++) {
    zipArrayAlpha = zipArrayAlpha + ', ' + quizKeyArray[2][i];
  }
  zipUp = zipArrayAlpha + ' and ' + zipArrayOmega;//zipUp as Global Variable
  }