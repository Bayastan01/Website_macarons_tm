import React from 'react'
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
}

import Delivery from '../Delivery/Delivery'
import './Basket.css'
const products = [
	{
		image:
			'https://i.pinimg.com/564x/7e/eb/45/7eeb453310ebff3f254a5ec197220ee8.jpg',
		price: '$185.60',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/a1/dc/cb/a1dccbe8a2d4fc23d4e1810118f9be42.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '$185.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/7e/eb/45/7eeb453310ebff3f254a5ec197220ee8.jpg',
		price: '$185.60',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/a1/dc/cb/a1dccbe8a2d4fc23d4e1810118f9be42.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '$185.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '$185.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '$185.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '$185.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
]

export default function BasketSave() {
	const [open, setOpen] = React.useState<boolean>(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<>
			<div style={{ display: open === true ? 'block' : 'none' }}>
				<Delivery open={open} setOpen={setOpen} />
			</div>
			<div
				className='sc-1v5x861-0 fGsVWz'
				style={{ opacity: 1, display: open === false ? 'block' : 'none' }}
			>
				<input type='checkbox' id='check' />
				<label htmlFor='check'></label>
				<div className='sidebar'>
					<header>My Menu</header>

					<button className='button-close'>
						<input type='checkbox' id='check' />
						<label htmlFor='check'>
							<svg
								width='25'
								height='25'
								viewBox='0 0 25 25'
								fill='none'
								className='close'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
									fill='rgb(247, 116, 68)'
								></path>
							</svg>
						</label>
					</button>

					<div className='order__wrap_list'>
						<ul className='order__list'>
							{products.map(a => {
								return (
									<>
										<li className='order__item'>
											<img
												className='order__image'
												src={a.image}
												alt='Супер сырный'
											/>
											<div className='order__goods goods'>
												<h3 className='goods__title'>{a.title}</h3>
												<p className='goods__weight'>512г</p>
												<p className='goods__price'>
													{a.price}
													<span className='currency'>₽</span>
												</p>
											</div>
											<div className='count'>
												<button className='count__minus__and__pl'>-</button>
												<p className='count__amount'>1</p>
												<button className='count__minus__and__pl'>+</button>
											</div>
										</li>
									</>
								)
							})}
						</ul>
					</div>
					<div className='order__total'>
						<p>Итого</p>
						<p>
							<span className='order__amount'>1279</span>
							<span className='currency'>₽</span>
						</p>
					</div>
					<div className='order__total'>
						<button className='order__submit' onClick={handleOpen}>
							Оформить заказ
						</button>
					</div>
					<div className='order__apeal'>
						<p className='order__text'> Вышее 1500$ Бесплатная доставка</p>
					</div>
				</div>
			</div>
		</>
	)
}
