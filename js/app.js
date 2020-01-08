'use strict';

var userName = prompt('What is your name?');
var quizItemAnswerA = ['Anthony rides the ferry to work', 'YES', ''];
var quizItemAnswerBb = ['NO', ''];
var quizItemAnswerBa = ['YES', ''];
var quizItemAnswerC = ['Yes', ''];
var quizItemAnswerD = ['Yes', ''];
//ARRAY FOR ANSWERS?
//var quizItemcontentA = 'Ferry';
//var quizItemcontentBa = 'hen hau';
//var quizItemcontentBb = 'China';
//var quizItemcontentC = 'Global Transportation';
//var quizItemcontentD = 'Highest Sea Cliffs In The World';
alert('Aloha, ' + userName + ', welcome to this website. Thank you for stopping by.');
quizItemAnswerA[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswerA[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswerBb[2] = prompt('Yes (Y)/No (N)--' + 'hen hau translates to very bad, in Mandarin');//CORRECT ANSWER IS: N/NO
quizItemAnswerBa[2] = prompt('Yes (Y)/No (N)--' + 'Anthony studied abroad in China');//CORRECT ANSWER IS: Y/YES
quizItemAnswerC[2] = prompt('Yes (Y)/No (N)--' + 'Anthony works in Global Transportation');//CORRECT ANSWER IS: Y/YES
quizItemAnswerD[2] = prompt('Yes (Y)/No (N)--' + 'The Highest Sea Cliffs in the world are in Alaska');//CORRECT ANSWER IS: N/NO
console.log(quizItemAnswerA);
console.log(quizItemAnswerA.length);
console.log(quizItemAnswerBb.length);
console.log(quizItemAnswerBa.length);
console.log(quizItemAnswerC.length);
console.log(quizItemAnswerD.length);
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

alert('Mahalo, ' + userName + ', thanks again for visiting. Have a great day.')