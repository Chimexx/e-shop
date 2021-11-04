import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

//styles
import { Container } from "./CategoryItem.styles";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <div className="image">
          <img src={category.img} alt="" />
        </div>
        <div className="info">
          <div className="title">
            <h2>{category.title}</h2>
            <Button variant="outlined" style={{ fontSize: 15 }}>
              SHOP NOW!
            </Button>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default CategoryItem;
