import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.sass";

const Header = () => (
  <header className="header">
    <Link className="header__logo" to="/">
      <Logo className="logo" />
    </Link>

    <div className="header-menu">
      <Link className="header-menu__link" to="/shop">
        КАТАЛОГ
      </Link>
      <Link className="header-menu__link" to="/contacts">
        КОНТАКТЫ
      </Link>
    </div>
  </header>
);

export default Header;