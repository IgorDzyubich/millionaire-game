import { arrayOf, func, object, shape, string } from 'prop-types';
import { useState } from 'react';
import './style.scss';
import { AnswerButtonProps } from './types';

const AnswerButton = ({
  letter,
  text,
  currentQuestion,
  switchToNextQuestion,
  finishGame
}: AnswerButtonProps) => {
  const [selected, setSelected] = useState(false);
  const [correct, setCorreсt] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleCorrectAnswer = () => {
    setCorreсt(true);

    setTimeout(() => {
      switchToNextQuestion();
      setCorreсt(false);
    }, 1000);
  };

  const handleWrongAnswer = () => {
    setWrong(true);

    setTimeout(() => {
      finishGame();
    }, 1000);
  };

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setSelected(true);

    const currentLetter = e.currentTarget.dataset.letter;
    e.persist();

    setTimeout(() => {
      setSelected(false);

      if (currentQuestion.correct.includes(currentLetter!)) {
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    }, 1000);
  };

  let stateClass = '';

  switch (true) {
    case selected:
      stateClass = 'selected';
      break;
    case correct:
      stateClass = 'correct';
      break;
    case wrong:
      stateClass = 'wrong';
      break;
    default:
      stateClass = '';
  }

  return (
    <button
      className={`game__answer answer-btn answer-btn--${stateClass}`}
      onClick={handleClick}
      data-letter={letter}
    >
      <span className="top-hexagon"></span>
      <span className="answer-btn__letter">{letter}</span>
      <span className="answer-btn__text">{text}</span>
      <span className="bottom-hexagon"></span>
    </button>
  );
};

AnswerButton.propTypes = {
  letter: string,
  text: string,
  currentQuestion: shape({
    correct: arrayOf(string),
    reward: string,
    question: string,
    answers: arrayOf(object)
  }),
  finishGame: func,
  switchToNextQuestion: func
};

export default AnswerButton;
