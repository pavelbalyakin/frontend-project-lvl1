import {
  attemptsCount,
  meet,
  askQuestion,
  getAnswer,
  compareAnswers,
  congratulate,
} from '../index.js';
import { getRandomIntInclusive, NOD } from '../helpers.js';

const gcdGame = () => {
  const name = meet();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= attemptsCount; i += 1) {
    const randomFirstNum = getRandomIntInclusive(1, 100);
    const randomSecondNum = getRandomIntInclusive(1, 100);
    const rightAnswer = NOD(randomFirstNum, randomSecondNum);

    askQuestion(`${randomFirstNum} ${randomSecondNum}`);
    const answer = getAnswer();
    const isRightAnswer = compareAnswers(rightAnswer, Number(answer), name);
    if (!isRightAnswer) return;
  }

  congratulate(name);
};

export default gcdGame;
