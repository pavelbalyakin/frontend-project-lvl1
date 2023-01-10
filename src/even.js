import readlineSync from 'readline-sync';

const attemptsCount = 3;

function getRandomIntInclusive(min, max) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
}

const isEven = (num) => num % 2 === 0;

const Answer = {
  yes: true,
  no: false,
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= attemptsCount; i += 1) {
    const randomNum = getRandomIntInclusive(1, 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(randomNum) === Answer[answer]) {
      console.log('Correct!');
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
