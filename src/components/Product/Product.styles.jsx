import styled from 'styled-components'

export const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	border-radius: 10px;
	position: relative;

	&:hover ${'.info'} {
		opacity: 1;
	}

	.image {
		z-index: 2;
	}

	.image img {
		height: 75%;
		width: 75%;
	}
	.circle {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		position: absolute;
		background-color: white;
	}

	.info {
		opacity: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all ease 0.5s;
		border-radius: 10px;
	}
	.info .icons {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
		transition: all ease-in-out 0.3s;

		&:hover {
			background-color: #ffc8b4;
			transform: scale(1.1);
		}
	}
`
