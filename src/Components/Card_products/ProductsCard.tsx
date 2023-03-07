import React from 'react'
import Podrobbyi from '../Podrob/Podrobbyi'
import '../Scss/catalog.css'
import '../Scss/product.css'
import './Product.css'
const products = [
	{
		image:
			'https://i.pinimg.com/564x/7e/eb/45/7eeb453310ebff3f254a5ec197220ee8.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/a1/dc/cb/a1dccbe8a2d4fc23d4e1810118f9be42.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/d4/39/7b/d4397b5d9a47bbd182b6286a28ab6f0c.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#EE6C4D',
	},
	{
		image:
			'https://i.pinimg.com/564x/3e/9b/13/3e9b139512db4fd3438ec4f5a5ac9a66.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/25/0f/1e/250f1e6cfd2ca7bcacbd0b6b2bc50a49.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#76C893',
	},
	{
		image:
			'https://i.pinimg.com/564x/1c/2a/b5/1c2ab5c8841a393a1a5db37ac10addb9.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#317AC7',
	},
	{
		image:
			'https://i.pinimg.com/564x/27/0b/11/270b11c8602bfaf81839d4034caa9f0c.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/c2/38/1c/c2381cc2052c4d4eb0d8f7db124ae2d4.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/8a/e8/f5/8ae8f516f3eb76a548deb728183b8052.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/7c/b1/97/7cb1971d1546ead182811ae359516f82.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/bc/ef/4c/bcef4cce05303f779643998d607ab919.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/db/cf/b7/dbcfb740985f4257f44c1dd407f49420.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#EE6C4D',
	},
	{
		image:
			'https://i.pinimg.com/564x/75/21/59/7521599676ddb121077de8584d695c53.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/d0/d8/37/d0d8371df414b84082b0ca85ccec55ab.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#76C893',
	},
	{
		image:
			'https://i.pinimg.com/564x/76/48/5b/76485b9a5fbf5009128abdf316b07df7.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#317AC7',
	},
	{
		image:
			'https://i.pinimg.com/564x/7e/eb/45/7eeb453310ebff3f254a5ec197220ee8.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/a1/dc/cb/a1dccbe8a2d4fc23d4e1810118f9be42.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/f8/5a/07/f85a0757cd92a9eb92c066daf79473a1.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/10/76/0f/10760f60f073a4702c56d8a601cfdcc2.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/ec/d8/8b/ecd88ba5b679e5e98cdb25f448dab666.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/d4/39/7b/d4397b5d9a47bbd182b6286a28ab6f0c.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#EE6C4D',
	},
	{
		image:
			'https://i.pinimg.com/564x/3e/9b/13/3e9b139512db4fd3438ec4f5a5ac9a66.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/25/0f/1e/250f1e6cfd2ca7bcacbd0b6b2bc50a49.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#76C893',
	},
	{
		image:
			'https://i.pinimg.com/564x/1c/2a/b5/1c2ab5c8841a393a1a5db37ac10addb9.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#317AC7',
	},
	{
		image:
			'https://i.pinimg.com/564x/27/0b/11/270b11c8602bfaf81839d4034caa9f0c.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#FFB901',
	},
	{
		image:
			'https://i.pinimg.com/564x/c2/38/1c/c2381cc2052c4d4eb0d8f7db124ae2d4.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#144E5A',
	},
	{
		image:
			'https://i.pinimg.com/564x/8a/e8/f5/8ae8f516f3eb76a548deb728183b8052.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/7c/b1/97/7cb1971d1546ead182811ae359516f82.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#592251',
	},
	{
		image:
			'https://i.pinimg.com/564x/bc/ef/4c/bcef4cce05303f779643998d607ab919.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#7CF6FD',
	},
	{
		image:
			'https://i.pinimg.com/564x/db/cf/b7/dbcfb740985f4257f44c1dd407f49420.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#EE6C4D',
	},
	{
		image:
			'https://i.pinimg.com/564x/75/21/59/7521599676ddb121077de8584d695c53.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#FFE2C8',
	},
	{
		image:
			'https://i.pinimg.com/564x/d0/d8/37/d0d8371df414b84082b0ca85ccec55ab.jpg',
		price: '18.60',
		title: 'Bag Burder',
		colors: '#76C893',
	},
	{
		image:
			'https://i.pinimg.com/564x/76/48/5b/76485b9a5fbf5009128abdf316b07df7.jpg',
		price: '18.60',
		title: 'Bag Burder ',
		colors: '#317AC7',
	},
]
function ProductsCard() {
	const [open, setOpen] = React.useState(false)
	const [openAdd, setOpenAdd] = React.useState(false)
	const [openAddcount, setOpenAddcount] = React.useState(0)

	const Add = () => {
		setOpenAdd(true)
		setOpenAddcount(+1)
	}
	return (
		<>
			<div className='catalog__wrapper'>
				<div className='catalog__wrap_list'>
					<ul className='catalog__list'>
						{products.map(a => {
							return (
								<>
									<li className='catalog__item'>
										<article className='product'>
											<img
												onClick={() => setOpen(true)}
												src={a.image}
												alt='Мясная бомба'
												className='product__image'
											/>

											<p className='product__price'>
												{a.price}
												<span className='currency'>₽</span>
											</p>

											<h3 className='product__title'>
												<button className='product__detail'>
													Мясная бомба
												</button>
											</h3>

											<p className='product__weight'>520г</p>
											{openAdd === false ? (
												<>
													<button className='cart-buttons' onClick={Add}>
														<span className='add-to-cart'>Добавить</span>
														<span className='added'></span>
														<i className='fa fa-shopping-cart'></i>
													</button>
												</>
											) : (
												<>
													<div className='flexadd'>
														<span
															className='pqt-minus'
															onClick={() => setOpenAddcount(openAddcount - 1)}
														>
															-
														</span>
														<button
															className='cart-button'
															onClick={() => setOpenAddcount(openAddcount + 1)}
														>
															<span className='add-to-cart'>
																{openAddcount}
															</span>
															<span className='added'></span>
															<i className='fa fa-shopping-cart'></i>
														</button>
														<span
															className='pqt-plus'
															onClick={() => setOpenAddcount(openAddcount + 1)}
														>
															+
														</span>
													</div>
												</>
											)}
										</article>
									</li>
								</>
							)
						})}
					</ul>
				</div>
				<Podrobbyi open={open} setOpen={setOpen} />
			</div>
		</>
	)
}

export default ProductsCard
