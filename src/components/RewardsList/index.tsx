import { arrayOf, number, string } from 'prop-types';
import './style.scss';
import { RewardsListProps } from './types';

const RewardsList = ({ rewards, questionNumber }: RewardsListProps) => {
  const rewardsLength = rewards.length - 1;

  return (
    <ul className="game__rewards-list rewards-list">
      {rewards.map((reward, i) => {
        const reversedIndex = rewardsLength - i;
        let state = '';

        if (reversedIndex === questionNumber) {
          state = 'current';
        } else if (reversedIndex < questionNumber) {
          state = 'previous';
        }

        return (
          <li className={`rewards-list__item rewards-list__item--${state}`} key={reward}>
            <span className="top-hexagon"></span>
            <span className="rewards-list__text">{reward}</span>
            <span className="bottom-hexagon"></span>
          </li>
        );
      })}
    </ul>
  );
};

RewardsList.propTypes = {
  rewards: arrayOf(string),
  questionNumber: number
};

export default RewardsList;
