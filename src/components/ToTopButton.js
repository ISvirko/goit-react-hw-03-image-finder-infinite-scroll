import React from 'react';

const ToTopButton = ({ atTheTop, toggleButton }) => (
  <button
    type="button"
    className={atTheTop ? 'ToBottomBtn' : 'ToTopBtn'}
    onClick={toggleButton}
  ></button>
);

export default ToTopButton;
