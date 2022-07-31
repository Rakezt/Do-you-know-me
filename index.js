var readlineSync = require('readline-sync');
var userQuestion = readlineSync.question("Input your name please----- ")
console.log("Welcome " + userQuestion +", lets try how much you know me...")
var score=0;
var highscore={
  name:"Peter",
  score:5,
}

function game(question, answer){
  var userName=readlineSync.question(question)
  if (userName.toUpperCase()===answer.toUpperCase()){
    console.log("You are right")
    score=score+1;
  }
  else {  
  console.log("Wrong");
  }  
  console.log("Your score is " + score);
  console.log("___________");
}


var questions=[{
  question:"Where do I live? ",
  answer:"Bangalore"
},{
  question:"Where do I work? ",
  answer:"R1RCM"
}, {
  question:"Where is my native place? ",
  answer:"Manipur",
}, {
  question:"What is my hobby? ",
  answer:"Playing football",
}, {
  question:"Which dish can I die for? ",
  answer:"Butter Chicken",
}];

for (var i=0; i<questions.length;i++){
  var currentQuestion=questions[i]
  game(currentQuestion.question, currentQuestion.answer)
}

console.log("Contratulation,"+userQuestion+" you have score " + score);
console.log("The highest score as of now is "+ highscore.name +" and he score a perfect " + highscore.score);
console.log("If you have cross the highest score, send me a screenshot @ 9108671147, thanks a lot");