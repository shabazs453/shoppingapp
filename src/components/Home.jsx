import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import { HomeItem } from "./HomeItem";
import { Search, sendData } from "./Search";
import "./home.css";

export const Home = ({handleAdd}) => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [categ, setCateg] = useState([]);
  const [catData, setCatData] = useState();
  const [search, setSearch] = useState("");
  const [txt, setTxt] = useState("");

  const recieved = useContext(sendData);
  console.log(recieved);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setFiltData(result.data);

    const result2 = await axios.get(
      "http://fakestoreapi.com/products/categories"
    );
    setCateg(result2.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = filtData.filter((item) => item.category === catData);
    setData(filtered);
  }, [catData]);

  useEffect(()=>{
      const filtered = filtData.filter(item=>item.category.toUpperCase().includes(txt.toUpperCase())
       || item.title.toUpperCase().includes(txt.toUpperCase())
       )
      setData(filtered)
  },[txt]);

  const handleAll=()=>{
    getData()
  };

  return (
    <div className="home">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setTxt(e.target.value)}
            sx={{ bgcolor: "white" }}
            variant="outlined"
            label="Search"
            style={{
              position: "absolute",
              marginLeft: "500px",
              marginTop: "-80px",
              width: "600px",
              height: "50px",
            }}
          />
                      <Button
                      onClick={()=>handleAll()}
                      style={{
                        position: "absolute",
                        marginLeft: "1150px",
                        marginTop: "-80px",
                    
                        height: "50px",
                      }}
                      variant="contained"
                      >
                        All Categories
                        </Button>

        </Grid>

        {categ.map((item) => (
          <Grid item xs={3}>
            <Button
              className="catButton"
              onClick={() => setCatData(item)}
              style={{ color: "white", marginLeft: "80px" }}
            >
              {item}
            </Button>
          </Grid>
        ))}

        {data.map((item) => {
          return (
            <>
              <HomeItem item={item} handleAdd={handleAdd} />
            </>
          );
        })}
      </Grid>
    </div>
  );
};
