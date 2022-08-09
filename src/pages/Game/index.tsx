import { func } from 'prop-types';
import { useState } from 'react';
import AnswerButton from '../../components/AnswerButton';
import MobileBtn from '../../components/MobileButton';
import RewardsList from '../../components/RewardsList';
import questions from '../../mockData/questions.json';
import './style.scss';
import { GameProps } from './types';

const Game = ({ setGameFinished, setReward, setGameStarted }: GameProps) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showRewards, setShowRewards] = useState(false);

  const currentQuestion = questions[questionNumber];
  const prevQuestionReward = questionNumber ? questions[questionNumber - 1].reward : '$0';

  const finishGame = (reward = prevQuestionReward) => {
    setReward(reward);
    setGameStarted(false);
    setGameFinished(true);
  };

  const switchToNextQuestion = () => {
    if (questionNumber === questions.length - 1) {
      finishGame(currentQuestion.reward);
    } else {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  return (
    <section className="game">
      <div className="game__inner">
        <h2 className="game__title">{currentQuestion.question}</h2>

        <div className="game__answers">
          {currentQuestion.answers.map((item) => {
            return (
              <AnswerButton
                key={item.letter}
                letter={item.letter}
                text={item.answer}
                currentQuestion={currentQuestion}
                switchToNextQuestion={switchToNextQuestion}
                finishGame={finishGame}
              />
            );
          })}
        </div>
      </div>

      <div className={`game__overlay game__overlay--${showRewards ? 'open' : ''}`}>
        <aside className="game__rewards">
          <RewardsList
            rewards={questions.map((item) => item.reward).reverse()}
            questionNumber={questionNumber}
          />
        </aside>
      </div>

      <MobileBtn setShowRewards={setShowRewards} />
    </section>
  );
};

Game.propTypes = {
  setGameFinished: func,
  setReward: func,
  setGameStarted: func
};

export default Game;
