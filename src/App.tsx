import { useState } from 'react'
import './App.css'
import BasketSave from './Components/Basket/BasketSave'
import ProductsCard from './Components/Card_products/ProductsCard'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import './Components/Scss/ScroolPadding.css'
import './Components/Scss/catalog.css'
import './Components/Scss/goods.css'
import './Components/Scss/index.css'
import './Components/Scss/ingredients.css'
import './Components/Scss/normalize.css'

function App() {
	const [count, setCount] = useState(0)
	return (
		<>
			<BasketSave />
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
