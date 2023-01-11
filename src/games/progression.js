import {
  attemptsCount,
  meet,
  askQuestion,
  getAnswer,
  compareAnswers,
  congratulate,
} from '../index.js';
import { getRandomIntInclusive, getProgression } from '../helpers.js';

const progressionGame = () => {
  const name = meet();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= attemptsCount; i += 1) {
    const progression = getProgression();
    const randomIdx = getRandomIntInclusive(0, progression.length - 1);
    const [rightAnswer] = progression.splice(randomIdx, 1, '..');

    askQuestion(`${progression.join(' ')}`);
    const answer = getAnswer();
    const isRightAnswer = compareAnswers(rightAnswer, Number(answer), name);
    if (!isRightAnswer) return;
  }

  congratulate(name);
};

export default progressionGame;
