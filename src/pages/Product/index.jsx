import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'

//styles
import {
	Container,
	Wrapper,
	FilterColor,
	ImageContainer,
	Image,
	InfoContainer,
	Title,
	Price,
	FilterContainer,
	Desc,
	Filter,
	FilterTitle,
	FilterSize,
	FilterSizeContainer,
	FilterSizeOption,
	AddContainer,
	AmountContainer,
	Amount,
	Button,
} from './Product.styles'

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImageContainer>
					<Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png' />
				</ImageContainer>

				<InfoContainer>
					<Title>Title</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ea repellat obcaecati laborum, iusto consequatur rem.
					</Desc>
					<Price>$30</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color:</FilterTitle>
							<FilterColor color='black' />
							<FilterColor color='teal' />
							<FilterColor color='yellow' />
							<FilterColor color='blue' />
						</Filter>
						<FilterSizeContainer>
							<FilterTitle>Size:</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</FilterSizeContainer>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove style={{ cursor: 'pointer' }} />
							<Amount>12</Amount>
							<Add style={{ cursor: 'pointer' }} />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	)
}

export default Product
