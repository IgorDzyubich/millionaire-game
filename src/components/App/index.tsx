import { useState } from 'react';

import Game from '../../pages/Game';
import HomeScreen from '../../pages/HomeScreen';
import '../../styles/globalStyles.scss';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [reward, setReward] = useState('');

  return (
    <main>
      {gameStarted ? (
        <Game
          setGameFinished={setGameFinished}
          setReward={setReward}
          setGameStarted={setGameStarted}
        />
      ) : (
        <HomeScreen gameFinished={gameFinished} reward={reward} setGameStarted={setGameStarted} />
      )}
    </main>
  );
};

export default App;
