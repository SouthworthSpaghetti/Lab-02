'use strict';

var masterCorrect = 0;//int counter for correct user input; added to arrayCorrect counter in Quiz 7, and to be presented at the final, closing alert
var arrayCorrect = 0//arrayCorrect counter in Quiz 7
var x = Math.round(Math.random() * 99);//RANDOM NUMBER GENERATOR
var OneOfManyArray = ['quesadillas', 'steak salad', 'salmon', 'strawberries', 'icecream', 'cookies', 'tamales', 'pozole', 'bratwurst', 'shepherds pie'];

// var userName = prompt('What is your name?');//USER GREETING//BRANCHFINAL

//QUIZ 1- 6 DETAILS; WHERE INDEX#2 IS RESERVED FOR USER INPUT
var quizItemAnswer0 = ['Auth', 'What is your name?', '', ''];
var quizItemAnswer1 = ['YesNo', 'Anthony rides the ferry to work', 'YES', ''];
var quizItemAnswer2 = ['YesNo', 'hen hau translates to very bad in Mandarin', 'NO', ''];
var quizItemAnswer3 = ['YesNo', 'Anthony studied abroad in China', 'YES', ''];
var quizItemAnswer4 = ['YesNo', 'Anthony works in Global Transportation', 'YES', ''];
var quizItemAnswer5 = ['YesNo', 'The Highest Sea Cliffs in the world are in Alaska', 'NO', ''];
var quizItemAnswer6 = ['OneOfNumber', 'Guess a number between 0 and 100', x, ''];//FOR TESTING IN CASE OF CORRECT USER INPUT ['Guess a number between 0 and 100/' + x, x, ''];
var quizItemAnswer7 = ['OneOfMany', 'Try and guess one of my favorite foods!', OneOfManyArray, ''];

//quizItemAnswer0[3] = callQuiz(quizItemAnswer0);//Iniate quiz by passing array of Quiz Items
callQuiz(quizItemAnswer7);
console.log(quizItemAnswer7[3]);

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
      console.log('default')
      break;
  }//end callQuiz switch
}//end callQuiz function

function Auth(quizKeyArray){
  do {//LOOP REQUIRES INPUT HERE
    quizKeyArray[3] = prompt(quizKeyArray[1]);//Quiz Item element1 confirms text prompting user feedback
  } while (quizKeyArray[3] === '');
  alert('Aloha, ' + quizKeyArray[3] + ', welcome to this website. Thank you for stopping by.');
  return quizKeyArray[3];//RETURN TO STORE USER INPUT
}//end Auth function

function YesNo(quizKeyArray) {
  //console.log('YesNo');
  quizKeyArray[3] = prompt(quizKeyArray[1]);//Quiz Item element1 confirms text prompting user feedback

  if (quizKeyArray[2].toUpperCase() === quizKeyArray[3].toUpperCase()) {
    //console.log('sucessA');
    masterCorrect++;
    alert('Good job, you answered correctly.');
  } else if (quizKeyArray[2].charAt(0).toUpperCase() === quizKeyArray[3].toUpperCase()) {
    //console.log('sucessB');
    masterCorrect++;
    alert('Good job, you answered correctly.');
  } else {
    //console.log('bad');
    alert('That was close! But incorrect.');
  }
}//end YesNo function

function OneOfNumber(quizKeyArray) {
  console.log(OneOfNumber);
  for (var j = 0; j < 4; j++) {//FOUR USER PROMPTS, UNLESS RANDOM NUMBER 'x' IS INPUTED
    quizKeyArray[3] = Number(prompt(quizKeyArray[1]));//ONLY THE LAST USER INPUT IS STORED; A FEW ATTEMPT MADE AT STORING ALL USER INPUTS, AND REQUIRES MORE CODING TO COMPLETE
    //6 QUIZ RESULTS ALERT
    if (quizKeyArray[2] === quizKeyArray[3]) {
      //console.log('sucessA');
      masterCorrect++;
      j = 4;//EXIT FOR LOOP IF USER INPUT EQUALS THAT OF VARIABLE 'x'
      alert('Good job, you (suprisingly) answered correctly.');
    } else if (quizKeyArray[2] > quizKeyArray[3]) {//ALERTS USER IF THEIR GUESS IS TOO LOW
      //console.log('sucessB');
      alert('Good guess, but your answer is too low.');
    } else if (quizKeyArray[2] < quizKeyArray[3]) {//ALERTS USER IF THEIR GUESS IS TOO HIGH
      //console.log('bad');
      alert('Good guess, but your answer is too high.');
    } else {
      alert('Please try and input a number, again.');//(OPTIONAL) ALERT IF USER INPUT NOT A NUMBER
    }
  }
  if (quizKeyArray[2] !== quizKeyArray[3]) {//AFTER ALL ATTEMPTS, ALERT USER OF CORRECT ANSWER
    alert('The correct answer is ' + x);
  }
}//end OneOfNumber function

function OneOfMany(quizKeyArray) {  
  for (var i = 7; i > 0; i--) {
    //console.log(inputResult);
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
}
//END QUIZ 7







}//end OneOfMany function

// var quizItemAnswer = [];
// quizItemAnswer[1 - 1] = ['Anthony rides the ferry to work', 'YES', ''];
// quizItemAnswer[2 - 1] = ['hen hau translates to very bad, in Mandarin', 'NO', ''];
// quizItemAnswer[3 - 1] = ['Anthony studied abroad in China', 'YES', ''];
// quizItemAnswer[4 - 1] = ['Anthony works in Global Transportation', 'YES', ''];
// quizItemAnswer[5 - 1] = ['The Highest Sea Cliffs in the world are in Alaska', 'NO', ''];
// quizItemAnswer[6 - 1] = ['Guess a number between 0 and 100', x, ''];//FOR TESTING IN CASE OF CORRECT USER INPUT ['Guess a number between 0 and 100/' + x, x, ''];
console.log(quizItemAnswer);
console.log(quizItemAnswer.length);

//ARRAY ANSWERS TO BE <em> IN HTML DOCUMENT
//var quizItemcontentA = 'Ferry';
//var quizItemcontentBa = 'hen hau';
//var quizItemcontentBb = 'China';
//var quizItemcontentC = 'Global Transportation';
//var quizItemcontentD = 'Highest Sea Cliffs In The World';
// */

// var i = 1;//int counter for below code exit
// if (userName === ''){
//   do{
//     var userName = prompt('What is your name? What do your friends call you??');
//     i++;
//   } while(i<2);
// }else{
//   alert('Aloha, ' + userName + ', welcome to this website. Thank you for stopping by.');
// };//BRANCHFINAL

/*
//1 QUIZ QUESTION ARRAY ARRAY TEST LOOP
for (var i = 0; i < quizItemAnswer.length; i++){
  //console.log(i);
  console.log(quizItemAnswer[[0, i]]);
  //quizItemAnswer[[i][2]] = prompt('Yes (Y)/No (N)--' + quizItemAnswer[[i][0]]);//CORRECT ANSWER IS: Y/YES
  //console.log(quizItemAnswer[[i][2]]);
  //1 QUIZ RESULTS ALERT

}
/*
  if (quizItemAnswer[i[1]].toUpperCase() === quizItemAnswer[i[2]].toUpperCase()) {
    //console.log('sucessA');
    masterCorrect++;
    alert('Good job, you answered correctly.');
  } else if (quizItemAnswer[i[1]].charAt(0).toUpperCase() === quizItemAnswer[i[2]].toUpperCase()) {
    //console.log('sucessB');
    masterCorrect++;
    alert('Good job, you answered correctly.');
  } else {
    //console.log('bad');
    alert('That was close! But incorrect.');
  }


//END QUIZ 1 ARRAY ARRAY TEST LOOP
*/


// //1 QUIZ QUESTION
// quizItemAnswer1[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer1[0]);//CORRECT ANSWER IS: Y/YES
// //1 QUIZ RESULTS ALERT
// if (quizItemAnswer1[1].toUpperCase() === quizItemAnswer1[2].toUpperCase()) {
//   //console.log('sucessA');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else if (quizItemAnswer1[1].charAt(0).toUpperCase() === quizItemAnswer1[2].toUpperCase()){
//   //console.log('sucessB');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else{
//   //console.log('bad');
//   alert('That was close! But incorrect.');
// }
// //END QUIZ 1


// //2 QUIZ QUESTION
// quizItemAnswer2[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer2[0]);//CORRECT ANSWER IS: N/NO
// //2 QUIZ RESULTS ALERT
// if (quizItemAnswer2[1].toUpperCase() === quizItemAnswer2[2].toUpperCase()) {
//   //console.log('sucessA');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else if (quizItemAnswer2[1].charAt(0).toUpperCase() === quizItemAnswer2[2].toUpperCase()) {
//   //console.log('sucessB');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else {
//   //console.log('bad');
//   alert('That was close! But incorrect.');
// }
// //END QUIZ 2

// //3 QUIZ QUESTION
// quizItemAnswer3[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer3[0]);//CORRECT ANSWER IS: Y/YES
// //3 QUIZ RESULTS ALERT
// if (quizItemAnswer3[1].toUpperCase() === quizItemAnswer3[2].toUpperCase()) {
//   //console.log('sucessA');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else if (quizItemAnswer3[1].charAt(0).toUpperCase() === quizItemAnswer3[2].toUpperCase()) {
//   //console.log('sucessB');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else {
//   //console.log('bad');
//   alert('That was close! But incorrect.');
// }
// //END QUIZ 3

// //4 QUIZ QUESTION
// quizItemAnswer4[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer4[0]);//CORRECT ANSWER IS: Y/YES
// //4 QUIZ RESULTS ALERT
// if (quizItemAnswer4[1].toUpperCase() === quizItemAnswer4[2].toUpperCase()) {
//   //console.log('sucessA');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else if (quizItemAnswer4[1].charAt(0).toUpperCase() === quizItemAnswer4[2].toUpperCase()) {
//   //console.log('sucessB');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else {
//   //console.log('bad');
//   alert('That was close! But incorrect.');
// }
// //END QUIZ 4

// //5 QUIZ QUESTION
// quizItemAnswer5[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer5[0]);//CORRECT ANSWER IS: N/NO
// //5 QUIZ RESULTS ALERT
// if (quizItemAnswer5[1].toUpperCase() === quizItemAnswer5[2].toUpperCase()) {
//   //console.log('sucessA');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else if (quizItemAnswer5[1].charAt(0).toUpperCase() === quizItemAnswer5[2].toUpperCase()) {
//   //console.log('sucessB');
//   masterCorrect++;
//   alert('Good job, you answered correctly.');
// } else {
//   //console.log('bad');
//   alert('That was close! But incorrect.');
// }
// //END QUIZ 5//BRANCHFINAL

//6 QUIZ QUESTION, WITH FOUR USER ATTEMPTS AT GUESSING THE RANDOM NUMBER STORED IN VARIABLE 'x'
// for(var j = 0; j < 4; j++){
//   quizItemAnswer6[2] = Number(prompt(quizItemAnswer6[0]));//CORRECT ANSWER IS STORED IN VARIABLE 'x'
//   //6 QUIZ RESULTS ALERT
//   if (quizItemAnswer6[1] === quizItemAnswer6[2]) {
//     //console.log('sucessA');
//     masterCorrect++;
//     j = 4;//EXIT FOR LOOP IF USER INPUT EQUALS THAT OF VARIABLE 'x'
//     alert('Good job, you (suprisingly) answered correctly.');
//   } else if (quizItemAnswer6[1] > quizItemAnswer6[2]) {//ALERTS USER IF THEIR GUESS IS TOO LOW
//     //console.log('sucessB');
//     masterCorrect++;
//     alert('Good guess, but your answer is too low.');
//   } else if (quizItemAnswer6[1] < quizItemAnswer6[2]){//ALERTS USER IF THEIR GUESS IS TOO HIGH
//     //console.log('bad');
//     alert('Good guess, but your answer is too high.');
//   } else {
//     alert('Please try and input a number, again.');//(OPTIONAL) ALERT IF USER INPUT NOT A NUMBER
//   }
// }
// if (quizItemAnswer6[1] !== quizItemAnswer6[2]) {//AFTER ALL ATTEMPTS, ALERT USER OF CORRECT ANSWER
//   alert('The correct answer is ' + x);
// }
// //END QUIZ 6//BRANCHFINAL






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
//var quizItemAnswer7 = ['QUESADILLAS', 'STEAK SALAD', 'SMOKED SALMON', 'STRAWBERRIES', 'ICECREAM', 'OATMEAL COOKIES', 'TAMALES', 'POZOLE', 'BRATWURST', 'SHEPHERDS PIE'];//BRANCHFINAL

for (var i = 0; i < 7; i++) {
  //var inputResult = prompt('Try and guess one of my favorite foods!');//BRANCHFINAL

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
console.log('arrayCorrect' + arrayCorrect);
masterCorrect = masterCorrect + arrayCorrect;//ADD TOGETHER ALL CORRECT QUIZ RESPONSES; FROM YES/NO, NUMBER GUESSING, AND GUESSING FAVORITE FOOD ITEMS
console.log('masterCorrect after sum' + masterCorrect);


//Greeting goodbye
if (userName === '') {
  alert('Mahalo, you, thanks again for visiting. You answered ' + masterCorrect + ' of the quiz questions correctly. And guessed ' + arrayCorrect + ' of my favorite foods. Here are my top ten favorite foods: ' + quizItemAnswer7[0].valueOf() + ", " + quizItemAnswer7[1].valueOf() + ", " + quizItemAnswer7[2].valueOf() + ", " + quizItemAnswer7[3].valueOf() + ", " + quizItemAnswer7[4].valueOf() + ", " + quizItemAnswer7[5].valueOf() + ", " + quizItemAnswer7[6].valueOf() + ", " + quizItemAnswer7[7].valueOf() + ", " + quizItemAnswer7[8].valueOf() + ", " + quizItemAnswer7[9].valueOf() + ".");
  } else {
  alert('Mahalo, ' + userName + ', thanks again for visiting. You answered ' + masterCorrect + ' of the quiz questions correctly. And guessed ' + arrayCorrect + ' of my favorite foods. Here are my top ten favorite foods: ' + quizItemAnswer7[0].valueOf() + ", " + quizItemAnswer7[1].valueOf() + ", " + quizItemAnswer7[2].valueOf() + ", " + quizItemAnswer7[3].valueOf() + ", " + quizItemAnswer7[4].valueOf() + ", " + quizItemAnswer7[5].valueOf() + ", " + quizItemAnswer7[6].valueOf() + ", " + quizItemAnswer7[7].valueOf() + ", " + quizItemAnswer7[8].valueOf() + ", " + quizItemAnswer7[9].valueOf() + ".");
}

/*BOBBY JOE'S QUESTION
loop1: 
for (var q = 0; q < 6; q++) {//UPPER 'FOR LOOP' FOR CYCLING THRU 6 QUESTIONS
  var uInput = prompt('what number?');
  var counter = 0;//DECLARE 'COUNTER'; FOR TASK OF BREAKING OUT LOWER 'FOR LOOP', CONTINUING UPPER FOR LOOP ONCE LOWER LOOP COMPLETES ITS CYCLE--THE LOWER LOOP WILL CONTINUE AFTER 'COUNTER = 2'; BUT WILL NOT 'RETURN' TO ALERT METHOD. IMPORTANT TO UNDERSTAND THAT 'COUNTER' WILL GET '0' AT 132 ONCE UPPER FOR LOOP CONTINUES ITS CYCLE.
  array = [1, 2, 3];
  for (var index = 0; index < array.length; index++) {  //LOWER 'FOR LOOP' FOR CYCLING THRU ARRAY CONTENTS/INDEXES
    counter = 0;  
  //console.log(uInput, array[index].toString());
    if (uInput == array[index].toString()) {
      console.log('great');
      //counter = 2;//'COUNTER' GETS '2' WILL 'BREAK' FLOW OUT OF LOWER 'FOR LOOP'S ALERT METHOD,
      break loop1;
    } else if (counter < 1) {
      counter = 2;//'COUNTER' GETS '2' WILL 'BREAK' FLOW OUT OF LOWER 'FOR LOOP'S ALERT METHOD, IT WILL COMPLETE CYCLE THRU LOWER ARRAY
      alert(q);
      console.log('no');
    } else {
      console.log('else exit')
    }
  }
}*/

