import React from "react";
import Navbar from "../../components/Navbar";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 text-center">
          Have questions? Feel free to reach out to us.
        </p>
        <div className="mt-4 text-center">
          <p className="text-gray-700"> Email: ecommerce@storee.com</p>
          <p className="text-gray-700"> Phone: +91 5656789860</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
