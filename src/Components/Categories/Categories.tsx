import React from 'react';
import './Categories.css'
import '../Scss/container.css'

function Categories() {
  return (
    <div>
      
       <nav className="navigation">
      <div className="container navigation__container">
        <ul className="navigation__list">
          <li className="navigation__item">
            <button className="navigation__button navigation__button_burger navigation__button_active">Бургеры</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_snack">Закуски</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_hot-dog">Хот-доги</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_combo">Комбо</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_shawarma">Шаурма</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_pizza">Пицца</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_wok">Вок</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_dessert">Десерты</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button navigation__button_sauce">Соусы</button>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Categories;