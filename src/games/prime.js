import {
  attemptsCount,
  meet,
  askQuestion,
  getAnswer,
  compareAnswers,
  congratulate,
} from '../index.js';
import { getRandomIntInclusive, isPrime } from '../helpers.js';

const map = {
  yes: true,
  no: false,
};

const primeGame = () => {
  const name = meet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= attemptsCount; i += 1) {
    const randomNum = getRandomIntInclusive(1, 100);
    askQuestion(`${randomNum}`);
    const answer = getAnswer();
    const isRightAnswer = compareAnswers(isPrime(randomNum), map[answer], name);
    if (!isRightAnswer) return;
  }

  congratulate(name);
};

export default primeGame;
