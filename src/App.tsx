import { useState } from 'react'
import './App.css'
import BasketSave from './Components/Basket/BasketSave'
import ProductsCard from './Components/Card_products/ProductsCard'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

import { defineElement } from 'lord-icon-element'
import lottie from 'lottie-web'
import './Components/Basket/Basket.css'
import './Components/Scss/ScroolPadding.css'
import './Components/Scss/catalog.css'
import './Components/Scss/goods.css'
import './Components/Scss/index.css'
import './Components/Scss/ingredients.css'
import './Components/Scss/normalize.css'

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation)

function App() {
	const menu = [
		<lord-icon
			src='https://cdn.lordicon.com/etqbfrgp.json'
			trigger='hover'
			style={{ width: '40px', height: '40px' }}
		></lord-icon>,

		<lord-icon
			src='https://cdn.lordicon.com/qzwudxpy.json'
			trigger='hover'
			style={{ width: '40px', height: '40px' }}
		></lord-icon>,
		<lord-icon
			src='https://cdn.lordicon.com/dqxvvqzi.json'
			trigger='hover'
			style={{ width: '40px', height: '40px' }}
		></lord-icon>,
	]
	const [count, setCount] = useState(0)
	const [counticon, setCounticon] = useState(0)
	const changeindex = index => {
		setCounticon(index)
	}
	return (
		<>
			<BasketSave />
			<div className='aktive_menu'>
				{menu.map((i, index) => {
					return (
						<>
							<div
								className={`icon_menu ${counticon === index ? 'aktive' : ''}`}
								onClick={() => changeindex(index)}
							>
								{i}
							</div>
						</>
					)
				})}
			</div>

			<Header />
			<Categories />
			<main>
				<section className='catalog'>
					<div className='container catalog__container'>
						<ProductsCard />
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}

export default App

interface MessageExample {
	primary: string
	secondary: string
	person: string
}
