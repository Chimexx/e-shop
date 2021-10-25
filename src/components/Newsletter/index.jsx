import React from 'react'

//styles
import { Send } from '@mui/icons-material'
import { Container, Wrapper } from './Newsletter.styles'
import { Button } from '@mui/material'

const Newsletter = () => {
	return (
		<Container>
			<Wrapper>
				<div className='title'>News Letter</div>
				<div className='desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Commodi ratione dolor quaerat quisquam eius velit
					accusantium repellendus aliquam, nemo et.
				</div>
				<div className='inputContainer'>
					<input placeholder='Enter your email' type='text' />
					<Button style={{ fontSize: 15 }}>
						<Send className='send' />
					</Button>
				</div>
			</Wrapper>
		</Container>
	)
}

export default Newsletter
