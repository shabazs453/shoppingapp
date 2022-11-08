import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src={item.image} alt="" height={150} width={150} />

              <h4>{item.category}</h4>
              <h3>{item.title.slice(0, 25) + "..."}</h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};
