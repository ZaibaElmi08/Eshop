import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product'; 
import Navbar from '../Navbar';

const ProductList = () => {
  
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(response.data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
   
    <div className="container py-5">
       <Navbar/>
      <h2 className="text-center mb-4" style={{paddingTop:"10px"}}>Product Gallery</h2>
      
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Product data={product} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
