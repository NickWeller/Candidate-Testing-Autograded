const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer= "" ;
let questions=["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "]
let correctAnswers=["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];




function askForName() {
  candidateName=input.question("What is your name?: ");
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
/*console.log(question);
candidateAnswer=input.question("Your Answer: ");*/
   
  for(let i=0;i<questions.length;i++)
  {
    //console.log(`${i+1}) ${questions[i]}`);
    candidateAnswers.push(input.question(questions[i]));
    //console.log(`Correct Answer: ${correctAnswers[i]}\n`);

  }
  }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;
  let correctCount = 0;
  

  
  for(let i=0;i<correctAnswers.length;i++)
  {
    
    if((correctAnswers[i]).toLowerCase() === (candidateAnswers[i]).toLowerCase())
    {
      console.log(`Question ${i+1}: Correct`)
      correctCount++;
    }
    else{
      console.log(`Question ${i+1}: Incorrect, Correct Answer is ${correctAnswers[i]}`)
    }
  }
grade=((correctCount)/(questions.length))*100;

  console.log(`Candidate Name: ${candidateName}`)
  for(let i=0;i<questions.length;i++)
  {
    console.log(`\n` + questions[i]);
    console.log(`\nYour Answer : ${candidateAnswers[i]}`);
    console.log(`\nCorrect Answer : ${correctAnswers[i]}`);
    console.log("\n----------------------------")
  }
  console.log(`\nOverall Grade: ${grade}% (${correctCount} of ${questions.length} responses correct)`)
  if(grade<80)
  console.log("\nExam FAILED");
  else
  console.log("\nExam PASSED");

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${candidateName} Welcome to Candidate Testing`);
  
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// Don't write any code below this line //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
