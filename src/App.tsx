import { defineElement } from 'lord-icon-element'
import lottie from 'lottie-web'
import { useState } from 'react'
import './App.css'
import './Components/Basket/Basket.css'
import BasketSave from './Components/Basket/BasketSave'
import Header from './Components/Header/Header'
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
		{
			logo: 'https://cdn.lordicon.com/etqbfrgp.json',
		},

		{
			logo: 'https://cdn.lordicon.com/qzwudxpy.json',
		},
		{
			logo: 'https://cdn.lordicon.com/dqxvvqzi.json',
		},
	]
	const [count, setCount] = useState(0)
	const [open, setOpen] = useState(true)
	const [counticon, setCounticon] = useState(0)
	const changeindex = index => {
		console.log(index)

		setCounticon(index)
		if (index === 2) {
			setOpen(false)
		} else {
			setOpen(true)
		}
	}

	const Onlockschange = i => {
		setCount(i)
		setOpen(true)
		console.log(open)
	}
	return (
		<>
			<BasketSave />
			<div
				className='modal modal_delivery'
				style={{ display: open === true ? 'none' : 'block' }}
			>
				<div className='settings_modal aaas'>
					<div className='mdelivery__containerr'>
						<h2 className='mdelivery__titles'>Настройка</h2>
						<div>
							<div className='color_body'>
								<span className='White  colors__body'></span>
								<span className='Blue colors__body'></span>
								<span className='Black colors__body'></span>
								<span className='Grey colors__body'></span>
								<span className='Red colors__body'></span>
							</div>
							<div className='section_lang'>
								<select className='custom-select'>
									{currencies.map(q => {
										return (
											<>
												<option value='0'>{q.label}</option>
											</>
										)
									})}
								</select>
							</div>
						</div>

						<div className='botton_setting_save'>
							<div className='botton_set_flex'>
								{dave.map((a, i) => {
									return (
										<>
											<div
												className={`changesavesetting ${
													count == i ? ' active__save' : ''
												}`}
												onClick={() => Onlockschange(i)}
											>
												{a}
											</div>
										</>
									)
								})}
							</div>
						</div>
					</div>
					<button
						onClick={() => Onlockschange()}
						className='modal__close'
						type='button'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='5.07422'
								y='5.28247'
								width='1'
								height='20'
								transform='rotate(-45 5.07422 5.28247)'
							/>
							<rect
								x='5.78125'
								y='19.4246'
								width='1'
								height='20'
								transform='rotate(-135 5.78125 19.4246)'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className='aktive_menu'>
				{menu.map((i, index) => {
					return (
						<>
							<div
								className={`icon_menu ${counticon === index ? 'aktive' : ''}`}
								onClick={() => changeindex(index)}
							>
								<lord-icon
									src={i.logo}
									trigger='hover'
									style={{ width: '40px', height: '40px' }}
								></lord-icon>
							</div>
						</>
					)
				})}
			</div>

			<Header />
		</>
	)
}

export default App

interface MessageExample {
	primary: string
	secondary: string
	person: string
}
const dave = ['not', 'save']
const currencies = [
	{
		value: '🇷🇺',
		label: '🇷🇺Русский',
		id: 3,
	},
	{
		value: '🇰🇬',
		label: '🇰🇬Кыргызча',
		id: 1,
	},

	{
		value: '🇱🇷',
		label: '🇱🇷English',
		id: 0,
	},
]
