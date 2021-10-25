import React from 'react'

//styles
import { Container, Wrapper } from './Navbar.styles'
import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<div className="left">
					<div className="language">
						EN
					</div>
					<div className="searchContainer">
						<input type="text"
							placeholder='input' />
						<Search style={{ color: 'grey', fontSize: 20 }} />
					</div>
				</div>
				<div className="center">
					<div className="logo">
						e-shop.
					</div>
				</div>
				<div className="right">
					<div className="menu-item">REGISTER</div>
					<div className="menu-item">SIGN IN</div>
					<div className="menu-item">
						<div className="badge">
							<Badge badgeContent={4} color="primary"><ShoppingCartOutlinedIcon /></Badge>
						</div>
					</div>
				</div>
			</Wrapper>
		</Container>)
}

export default Navbar
