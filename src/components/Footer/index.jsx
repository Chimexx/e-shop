import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@mui/icons-material'
import React from 'react'

//styles
import { Container, SocialContainer, SocialIcon } from './Footer.styles'

const Footer = () => {
	return (
		<Container>
			<div className='left'>
				<div className='logo'>
					<h2>e-shop</h2>
				</div>
				<div className='desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatem totam eligendi modi magnam est velit dolores?
					Explicabo.
				</div>
				<SocialContainer>
					<SocialIcon color='3B5999'>
						<Facebook />
					</SocialIcon>
					<SocialIcon color='55ACEE'>
						<Twitter />
					</SocialIcon>
					<SocialIcon color='E4405F'>
						<Instagram />
					</SocialIcon>
					<SocialIcon color='E60023'>
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</div>
			<div className='center'>
				<h3 className='title'>Useful Links</h3>
				<ul className='list'>
					<li className='listItem'>Home</li>
					<li className='listItem'>Cart</li>
					<li className='listItem'>Men</li>
					<li className='listItem'>Women</li>
					<li className='listItem'>Accesories</li>
					<li className='listItem'>My Account</li>
					<li className='listItem'>Order Tracking</li>
					<li className='listItem'>Wish List</li>
					<li className='listItem'>Terms</li>
				</ul>
			</div>
			<div className='right'>
				<h3 className='title'>Contact</h3>
				<p className='contactItem'>
					<Room style={{ marginRight: 10 }} /> 54, Ahmadu bello, Abuja
				</p>
				<p className='contactItem'>
					<Phone style={{ marginRight: 10 }} /> +234 800 345 6789
				</p>
				<p className='contactItem'>
					<MailOutline style={{ marginRight: 10 }} /> shop@e-shop.com
				</p>
			</div>
		</Container>
	)
}

export default Footer
