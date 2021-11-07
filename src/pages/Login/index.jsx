import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

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
  Error,
} from "./Login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button disabled={isFetching} onClick={handleLogin}>
            SIGN IN
          </Button>
          {error && <Error>Something went wrong, please try again.</Error>}
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
  );
};

export default Login;
