import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

//styles
import { Container } from "./Product.styles";

const Product = ({ product }) => {
  return (
    <Container>
      <div className="image">
        <img src={product.img} alt="" />
      </div>
      <div className="circle"></div>
      <div className="info">
        <div className="icons">
          <ShoppingCartOutlined />
        </div>
        <div className="icons">
          <Link to={`/product/${product._id}`}>
            <Search />
          </Link>
        </div>
        <div className="icons">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </Container>
  );
};

export default Product;
