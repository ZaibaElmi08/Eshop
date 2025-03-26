import React from 'react';

const Category = ({ data }) => {
  const { name, image } = data;
  
  return (
    <div 
      className="card shadow-lg transition text-center"
    >
      <img 
        src={image} 
        className="card-img-top" 
        alt="category" 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
       
        <button className="btn btn-primary mt-6 shadow-sm">Select</button>
      </div>
    </div>
  );
};

export default Category;
