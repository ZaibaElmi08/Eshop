import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <div className="text-center py-5">Loading...</div>;

  return (
    <div>
      <Navbar /> 
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.images[0]} alt={product.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>Price: ${product.price}</h4>
            <button className="btn btn-success mt-3">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
