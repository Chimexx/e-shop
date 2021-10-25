import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div`
	.filterContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		/* margin-right: 0px; */
		${mobile({
			alignItems: 'flex-start',
		})}
	}

	.filter {
		${mobile({
			display: 'flex',
			flexDirection: 'column',
		})}
	}

	.filterText {
		font-size: 20px;
		font-weight: 600;
		margin-right: 20px;

		${mobile({ marginRight: '0px' })}
	}
`

export const Select = styled.select`
	padding: 10px;
	margin-right: 14px;

	${mobile({ margin: '10px 0px' })}
`
export const Option = styled.option`
	font-size: 20px;
`
export const List = styled.div`
	margin: 20px 30px;
`
// export const Filter = styled.select``
// export const Select = styled.select``
