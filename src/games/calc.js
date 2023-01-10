import {
  attemptsCount,
  meet,
  askQuestion,
  getAnswer,
  compareAnswers,
  congratulate,
} from '../index.js';
import { getRandomIntInclusive } from '../helpers.js';

const operations = ['+', '-', '*'];

const operationResult = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const calcGame = () => {
  const name = meet();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= attemptsCount; i += 1) {
    const randomFirstNum = getRandomIntInclusive(1, 100);
    const randomSecondNum = getRandomIntInclusive(1, 100);
    const randomOperation = operations[getRandomIntInclusive(0, operations.length - 1)];
    const rightAnswer = operationResult[randomOperation](randomFirstNum, randomSecondNum);

    askQuestion(`${randomFirstNum} ${randomOperation} ${randomSecondNum}`);
    const answer = getAnswer();
    const isRightAnswer = compareAnswers(rightAnswer, Number(answer), name);
    if (!isRightAnswer) return;
  }

  congratulate(name);
};

export default calcGame;
