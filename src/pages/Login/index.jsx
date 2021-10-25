import { Divider } from '@mui/material'
import React from 'react'

//styles
import {
	Container,
	Wrapper,
	Input,
	Title,
	Form,
	Signup,
	Button,
	ForgotPassword,
	Link,
	Footer,
} from './Login.styles'

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder='Username' />
					<Input placeholder='Password' />
					<Button>SIGN IN</Button>
				</Form>
				<Footer>
					<Divider style={{ marginTop: 20 }} />
					<Signup>
						Don't have an account? <Link>Register</Link>
					</Signup>
					<ForgotPassword>
						Forgot your password? <Link>Reset</Link>
					</ForgotPassword>
				</Footer>
			</Wrapper>
		</Container>
	)
}

export default Login
