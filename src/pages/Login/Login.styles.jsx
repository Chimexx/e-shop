import styled from "styled-components";
import bg from "../../assets/bg.jpg";
import { mobile } from "../../Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.9)
    ),
    url(${bg});
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;

  ${mobile({ padding: "10px", width: "90%" })}
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  ${mobile({ flexWrap: "no-wrap", padding: "10px" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;

  ${mobile({ padding: "10px" })}
`;
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

  ${mobile({ display: "block", flex: "none", minWidth: "95%" })}
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 50%;
  padding: 5px;
  border: 1px solid orangered;
  border-radius: 5px;
  background-color: orangered;
  color: white;
  transition: ease all 0.3s;

  &:disabled {
    background-color: #f7c7b5;
    color: #575757;
    cursor: not-allowed;
    border: 1px solid #f7c7b5;
  }

  ${mobile({ width: "100%" })}

  &:hover {
    color: orangered;
    background-color: white;
  }
`;
export const Signup = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
export const Footer = styled.div`
  ${mobile({ padding: "10px" })}
`;

export const ForgotPassword = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;
export const Link = styled.a`
  font-weight: 500;
  color: orangered;
  cursor: pointer;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
