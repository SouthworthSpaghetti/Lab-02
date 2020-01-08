'use strict';

var i = 1;
var userName = prompt('What is your name?');
var quizItemAnswerA = ['Anthony rides the ferry to work', 'YES', ''];
var quizItemAnswerBb = ['hen hau translates to very bad, in Mandarin', 'NO', ''];
var quizItemAnswerBa = ['Anthony studied abroad in China', 'YES', ''];
var quizItemAnswerC = ['Anthony works in Global Transportation', 'YES', ''];
var quizItemAnswerD = ['The Highest Sea Cliffs in the world are in Alaska', 'NO', ''];
//ARRAY FOR ANSWERS?
//var quizItemcontentA = 'Ferry';
//var quizItemcontentBa = 'hen hau';
//var quizItemcontentBb = 'China';
//var quizItemcontentC = 'Global Transportation';
//var quizItemcontentD = 'Highest Sea Cliffs In The World';
if (userName === ''){
  do{
    var userName = prompt('What is your name? What do your friends call you??');
    i++;
  } while(i<2);
}else{
  alert('Aloha, ' + userName + ', welcome to this website. Thank you for stopping by.');
}
quizItemAnswerA[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswerA[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswerBb[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswerBb[0]);//CORRECT ANSWER IS: N/NO
quizItemAnswerBa[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswerBa[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswerC[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswerC[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswerD[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswerD[0]);//CORRECT ANSWER IS: N/NO
console.log(quizItemAnswerA);
console.log(quizItemAnswerBb);
console.log(quizItemAnswerBa);
console.log(quizItemAnswerC);
console.log(quizItemAnswerD);
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
if (userName === '') {
  alert('Mahalo, you, thanks again for visiting. Have a great day.');
  } else {
  alert('Mahalo, ' + userName + ', thanks again for visiting. Have a great day.');
};