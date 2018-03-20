import React from 'react';

import './Navigation.css';

export const Navigation = () => {
  return (
    <header className="navigation">
      <div className="navigation__item active">
        <div className="navigation__item__content">Nav Item 1</div>
      </div>
      <div className="navigation__item">
        <div className="navigation__item__content">Nav Item 2</div>
      </div>
      <div className="navigation__item">
        <div className="navigation__item__content">Nav Item 3</div>
      </div>
    </header>
  );
};

export default Navigation;
