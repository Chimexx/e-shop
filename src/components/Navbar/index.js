import React from "react";
import { useSelector } from "react-redux";

//styles
import { Container, Wrapper } from "./Navbar.styles";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <div className="language">EN</div>
          <div className="searchContainer">
            <input type="text" placeholder="input" />
            <Search style={{ color: "grey", fontSize: 20 }} />
          </div>
        </div>
        <div className="center">
          <div className="logo">e-shop.</div>
        </div>
        <div className="right">
          <div className="menu-item">REGISTER</div>
          <div className="menu-item">SIGN IN</div>
          <Link to="/cart">
            <div className="menu-item">
              <div className="badge">
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </div>
            </div>
          </Link>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
