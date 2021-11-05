import { Add, Remove } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../RequestMethods";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

//styles
import {
  Container,
  Wrapper,
  FilterColor,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Price,
  FilterContainer,
  Desc,
  Filter,
  FilterTitle,
  FilterSize,
  FilterSizeContainer,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./Product.styles";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    } else {
      quantity > 1 && setQuantity((prev) => prev - 1);
    }
  };

  const handleCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>

        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> &#8358; {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((clr) => (
                <FilterColor
                  color={clr}
                  key={clr}
                  onClick={() => setColor(clr)}
                />
              ))}
            </Filter>
            <FilterSizeContainer>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                <FilterSizeOption disabled selected>
                  Size
                </FilterSizeOption>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </FilterSizeContainer>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
