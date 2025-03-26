import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ data }) => {
  const { id, title, price, category, images } = data;
  const navigate = useNavigate(); 

  return (
    <div className="card shadow-lg transition text-center">
      <img 
        src={images[0]} 
        className="card-img-top" 
        alt="product" 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>Price: </strong>${price} <br /><br />
          <span>{category.name}</span>
        </p>
        
       
        <button 
          className="btn btn-primary mt-3 shadow-sm" 
          onClick={() => navigate(`/products/${id}`)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Product;
