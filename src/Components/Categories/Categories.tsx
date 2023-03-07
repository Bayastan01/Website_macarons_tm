import React from 'react'
import Basket from '../Basket/Basket'
import '../Scss/ScroolPadding.css'
import '../Scss/catalog.css'
import '../Scss/container.css'
import './Categories.css'
function Categories() {
	const [scrolls, setScrolls] = React.useState(false)
	const scroll = () => {
		setScrolls(true)
	}
	return (
		<nav className={scrolls === true ? 'nav' : 'navs'}>
			<div className='aside'>
				<nav className='navigation'>
					<div className='container navigation__container'>
						<ul className='navigation__list'>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_burger navigation__button_active'>
									Бургеры
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_snack'>
									Закуски
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_hot-dog'>
									Хот-доги
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_combo'>
									Комбо
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_shawarma'>
									Шаурма
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_pizza'>
									Пицца
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_wok'>
									Вок
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_dessert'>
									Десерты
								</button>
							</li>
							<li className='navigation__item'>
								<button className='navigation__button navigation__button_sauce'>
									Соусы
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className='catalog__basket'>
				<h2 className='catalog__title'>Бургеры</h2>
				<div className='catalog__basket__fixed' onClick={scroll}>
					<Basket />
				</div>
			</div>
		</nav>
	)
}

export default Categories
