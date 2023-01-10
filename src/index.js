import readlineSync from 'readline-sync';

export const attemptsCount = 3;

export const meet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (q) => console.log(`Question: ${q}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const compareAnswers = (rightAnswer, userAnswer, name) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const congratulate = (name) => console.log(`Congratulations, ${name}!`);
