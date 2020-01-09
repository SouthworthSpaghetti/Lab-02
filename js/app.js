'use strict';

var masterCorrect = 0;//int counter for correct user input; added to arrayCorrect counter in Quiz 7, and to be presented at the final, closing alert
var arrayCorrect = 0//arrayCorrect counter in Quiz 7
var x = Math.round(Math.random() * 99);//RANDOM NUMBER GENERATOR
//var y = Math.round(x);
console.log(x);

var userName = prompt('What is your name?');//USER GREETING

//QUIZ 1- 6 DETAILS; WHERE INDEX#2 IS RESERVED FOR USER INPUT
var quizItemAnswer1 = ['Anthony rides the ferry to work', 'YES', ''];
var quizItemAnswer2 = ['hen hau translates to very bad, in Mandarin', 'NO', ''];
var quizItemAnswer3 = ['Anthony studied abroad in China', 'YES', ''];
var quizItemAnswer4 = ['Anthony works in Global Transportation', 'YES', ''];
var quizItemAnswer5 = ['The Highest Sea Cliffs in the world are in Alaska', 'NO', ''];
var quizItemAnswer6 = ['Guess a number between 0 and 100', x, ''];//FOR TESTING IN CASE OF CORRECT USER INPUT ['Guess a number between 0 and 100/' + x, x, ''];

//ARRAY ANSWERS TO BE <em> IN HTML DOCUMENT
//var quizItemcontentA = 'Ferry';
//var quizItemcontentBa = 'hen hau';
//var quizItemcontentBb = 'China';
//var quizItemcontentC = 'Global Transportation';
//var quizItemcontentD = 'Highest Sea Cliffs In The World';

var i = 1;//int counter for below code exit
if (userName === ''){
  do{
    var userName = prompt('What is your name? What do your friends call you??');
    i++;
  } while(i<2);
}else{
  alert('Aloha, ' + userName + ', welcome to this website. Thank you for stopping by.');
};


//1 QUIZ QUESTION
quizItemAnswer1[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer1[0]);//CORRECT ANSWER IS: Y/YES
//1 QUIZ RESULTS ALERT
if (quizItemAnswer1[1].toUpperCase() === quizItemAnswer1[2].toUpperCase()) {
  //console.log('sucessA');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else if (quizItemAnswer1[1].charAt(0).toUpperCase() === quizItemAnswer1[2].toUpperCase()){
  //console.log('sucessB');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else{
  //console.log('bad');
  alert('That was close! But incorrect.');
}
//END QUIZ 1

//2 QUIZ QUESTION
quizItemAnswer2[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer2[0]);//CORRECT ANSWER IS: N/NO
//2 QUIZ RESULTS ALERT
if (quizItemAnswer2[1].toUpperCase() === quizItemAnswer2[2].toUpperCase()) {
  //console.log('sucessA');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else if (quizItemAnswer2[1].charAt(0).toUpperCase() === quizItemAnswer2[2].toUpperCase()) {
  //console.log('sucessB');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else {
  //console.log('bad');
  alert('That was close! But incorrect.');
}
//END QUIZ 2

//3 QUIZ QUESTION
quizItemAnswer3[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer3[0]);//CORRECT ANSWER IS: Y/YES
//3 QUIZ RESULTS ALERT
if (quizItemAnswer3[1].toUpperCase() === quizItemAnswer3[2].toUpperCase()) {
  //console.log('sucessA');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else if (quizItemAnswer3[1].charAt(0).toUpperCase() === quizItemAnswer3[2].toUpperCase()) {
  //console.log('sucessB');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else {
  //console.log('bad');
  alert('That was close! But incorrect.');
}
//END QUIZ 3

//4 QUIZ QUESTION
quizItemAnswer4[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer4[0]);//CORRECT ANSWER IS: Y/YES
//4 QUIZ RESULTS ALERT
if (quizItemAnswer4[1].toUpperCase() === quizItemAnswer4[2].toUpperCase()) {
  //console.log('sucessA');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else if (quizItemAnswer4[1].charAt(0).toUpperCase() === quizItemAnswer4[2].toUpperCase()) {
  //console.log('sucessB');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else {
  //console.log('bad');
  alert('That was close! But incorrect.');
}
//END QUIZ 4

//5 QUIZ QUESTION
quizItemAnswer5[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer5[0]);//CORRECT ANSWER IS: N/NO
//5 QUIZ RESULTS ALERT
if (quizItemAnswer5[1].toUpperCase() === quizItemAnswer5[2].toUpperCase()) {
  //console.log('sucessA');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else if (quizItemAnswer5[1].charAt(0).toUpperCase() === quizItemAnswer5[2].toUpperCase()) {
  //console.log('sucessB');
  masterCorrect++;
  alert('Good job, you answered correctly.');
} else {
  //console.log('bad');
  alert('That was close! But incorrect.');
}
//END QUIZ 5

//6 QUIZ QUESTION, WITH FOUR USER ATTEMPTS AT GUESSING THE RANDOM NUMBER STORED IN VARIABLE 'x'
for(var j = 0; j < 4; j++){
  quizItemAnswer6[2] = Number(prompt(quizItemAnswer6[0]));//CORRECT ANSWER IS STORED IN VARIABLE 'x'
  //6 QUIZ RESULTS ALERT
  if (quizItemAnswer6[1] === quizItemAnswer6[2]) {
    //console.log('sucessA');
    masterCorrect++;
    j = 4;//EXIT FOR LOOP IF USER INPUT EQUALS THAT OF VARIABLE 'x'
    alert('Good job, you (suprisingly) answered correctly.');
  } else if (quizItemAnswer6[1] > quizItemAnswer6[2]) {//ALERTS USER IF THEIR GUESS IS TOO LOW
    //console.log('sucessB');
    masterCorrect++;
    alert('Good guess, but your answer is too low.');
  } else if (quizItemAnswer6[1] < quizItemAnswer6[2]){//ALERTS USER IF THEIR GUESS IS TOO HIGH
    //console.log('bad');
    alert('Good guess, but your answer is too high.');
  } else {
    alert('Please try and input a number, again.');//(OPTIONAL) ALERT IF USER INPUT NOT A NUMBER
  }
}
if (quizItemAnswer6[1] !== quizItemAnswer6[2]) {//AFTER ALL ATTEMPTS, ALERT USER OF CORRECT ANSWER
  alert('The correct answer is ' + x);
}
//END QUIZ 6






/*console.log(quizItemAnswer1[1].charAt(0));
console.log(quizItemAnswer1);
console.log(quizItemAnswer2);
console.log(quizItemAnswer3);
console.log(quizItemAnswer4);
console.log(quizItemAnswer5);
console.log(quizItemAnswer6);*/

/*switch(quizItemAnswerA.toUpperCase()){
  case 'Y':
    alert("That's correct.");
    break;
  case 'YES':
    alert("That's correct.");
    break;
  case 'N':
    alert("That's incorrect.");
    break;
  case 'NO':
    alert("That's incorrect.");
    break;
  default:
    alert("That doesn't make sense. But let's just move along.");
      break;
}*/
//COMMENTED BELOW (AND CONSIDERING LOOPING THRU SWITCH ABOVE) I DO SOMETHING LIKE THIS IN VBA TO LOOP THRU MULTIPLE INSTANCES OF ARRAYS HERE. THE IDEA IS TO LOOP THRU QUIZ ANSWERS AND GENERATE MULTIPLE ALERTS TO USER ABOUT HOW THEY DID IN THEIR SCORE. ALL WITH MINIMAL CODE; where jk string value finds the arrays above.
/*for (var j = 1; j < 6; j++){
  var jk = 'quizItemAnswer' + j;
  if (jk[1].toUpperCase === jk[2].toUpperCase){
    alert('Good job, you answered correctly.');
  }else
    alert('That was close! But incorrect.');
}*/

//START QUIZ 7, WITH SIX USER ATTEMPTS AT GUESSING SOME FAVORITE FOODS HOUSED IN ARRAYS
var quizItemAnswer7 = ['QUESADILLAS', 'STEAK SALAD', 'SMOKED SALMON', 'STRAWBERRIES', 'ICECREAM', 'OATMEAL COOKIES', 'TAMALES', 'POZOLE', 'BRATWURST', 'SHEPHERDS PIE'];

for (var i = 0; i < 7; i++) {
  var inputResult = prompt('Try and guess one of my favorite foods!');

  //console.log(inputResult);

  if (quizItemAnswer7.includes(inputResult.toUpperCase())) {
    console.log(arrayCorrect + 1);
    arrayCorrect++;
    i = 7;//EXIT FOR FOR LOOP IF ONE FOOD ITEM HOUSE IN ARRAY IS INPUTED BY USER
    alert('Good job, you guessed ' + arrayCorrect + ' of my favorite foods correctly.');
}else
    alert('Yum, I guess I can see why you like ' + inputResult + '. But its not one of my favorites.');
}
//END QUIZ 7
console.log('masterCorrect' + masterCorrect);
console.log('arrayCorrect' + arrayCorrect)
masterCorrect = masterCorrect + arrayCorrect;//ADD TOGETHER ALL CORRECT QUIZ RESPONSES; FROM YES/NO, NUMBER GUESSING, AND GUESSING FAVORITE FOOD ITEMS
console.log('masterCorrect after sum' + masterCorrect);


//Greeting goodbye
if (userName === '') {
  alert('Mahalo, you, thanks again for visiting. You answered ' + masterCorrect + ' of the quiz questions correctly. And guessed ' + arrayCorrect + ' of my favorite foods. Here are my top ten favorite foods: ' + quizItemAnswer7[0].valueOf() + ", " + quizItemAnswer7[1].valueOf() + ", " + quizItemAnswer7[2].valueOf() + ", " + quizItemAnswer7[3].valueOf() + ", " + quizItemAnswer7[4].valueOf() + ", " + quizItemAnswer7[5].valueOf() + ", " + quizItemAnswer7[6].valueOf() + ", " + quizItemAnswer7[7].valueOf() + ", " + quizItemAnswer7[8].valueOf() + ", " + quizItemAnswer7[9].valueOf() + ".");
  } else {
  alert('Mahalo, ' + userName + ', thanks again for visiting. You answered ' + masterCorrect + ' of the quiz questions correctly. And guessed ' + arrayCorrect + ' of my favorite foods. Here are my top ten favorite foods: ' + quizItemAnswer7[0].valueOf() + ", " + quizItemAnswer7[1].valueOf() + ", " + quizItemAnswer7[2].valueOf() + ", " + quizItemAnswer7[3].valueOf() + ", " + quizItemAnswer7[4].valueOf() + ", " + quizItemAnswer7[5].valueOf() + ", " + quizItemAnswer7[6].valueOf() + ", " + quizItemAnswer7[7].valueOf() + ", " + quizItemAnswer7[8].valueOf() + ", " + quizItemAnswer7[9].valueOf() + ".");
};