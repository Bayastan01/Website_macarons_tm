import Aos from 'aos'
import React from 'react'
import Basket from '../Basket/Basket'
import '../Scss/ScroolPadding.css'
import '../Scss/catalog.css'
import '../Scss/container.css'
import './Categories.css'

import { defineElement } from 'lord-icon-element'
import lottie from 'lottie-web'

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation)
function Categories() {
	const [scrolls, setScrolls] = React.useState(false)
	const [cate, setCate] = React.useState(0)
	const scroll = () => {
		setScrolls(true)
	}
	React.useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])
	const categories = [
		{ class: 'navigation__button_burger', name: 'Бургеры' },
		{ class: 'navigation__button_snack', name: 'Закуски' },
		{ class: 'navigation__button_hot-dog', name: 'Хот-доги' },
		{ class: 'navigation__button_combo', name: 'Комбо' },
		{ class: 'navigation__button_shawarma', name: 'Шаурма' },
		{ class: 'navigation__button_pizza', name: 'Пицца' },
		{ class: 'navigation__button_wok', name: 'Вок' },
		{ class: 'navigation__button_drink', name: 'Напитки' },

		{ class: 'navigation__button_dessert', name: 'Десерты' },
		{ class: 'navigation__button_sauce', name: 'Соусы' },
	]
	const categoryindex = index => {
		setCate(index)
	}
	return (
		<nav className={scrolls === true ? 'nav' : 'navs'}>
			<div className='aside'>
				<nav className='navigation'>
					<div className='container navigation__container'>
						<ul className='navigation__list'>
							{categories.map((category, index) => {
								return (
									<>
										<li className='navigation__item'>
											<button
												onClick={() => categoryindex(index)}
												className={`navigation__button ${category.class}  ${
													cate === index ? 'navigation__button_active' : ''
												}
									`}
											>
												{' '}
												{category.name}
											</button>
										</li>
									</>
								)
							})}
						</ul>
					</div>
				</nav>
			</div>
			<div className='catalog__basket'>
				<div data-aos='fade-right'>
					<h2 className='catalog__title'>Бургеры</h2>
				</div>

				<div className='catalog__basket__fixed' onClick={scroll}>
					<div data-aos='fade-left'>
						<Basket />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Categories
