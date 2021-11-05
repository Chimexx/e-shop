import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { PaystackButton } from "react-paystack";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

//styles
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Summary,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  ProductDetail,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  Product,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
} from "./Cart.styles";

const Cart = () => {
  const history = useHistory();
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const [email, setEmail] = useState("mezie.cjo@gmail.com");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const cart = useSelector((state) => state.cart);
  const amount = cart.total * 100;
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "CHECKOUT NOW",
    onSuccess: () => {
      setEmail("");
      setName("");
      setPhone("");
      history.push("/");
    },
    onClose: () => console.log("Transaction canceled"),
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <strong>Product: </strong>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <strong>ID: </strong>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <strong>Size: </strong>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove style={{ cursor: "pointer" }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add style={{ cursor: "pointer" }} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    &#8358; {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>NGN {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
              <SummaryItemPrice>$ 5.80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$ 5.80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total:</SummaryItemText>
              <SummaryItemPrice type="total">NGN {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <PaystackButton className="paystack-button" {...componentProps} />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
