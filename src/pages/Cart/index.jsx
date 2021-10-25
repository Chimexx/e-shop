import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

//styles
import {
	Container,
	Wrapper,
	Title,
	Top,
	TopButton,
	TopTexts,
	TopText,
	Bottom,
	Info,
	Summary,
	Image,
	Details,
	ProductName,
	ProductId,
	ProductColor,
	ProductSize,
	ProductDetail,
	PriceDetail,
	ProductAmountContainer,
	ProductAmount,
	Product,
	ProductPrice,
	Hr,
	Button,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
} from './Cart.styles'

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopButton type='filled'>CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png' />
								<Details>
									<ProductName>
										<strong>Product: </strong>Baseball Cap
									</ProductName>
									<ProductId>
										<strong>ID: </strong>84748949484748
									</ProductId>
									<ProductColor color='grey' />
									<ProductSize>
										<strong>Size: </strong>L
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Remove style={{ cursor: 'pointer' }} />
									<ProductAmount>12</ProductAmount>
									<Add style={{ cursor: 'pointer' }} />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src='https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png' />
								<Details>
									<ProductName>
										<strong>Product: </strong>Gown
									</ProductName>
									<ProductId>
										<strong>ID: </strong>84748949484748
									</ProductId>
									<ProductColor color='lightgray' />
									<ProductSize>
										<strong>Size: </strong>S
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Remove style={{ cursor: 'pointer' }} />
									<ProductAmount>4</ProductAmount>
									<Add style={{ cursor: 'pointer' }} />
								</ProductAmountContainer>
								<ProductPrice>$ 50</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>SubTotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping Cost
							</SummaryItemText>
							<SummaryItemPrice>$ 5.80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>-$ 5.80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText type='total'>
								Total
							</SummaryItemText>
							<SummaryItemPrice type='total'>
								$ 80
							</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default Cart
