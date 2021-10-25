import styled from 'styled-components'
import bg from '../../assets/bg.jpg'
import { mobile } from '../../Responsive'

export const Container = styled.div`
	width: 100vw;
	height: 110vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.9)
		),
		url(${bg});
`
export const Wrapper = styled.div`
	padding: 20px;
	margin: 20px 0;
	width: 40%;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 20px;

	${mobile({ width: '80%' })}
`
export const Form = styled.div`
	display: flex;
	flex-wrap: wrap;

	${mobile({ display: 'block' })}
`
export const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`
export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 7px;
	font-size: 16px;
	font-weight: 500;
	outline: none;
	border: none;
	border-radius: 5px;
	color: #05021a;

	${mobile({ padding: '10px', flex: 'none', width: '94%' })}
`
export const Agreement = styled.span`
	font-size: 12px;
	margin-top: 20px;
	strong {
		color: orangered;
		cursor: pointer;
	}
`
export const Hr = styled.hr`
	height: 0.5px;
	color: #eee;
	margin: 20px 0;
`
export const Button = styled.button`
	margin-top: 20px;
	width: 100%;
	padding: 5px;
	border: 1px solid orangered;
	border-radius: 5px;
	background-color: orangered;
	color: white;
	transition: ease all 0.3s;

	&:hover {
		color: orangered;
		background-color: white;
	}
`
