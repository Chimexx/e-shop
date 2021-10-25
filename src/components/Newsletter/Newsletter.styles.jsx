import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div`
	height: 50vh;
	background-color: #fcf5f5;
	display: flex;
	justify-content: center;

	${mobile({ height: '35vh' })}

	.title {
		font-size: 70px;
		margin-bottom: 20px;

		${mobile({ fontSize: '30px', marginBottom: '10px' })}
	}

	.desc {
		font-size: 24px;
		font-weight: 300;
		margin-bottom: 20px;
		${mobile({ fontSize: '16px', marginBottom: '10px' })}
	}

	.inputContainer {
		width: 60%;
		height: 40px;
		background-color: white;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid lightgray;

		${mobile({ width: '90%', height: '35px' })}
	}

	.inputContainer input {
		border: none;
		height: 30px;
		width: 90%;
		outline: none;
		font-size: 20px;
		padding: 0 20px;
		color: grey;

		${mobile({ fontSize: '16px' })}
	}

	Button {
		color: orangered;
	}
	.send {
		color: orangered;
		/* cursor: pointer; */
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 10px;
	width: 60vw;
	align-items: center;

	${mobile({ width: '90vw', margin: '5px' })}
`
