import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import '../Scss/count.css'
import '../Scss/order.css'
import '../Scss/product.css'
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
]

function Basket() {
	const [open, setOpen] = React.useState(false)
	const [openBasket, setOpenBasket] = React.useState(false)
	console.log(open)

	return (
		<>
			<div className='open__basket'>
				<input type='checkbox' id='check' />
				<label htmlFor='check'>
					<ShoppingCartIcon /> 12
					<i className='fas fa-bars' id='btn'></i>
					<i className='fas fa-times' id='cancel'></i>
				</label>
			</div>
			{/* <div className='catalog__order_order' onClick={() => setOpenBasket(true)}>
				<section className='order__wrapper'>
					<div className='order__header' role='button'>
						<span className='order__count'>
							4
							<svg
								width='13'
								height='11'
								viewBox='0 0 13 11'
								className='order_basket_line'
							>
								<path
									d='M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10'
									stroke='#000'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>
							</svg>
						</span>
					</div>
				</section>
			</div> */}

			{/* <div className="catalog__order_order" >
          <section className="order__wrapper" >
            <div className="order__header"  role="button" >
              <h2 className="order__title">Корзина</h2>
              <span className="order__count">4
              <svg  width="13" height="11" viewBox="0 0 13 11"  className='order_basket_line'>
                      <path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10"
                          stroke="#000" stroke-width="1.5" stroke-linecap="round"     stroke-linejoin="round">
                      </path>
                    </svg>
              </span>
            </div>
          </section>
        </div> */}
			{/* <div className="order__wrap_list">
              <ul className="order__list">
               {
                products.map((a)=>{
                  return(
                    <>
                     <li className="order__item">
                        <img className="order__image" src={a.image} alt="Супер сырный"/>
                        <div className="order__goods goods">
                          <h3 className="goods__title">{a.title}</h3>
                          <p className="goods__weight">512г</p>
                          <p className="goods__price">{a.price}
                            <span className="currency">₽</span>
                          </p>
                        </div>
                        <div className="count">
                          <button className="count__minus__and__pl">-</button>
                          <p className="count__amount">1</p>
                          <button className="count__minus__and__pl">+</button>
                        </div>
                      </li>
                    </>
                  )
                })
               }
              </ul>
            </div> */}
			{/* <div className="order__total">
                <p>Итого</p>
                <p>
                  <span className="order__amount">1279</span>
                  <span className="currency">₽</span>
                </p>
              </div>
              <button  onClick={() => setOpen(true)} className="order__submit">Оформить заказ</button>
              <div className="order__apeal">
                <p className="order__text">Бесплатная доставка</p>
                <button className="order__close">Свернуть</button>
              </div> */}
			{/* <Delivery open={open} setOpen={setOpen} /> */}
		</>
	)
}

export default Basket
