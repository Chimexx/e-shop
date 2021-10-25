import {
	FavoriteBorderOutlined,
	Search,
	ShoppingCartOutlined,
} from '@mui/icons-material'
import React from 'react'

//styles
import { Container } from './Product.styles'

const Product = ({ product }) => {
	return (
		<Container>
			<div className='image'>
				<img src={product.img} alt='' />
			</div>
			<div className='circle'></div>
			<div className='info'>
				<div className='icons'>
					<ShoppingCartOutlined />
				</div>
				<div className='icons'>
					<Search />
				</div>
				<div className='icons'>
					<FavoriteBorderOutlined />
				</div>
			</div>
		</Container>
	)
}

export default Product
