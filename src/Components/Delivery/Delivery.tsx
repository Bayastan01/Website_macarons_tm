import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import React from 'react'

// import {useTelegram} from '../hooks/useTelegram.js'
import './Delivery.css'
interface PersonProps {
	name: string
	age: number
	hobbies: Array<string>
	open: boolean
	setOpen: boolean
	codeOpen: boolean
}
function Delivery(props: { open: boolean; setOpen: boolean }) {
	const [YesOrNo, setYesOrNo] = React.useState(false)
	const [codeOpen, setCodeOpen] = React.useState(true)
	const [sendOpen, setSendOpen] = React.useState(true)
	const [I, setI] = React.useState(null)
	const [Iw, setIw] = React.useState(open)
	const [phone, setPhone] = React.useState('+996')
	const [inputValue, setInputValue] = React.useState(+996)
	// const {user, onClose} = useTelegram();
	const save = () => {
		props.setOpen(false)
	}
	const CodeOpen = () => {
		setCodeOpen(false)
		console.log(codeOpen)
	}
	const CodeOpen2 = () => {
		props.setOpen(false)
		setTimeout(() => setCodeOpen(true), 1000)
	}
	const ChangeNumber = () => {
		props.setOpen(true)
		setCodeOpen(true)
	}

	const SendNumber = () => {
		setSendOpen(false)
		return (
			<>
				<div className='center'>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
					<div className='wave'></div>
				</div>
			</>
		)
	}

	return (
		<>
			<div className='modal modal_delivery'>
				<div className='modal__main mdelivery'>
					<div className='mdelivery__container'>
						<h2 className='mdelivery__title'>Доставка</h2>

						{codeOpen === true ? (
							<form className='mdelivery__form'>
								<div className='mdelivery__fieldset'>
									<input
										className='mdelivery__input'
										type='text'
										name='name'
										placeholder='Ваше имя'
									/>
									<div className='mdelivery__flex_phone__numbers'>
										<input
											className='mdelivery__input'
											type='tl'
											name='phone'
											placeholder='+996 999-999999'
											value='+996'
											// onChange={e => handleInput(e)}
											// value={inputValue}
										/>
										<div className='mdelivery__image_phone'>
											<img
												className='mdelivery__image_phone__numbers'
												src='https://yt3.googleusercontent.com/ytc/AL5GRJWveMxT-E9mwNZeDjiBRRK_lEqd7yvC9pUhMxTjRQ=s900-c-k-c0x00ffffff-no-rj'
											/>
										</div>
									</div>
								</div>
								<div className='mdelivery__fieldset mdelivery__fieldset_radio'>
									<RadioGroup
										defaultValue='female'
										name='radio-buttons-group'
										sx={{ my: 2 }}
									>
										<Radio
											value='female'
											label=' Доставка'
											onClick={() => setYesOrNo(false)}
										/>
										<Radio
											value='male'
											label='Самовывоз'
											onClick={() => setYesOrNo(true)}
										/>
									</RadioGroup>
								</div>
								<div
									className='mdelivery__fieldset'
									style={{ display: YesOrNo === false ? 'block' : 'none' }}
								>
									<input
										className='mdelivery__input'
										type='text'
										name='address'
										placeholder='Улица, дом, квартира'
									/>
									<input
										className='mdelivery__input mdelivery__input_half'
										type='number'
										name='floor'
										placeholder='Этаж'
									/>
									<input
										className='mdelivery__input mdelivery__input_half'
										type='number'
										name='intercom'
										placeholder='Домофон'
									/>
								</div>
							</form>
						) : (
							<>
								<div
									className='mt9wcn-0 bhAylw sc-1iwyb4i-1 gbKdGX'
									data-error='false'
									data-testid='login-popup__code-input'
								>
									<div>
										<input
											type='tel'
											pattern='[0-9]*'
											data-id='0'
											className='sc-1iwyb4i-1 gbKdGX-0'
											value=''
										/>
										<input
											type='tel'
											pattern='[0-9]*'
											data-id='1'
											className='sc-1iwyb4i-1 gbKdGX-1'
											value=''
										/>
										<input
											type='tel'
											pattern='[0-9]*'
											data-id='2'
											className='sc-1iwyb4i-1 gbKdGX-2'
											value=''
										/>
										<input
											type='tel'
											pattern='[0-9]*'
											data-id='3'
											className='sc-1iwyb4i-1 gbKdGX-3'
											value=''
										/>
									</div>
								</div>
								<div onClick={SendNumber} className='sendPhoneNumber'>
									Send code again
								</div>
								<div onClick={ChangeNumber} className='ChangePhoneNumber'>
									Change number +996 702 *** *07
								</div>
							</>
						)}
						{codeOpen === true ? (
							<button
								className='mdelivery__submit'
								type='submit'
								form='delivery'
								onClick={CodeOpen}
							>
								Оформить
							</button>
						) : (
							<button
								className='mdelivery__submit'
								type='submit'
								form='delivery'
								onClick={CodeOpen2}
							>
								Оформить
							</button>
						)}
					</div>
					<button onClick={save} className='modal__close' type='button'>
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
		</>
	)
}

export default Delivery
