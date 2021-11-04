import React, { useState } from "react";
import { useLocation } from "react-router";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";

//styles
import { Container, Option, Select, List } from "./ProductList.styles";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <List>
        <h1 className="title">Dresses</h1>
        <div className="filterContainer">
          <div className="filter">
            <span className="filterText"> Filter Products:</span>
            <Select name="color" onChange={handleFilters}>
              <Option>Color</Option>
              <Option value="white">White</Option>
              <Option value="black">Black</Option>
              <Option value="red">Red</Option>
              <Option value="blue">Blue</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="green">Green</Option>
            </Select>

            <Select name="size" onChange={handleFilters}>
              <Option>Size</Option>
              <Option>S</Option>
              <Option>XS</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </div>
          <div className="filter">
            <span className="filterText"> Sort Products:</span>
            <Select onClick={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (Lowest)</Option>
              <Option value="desc">Price (Highest)</Option>
            </Select>
          </div>
        </div>
      </List>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
