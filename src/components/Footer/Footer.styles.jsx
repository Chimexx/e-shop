import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div`
	display: flex;
	background-color: #eee;
	${mobile({ backgroundColor: '#eee' })}

	${mobile({ flexDirection: 'column' })}

	.left {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 20px;

		.logo {
		}

		.desc {
			margin: 20px 0px;
		}
	}
	.center {
		flex: 1;
		padding: 20px;

		${mobile({ display: 'none' })}
		.title {
			margin-bottom: 30px;
		}
		.list {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;
		}
		.listItem {
			width: 50%;
			margin-bottom: 5px;
		}
	}
	.right {
		flex: 1;
		padding: 20px;

		.title {
			margin-bottom: 20px;
		}

		.contactItem {
			display: flex;
			margin-bottom: 20px;
			align-items: center;
		}
	}
`

export const SocialContainer = styled.div`
	display: flex;
`
export const SocialIcon = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #${(props) => props.color};
	color: white;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`
