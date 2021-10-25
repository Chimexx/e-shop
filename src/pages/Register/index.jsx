import React from 'react'

//styles
import {
	Container,
	Wrapper,
	Input,
	Title,
	Form,
	Agreement,
	Button,
	Hr,
} from './Register.styles'

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder='First name' />
					<Input placeholder='Last name' />
					<Input placeholder='Username' />
					<Input placeholder='Email' />
					<Input placeholder='Password' />
					<Input placeholder='Confirm Password' />
					<Hr />
					<Agreement>
						By creating an account, I consent to the processing of
						my personal data in accordance to our{' '}
						<strong>PRIVACY POLICY</strong>
					</Agreement>
					<Button>CREATE ACCOUNT</Button>
				</Form>
			</Wrapper>
		</Container>
	)
}

export default Register
