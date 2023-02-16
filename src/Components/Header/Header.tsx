import React from 'react';
import './Header.css'
import '../Scss/goods.css'
import '../Scss/normalize.css'
function Header() {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <img className="header__logo" src="img/logo.svg" alt="Логотип YourMeal"/>

          <div className="header__wrapper">
            <h1 className="header__title">
              <span>Только самые</span>
              <span className="header__red">сочные macarons!</span>
            </h1>

            <p className="header__appeal">Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;