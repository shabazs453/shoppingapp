import React, { createContext, useState } from "react";
import { Grid, TextField } from "@mui/material";

export const sendData = createContext();
export const Search = ({ item }) => {
  const [txt, setTxt] = useState("");

  return (
    <Grid item xs={4}>
      <TextField
        onChange={(e) => setTxt(e.target.value)}
        sx={{ bgcolor: "white" }}
        variant="outlined"
        label="Search"
        fullWidth
      />
    </Grid>
  );
};
