import React from "react";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";

export const NavItem = ({to, xs, name}) => {

    return(
    
            <Grid item xs ={xs} >
                <Link to={to} >{name}</Link>
            </Grid>
    )
}