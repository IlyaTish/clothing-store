import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.sass";

const Header = ({ currentUser }) => (
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
      {
        currentUser ?
        <div className="header-menu__link" onClick={() => auth.signOut()}>ВЫЙТИ</div>
        :
        <Link className="header-menu__link" to="/signin">ВОЙТИ</Link>
      }
    </div>
  </header>
);

export default Header;