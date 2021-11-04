import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
export const ImageContainer = styled.div`
  padding: 0 30px;
  flex: 1;

  ${mobile({ padding: "30px" })}
`;
export const Image = styled.img`
  width: 100%;
  /* height: 100vh; */
  object-fit: cover;

  ${mobile({ height: "40vh" })}
`;

export const InfoContainer = styled.div`
  padding: 0 30px;
  flex: 2;

  ${mobile({ padding: "0px 10px" })}
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 30px 0;
  min-width: 100px;

  ${mobile({
    width: "100%",
    alignItems: "flex-start",
  })}
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterSizeContainer = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
export const Desc = styled.p`
  margin: 20px 0;

  ${mobile({ margin: "10px 0px" })}
`;
export const FilterSizeOption = styled.option`
  font-size: 14px;
  padding: 5px;
`;
export const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ width: "100%", marginBottom: "20px" })}
`;
export const AmountContainer = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 20px;
  background-color: #ececec;
`;
export const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  color: white;
  background-color: #bbbbbb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
export const Button = styled.button`
  height: 40px;
  padding: 5px 10px;
  border: 1px solid orangered;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: orangered;
  background-color: white;
  min-width: 100px;

  transition: ease all 0.3s;

  &:hover {
    background-color: orangered;
    color: white;
  }

  .quantity {
    cursor: pointer;
  }
`;
