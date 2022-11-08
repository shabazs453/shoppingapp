import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import {Cart} from "./components/Cart";
import {MyProfile} from "./components/MyProfile";

function App() {
    
  const [cartItems, setCartItems] = useState([]);

  const handleAdd=(product)=>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map(item => item.id === product.id ? 
        {...ProductExist, quantity: ProductExist.quantity + 1} : item))
    }else{
      setCartItems([...cartItems, {...product, quantity : 1}])
    }
    console.log(product)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} handleAdd={handleAdd} />
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>} cartItems={cartItems} handleAdd={handleAdd} />
          <Route path="/myprofile" element={<MyProfile/>} />
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
