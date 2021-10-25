import { Button } from '@mui/material'
import React from 'react'

//styles
import { Container } from './CategoryItem.styles'

const CategoryItem = ({ category }) => {
	return (
		<Container>
			<div className='image'>
				<img src={category.img} />
			</div>
			<div className='info'>
				<div className='title'>
					<h2>{category.title}</h2>
					<Button variant='outlined' style={{ fontSize: 15 }}>
						SHOP NOW!
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default CategoryItem
