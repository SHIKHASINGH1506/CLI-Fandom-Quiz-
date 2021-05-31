readline = require("readline");
readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name? ");

chalk = require("chalk");
console.log("Welcome "+userName + " to"+ chalk.red("  F.R.I.E.N.D.S") + " Quiz. ");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r1.question("Do you wanna continue? \n Press"+ chalk.green(" Y") + " to continue and " + chalk.redBright("N")+ " to stop", (choice) =>
{
  if(choice.toUpperCase() =="Y"){
    console.log(chalk.yellowBright("You've decided to continue..."));
    play();
  }
  else{
    r1.close();
  }
});

var score=0;
var listQuestions=[{
  question: `
  1. The series Friends is set in which city?
  a: Los Angeles 
  b: New York City 
  c: Miami 
  d: Seattle\n`,
  answer: "b"
},
{
  question: `
  2. Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date? 
  a: France
  b: Italy
  c: England
  d: Greece\n`,
  answer: "b"
},
{
  question: `
  3. Rachel was popular in high school. Her prom date Chip ditched her for which girl at school? 
  a: Sally Roberts
  b: Amy Welsh
  c: Valerie Thompson
  d: Emily Foster\n`,
  answer: "b"
},
{
  question: `
  4. What’s the name of Joey’s penguin? 
  a: Snowflake
  b: Waddle
  c: Huggsy
  d: Bobber\n`,
  answer: "c"
},
{
question: `
  5. What is Janice most likely to say? 
  a: Talk to the hand!
  b: Get me a coffee!
  c: Oh...my...god!
  d: No way!\n`,
  answer: "c"
},
{
question: `
  6. Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives? 
  a: Ross Geller
  b: Pette Becker
  c: Eddie Meneuk
  d: Joey Tribbiani\n`,
  answer: "d"
},
{
question: `
  7. Who sang the Friends theme? 
  a: The Banksys
  b: The Rembrandts
  c: The Constables
  d: The Da Vinci Band\n`,
  answer: "b"
},
{
question: `
  8. What is the name of Rachel’s Sphynx cat? 
  a: Baldy
  b: Mrs. Whiskerson
  c: Sid
  d: Felix\n`,
  answer: "b"
},
{
question:`
  9. What kind of uniform does Joey wear to Monica and Chandler’s wedding?
  a: Chef
  b: Soldier
  c: Fire fighter
  d: A baseball player\n`,
  answer: "b"
},
{
question: `
  10. What is the name of Phoebe’s alter-ego? 
  a: Phoebe Neeby
  b: Monica Bing
  c: Regina Phalange
  d: Elaine Benes\n`,
  answer: "c"
}];

var quesInd = 0;
var score=0;
function play(){
  r1.question(listQuestions[quesInd].question, (userAns) =>
    {
      if(userAns.toLowerCase() === listQuestions[quesInd].answer.toLowerCase())
      {
        console.log("You answered "+userAns);
        console.log(chalk.greenBright("Correct answer!"));
        score++;
      }
      else{
        console.log("You answered "+userAns);
        console.log(chalk.redBright("Wrong answer!"));
        score=score-score*0.25;
      }
      console.log("------------------------");
      quesInd++;
      serve();
  });
}
function serve(){
  if(quesBankExausted()){
    console.log("Thanks for playing! ");
    console.log("Your final score is "+score);
    r1.close();
  }
  else{
    play();
  }
}

function quesBankExausted(){
 // console.log(quesInd);
  if(quesInd === listQuestions.length)
    return true;
  else
   return false;
}

