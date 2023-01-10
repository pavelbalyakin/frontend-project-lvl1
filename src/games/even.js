import {
  attemptsCount,
  meet,
  askQuestion,
  getAnswer,
  compareAnswers,
  congratulate,
} from '../index.js';
import { getRandomIntInclusive, isEven } from '../helpers.js';

const map = {
  yes: true,
  no: false,
};

const evenGame = () => {
  const name = meet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= attemptsCount; i += 1) {
    const randomNum = getRandomIntInclusive(1, 100);
    askQuestion(`${randomNum}`);
    const answer = getAnswer();
    const isRightAnswer = compareAnswers(isEven(randomNum), map[answer], name);
    if (!isRightAnswer) return;
  }

  congratulate(name);
};

export default evenGame;
