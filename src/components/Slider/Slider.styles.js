import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div`
/* margin: 1rem 4rem; */
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;

	${mobile({ display: 'none' })}

	

	`

export const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #f1f1f1;
	border-radius: 50%;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top:0;
	bottom: 0;
	margin: auto;
	left: ${props => props.direction === 'left' && '10px'};
	right: ${props => props.direction === 'right' && '10px'};
	cursor: pointer;
	opacity: 0.5;
	z-index: 3;
`

export const SlideWrapper = styled.div`
	height: 100% ;
	display:flex;
	transition: all 1s ease;
	transform: translateX(${props => props.slideIndex * -100}vw);

`
export const Slide = styled.div`

	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	/* overflow: hidden; */
	background-color: #${props => props.bg};

	.imageContainer{
		height: 80%;
		flex: 1;

		img{
			height: 90%;
			background-position: center;
			padding-left: 20%;
		}
	}
	.infoContainer{
		padding: 50px;
		flex: 1;

		.title h1{
			font-size: 70px;
		}
		.desc p{
			margin: 50px 0;
			font-size: 20px;
			font-weight: 500;
			letter-spacing: 2px;
		}
		.button button{
			padding: 10px;
			font-size: 20px;
			font-weight: 600;
			background-color: #f2f2f2;
			border: none;
			cursor: pointer;
			transition: all 1s;
			border-radius: 5px;
			color: orangered;

		}
		.button button:hover{
			background-color: orangered;
			color: white;
			
		}
	}
`
