import React from 'react';

import '../HomepageMenu.sass';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} homepage-menu__item`} >
    <div style={{backgroundImage: `url(${imageUrl})`}} className="homepage-menu__item__bg-img"></div>
    <div className="content">
      <h1 className="homepage-menu__title">{title.toUpperCase()}</h1>
      <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
    </div>
  </div>
);

export default MenuItem;