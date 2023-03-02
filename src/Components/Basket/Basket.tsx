import React from 'react'

import '../Scss/count.css'
import '../Scss/order.css'
import '../Scss/product.css'
import './Basket.css'

function Basket() {
	const [open, setOpen] = React.useState(false)
	// const [openBasket, setOpenBasket] = React.useState(false)
	console.log(open)

	return (
		<>
			<input type='checkbox' id='check' />
			<label htmlFor='check'>
				<div>
					<section className='order__wrapper'>
						<div
							className='order__header'
							role='button'
							onClick={() => setOpen(true)}
						>
							<h2 className='order__title'>Корзина</h2>
							<h2 className='order__count'>4</h2>
						</div>
					</section>
				</div>
				<i className='fas fa-bars' id='btn'></i>
				<i className='fas fa-times' id='cancel'></i>
			</label>
		</>
	)
}

export default Basket
