import React from 'react'
import Delivery from '../Delivery/Delivery'
import './Basket.css'
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
const products = [
	{
		image:
			'https://i.pinimg.com/564x/7e/eb/45/7eeb453310ebff3f254a5ec197220ee8.jpg',
		price: '18',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/a1/dc/cb/a1dccbe8a2d4fc23d4e1810118f9be42.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '18',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/7e/eb/45/7eeb453310ebff3f254a5ec197220ee8.jpg',
		price: '18',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/a1/dc/cb/a1dccbe8a2d4fc23d4e1810118f9be42.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '18',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '18',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '18',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '18',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
]

export default function BasketSave() {
	const [indecount, setIndecount] = React.useState<number>(1)
	const [open, setOpen] = React.useState<boolean>(false)
	const [close, setClose] = React.useState<boolean>(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const In = () => {
		setIndecount(indecount - 1)
		if (indecount <= 1) {
			const yesornos = confirm('Вы дествительно хотите удалить?', 'jok')
			if (yesornos === true) {
				setIndecount(indecount - 1)

				setIsDeleting(true)
				// const res = await deleteUser() setIsDeleting (false);
				setIsDeleted(true)
				setTimeout(() => setIsDeleted(false), 2000)
			} else {
				setIndecount(indecount)
			}
		} else {
			setIndecount(indecount - 1)
		}
	}

	const De = () => {
		setIndecount(indecount + 1)
	}
	const Close = () => {
		setTimeout(() => {
			setClose(true)
		}, 1000)
	}

	const [isDeleting, setIsDeleting] = React.useState(false)
	const [isDeleted, setIsDeleted] = React.useState(false)
	const handleClick = async () => {
		const yesorno = confirm('Вы дествительно хотите удалить?')

		if (yesorno === true) {
			setIsDeleting(true)
			// const res = await deleteUser() setIsDeleting (false);
			setIsDeleted(true)
			setTimeout(() => setIsDeleted(false), 2000)
		}
	}
	return (
		<>
			<div style={{ display: open === true ? 'block' : 'none' }}>
				<Delivery open={open} setOpen={setOpen} />
			</div>
			<div
				className={close == false ? 'not' : 'sc-1v5x861-0 fGsVWz'}
				style={{ opacity: 1, display: open === false ? 'block' : 'none' }}
			>
				<input type='checkbox' id='check' />
				<label htmlFor='check'></label>
				<div className='sidebar'>
					<header>Basket</header>

					<div className='button-close '>
						<input type='checkbox' id='check' />
						<label htmlFor='check'>
							<svg
								width='25'
								height='25'
								viewBox='0 0 25 25'
								fill='none'
								className='close'
								onClick={Close}
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
									fill='rgb(247, 116, 68)'
								></path>
							</svg>
						</label>
					</div>

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
											<div className='button_delate'>
												<button
													onClick={handleClick}
													className={isDeleting || isDeleted ? 'deleting' : ''}
													disabled={isDeleting || isDeleted}
												>
													<span className='animation'>
														<span className='balls'></span>
														<span className='lid'></span>
														<span className='can'>
															<span className='filler'></span>
														</span>
													</span>
												</button>
												<div className='count'>
													<button
														className='count__minus__and__pl'
														onClick={In}
													>
														-
													</button>
													<p className='count__amount'>{indecount}</p>
													<button
														className='count__minus__and__pl'
														onClick={De}
													>
														+
													</button>
												</div>
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
						<p className='order__text'>
							{' '}
							Вышее 1500
							<span className='currency'>₽ </span>
							Бесплатная доставка
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
