import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div``
export const Wrapper = styled.div`
	padding: 20px;

	${mobile({ padding: '20px 10px' })}
`
export const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`
export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`
export const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: 1px solid grey;
	border-radius: 5px;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'orangered' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
`
export const TopTexts = styled.div``

export const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;

	${mobile({ display: 'none' })}
`
export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column' })}
`
export const Info = styled.div`
	flex: 3;
`
export const Product = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column', marginBottom: '10px' })}
`
export const ProductDetail = styled.div`
	flex: 2;
	display: flex;

	${mobile({ marginBottom: '10px' })}
`
export const Image = styled.img`
	width: 200px;

	${mobile({ width: '30vw' })}
`
export const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
export const ProductName = styled.span``
export const ProductId = styled.span``
export const ProductColor = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`
export const ProductSize = styled.span``
export const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	${mobile({
		flexDirection: 'row',
		justifyContent: 'space-between',
	})}
`
export const ProductAmountContainer = styled.div`
	width: 120px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	border-radius: 20px;
	background-color: #ececec;
`
export const ProductAmount = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid white;
	color: white;
	background-color: #bbbbbb;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`
export const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	margin-top: 20px;

	${mobile({ marginRight: '30px', marginBottom: '20px' })}
`
export const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`
export const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`
export const SummaryTitle = styled.h1`
	font-weight: 200;
`
export const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
`
export const SummaryItemText = styled.span`
	font-weight: ${(props) => (props.type === 'total' ? 800 : 100)};
`
export const SummaryItemPrice = styled.span`
	font-weight: ${(props) => (props.type === 'total' ? 800 : 100)};
`
export const Button = styled.button`
	height: 40px;
	padding: 5px 10px;
	border: 1px solid orangered;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 600;
	color: orangered;
	background-color: white;
	width: 100%;

	transition: ease all 0.3s;

	&:hover {
		background-color: orangered;
		color: white;
	}
`
// export const Container = styled.div``
