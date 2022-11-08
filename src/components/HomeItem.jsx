import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const HomeItem = ({ item, handleAdd }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <center>
            <img src={item.image} alt="" height={150} width={150} />

            <h4>{item.category}</h4>
            <h3>{item.title.slice(0, 25) + "..."}</h3>
            <br />
            <Button 
            onClick={()=>handleAdd(item)}
            variant="contained">Add to cart</Button>
          </center>
        </CardContent>
      </Card>
    </Grid>
  );
};
