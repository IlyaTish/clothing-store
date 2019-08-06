import React from 'react';
import { withRouter } from 'react-router-dom';

import '../HomepageMenu.styles.sass';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} homepage-menu__item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
    <div style={{backgroundImage: `url(${imageUrl})`}} className="homepage-menu__item__bg-img"></div>
    <div className="content">
      <h1 className="homepage-menu__title">{title.toUpperCase()}</h1>
      <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
    </div>
  </div>
);

export default withRouter(MenuItem);