import { bool, func, string } from 'prop-types';
import backgroundImg from '../../images/game-start-bg.png';
import logo from '../../images/logo.svg';
import './style.scss';
import { HomeScreenProps } from './types';

const HomeScreen = ({ gameFinished, setGameStarted, reward }: HomeScreenProps) => {
  return (
    <div className="home" style={gameFinished ? {} : { backgroundImage: `url(${backgroundImg})` }}>
      <section className="home__section">
        <img className="home__hand" src={logo} alt="hand" />

        <div className="home__inner">
          {gameFinished ? (
            <>
              <p className="home__score">Total Score:</p>
              <h2 className="home__title">{`${reward} earned`}</h2>
            </>
          ) : (
            <h1 className="home__title">Who wants to be a millionaire?</h1>
          )}

          <button className="home__button" onClick={() => setGameStarted(true)}>
            {gameFinished ? 'Try Again' : 'Start'}
          </button>
        </div>
      </section>
    </div>
  );
};

HomeScreen.propTypes = {
  gameFinished: bool,
  setGameStarted: func,
  reward: string
};

export default HomeScreen;
