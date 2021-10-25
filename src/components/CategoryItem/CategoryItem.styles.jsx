import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;

	.image img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
		border-radius: 10px;

		${mobile({ height: '20vh' })}
	}

	.info {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.info .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.info .title h2 {
		color: white;
		margin-bottom: 20px;
	}

	.info .title button {
		padding: 10px;
		font-size: 15px;
		font-weight: 600;
		background-color: #f2f2f2;
		border: none;
		cursor: pointer;
		transition: all 0.5s;
		border-radius: 5px;
		color: orangered;
	}
	.button button:hover {
		background-color: orangered;
		color: white;
	}
`
