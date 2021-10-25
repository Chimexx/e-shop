import React from 'react'
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Products from '../../components/Products'

//styles
import { Container, Option, Select, List } from './ProductList.styles'

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<List>
				<h1 className='title'>Dresses</h1>
				<div className='filterContainer'>
					<div className='filter'>
						<span className='filterText'> Filter Products:</span>
						<Select>
							<Option disabled selected>
								Color
							</Option>
							<Option>White</Option>
							<Option>Black</Option>
							<Option>Red</Option>
							<Option>Blue</Option>
							<Option>Yellow</Option>
							<Option>Green</Option>
						</Select>

						<Select>
							<Option disabled selected>
								Size
							</Option>
							<Option>S</Option>
							<Option>XS</Option>
							<Option>M</Option>
							<Option>L</Option>
							<Option>XL</Option>
						</Select>
					</div>
					<div className='filter'>
						<span className='filterText'> Sort Products:</span>
						<Select>
							<Option selected>Newest</Option>
							<Option>Price (Lowest)</Option>
							<Option>Price (Highest)</Option>
						</Select>
					</div>
				</div>
			</List>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	)
}

export default ProductList
