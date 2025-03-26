import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category'; 


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setCategories(response.data.slice(0, 6)); 
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Category Gallery</h2>

      
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <Category data={category} />
          </div>
        ))}
      </div>

      
      {/* <div className="text-center mt-3">
        <button className="btn btn-primary btn-lg shadow-lg">View More</button>
      </div> */}
    </div>
  );
};

export default CategoryList;
