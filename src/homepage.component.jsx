import React from "react";
import "./homepage.styles.sass";

const HomePage = () => (
  <div className="homepage">
    <div className="homepage-menu">
      <div className="homepage-menu__item">
        <div class="content">
          <h1 className="homepage-menu__title">ШАПКИ</h1>
          <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className="homepage-menu__item">
        <div class="content">
          <h1 className="homepage-menu__title">КУРТКИ</h1>
          <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className="homepage-menu__item">
        <div class="content">
          <h1 className="homepage-menu__title">КРОССОВКИ</h1>
          <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className="homepage-menu__item">
        <div class="content">
          <h1 className="homepage-menu__title">ДЛЯ ЖЕНЩИН</h1>
          <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className="homepage-menu__item">
        <div class="content">
          <h1 className="homepage-menu__title">ДЛЯ МУЖЧИН</h1>
          <span className="homepage-menu__subtitle">КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;