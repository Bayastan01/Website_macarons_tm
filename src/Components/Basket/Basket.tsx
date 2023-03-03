import Badge, { BadgeProps } from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import React from 'react'
import '../Scss/count.css'
import '../Scss/order.css'
import '../Scss/product.css'
import './Basket.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))
function Basket() {
	const [open, setOpen] = React.useState(false)
	const [openBasketList, setOpenBasketList] = React.useState(false)
	// const [openBasket, setOpenBasket] = React.useState(false)
	console.log(open)
	const OpenBasketList = () => {
		setOpenBasketList(true)
	}
	return (
		<>
			<section
				className='order__wrapper'
				style={{ display: openBasketList ? 'none' : 'block' }}
			>
				<IconButton aria-label='cart' onClick={OpenBasketList}>
					<Badge style={{ color: '#ff5c00' }} badgeContent={1} showZero>
						<input type='checkbox' id='check' />
						<label htmlFor='check'>
							<ShoppingCartIcon />
							<i className='fas fa-bars' id='btn'></i>
							<i className='fas fa-times' id='cancel'></i>
						</label>
					</Badge>
				</IconButton>

				{/* <div
							className='order__header'
							role='button'
							onClick={() => setOpen(true)}
						>
							<h2 className='order__title'>Корзина</h2>
							<h2 className='order__count'>4</h2>
						</div> */}
			</section>
		</>
	)
}

export default Basket
