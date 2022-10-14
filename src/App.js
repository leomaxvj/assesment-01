import './App.css';
import axios from 'axios';
import AddProduct from './Components/AddProduct';
import { useState, useEffect } from "react";
import ProductsData from './Components/ProductsData';
function App(newProduct) {
  let url = 'http://localhost:3000/products';
  // Write Your Code Here
  
    axios.post(`${url}`,newProduct)
    axios.get(`${url}`);


  
  return (
    <div className="App">
      {/* Write Your Code Here */}    
      <AddProduct/>  
      <ProductsData/>
    </div>
  );
}

export default App;
