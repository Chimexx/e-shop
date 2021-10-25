import React from 'react'
import { categories } from '../../data'
import CategoryItem from '../CategoryItem'

//styles
import { Container } from './Categories.styles'

const Categories = () => {
	return (
		<Container>
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</Container>
	)
}

export default Categories
