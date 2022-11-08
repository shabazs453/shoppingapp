import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";
import { Search } from "./Search";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./nav.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <Grid container spacing={2}>
        <NavItem to="/home" xs={2} name="Home" />
        <NavItem to="/productdetail" xs={2} name="Product Details" />
        {/* <Search /> */}
        <Grid item xs={6}></Grid>
        <NavItem
          to="/cart"
          xs={1}
          name={<AddShoppingCartOutlinedIcon fontSize="large" />}
        />
        <NavItem
          to="/myprofile"
          xs={1}
          name={<AccountCircleOutlinedIcon fontSize="large" />}
        />
      </Grid>
    </div>
  );
};
