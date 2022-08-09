import { func } from 'prop-types';
import { useState } from 'react';
import './style.scss';
import { MobileButtonProps } from './types';

const MobileButton = ({ setShowRewards }: MobileButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
    setShowRewards((prev) => !prev);
  };

  return (
    <div className="game__mobile-btn btn-wrapper" onClick={handleClick}>
      <div className={`btn ${open ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

MobileButton.propTypes = {
  setShowRewards: func
};

export default MobileButton;
