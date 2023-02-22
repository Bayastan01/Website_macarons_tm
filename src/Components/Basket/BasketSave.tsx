import './Basket.css'
export default function BasketS() {
	return (
		<>
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
			</div>
		</>
	)
}
