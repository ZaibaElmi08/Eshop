import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AboutPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If token exists, set true, else false
  }, []);

  return (
    <div>
      {/* About Us Heading - Displayed First */}
      <div className="bg-gray-200 py-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Introduction Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-center">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our eCommerce platform! We are dedicated to providing
            high-quality products at the best prices while ensuring a seamless
            and enjoyable shopping experience.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Who We Are</h3>
            <p className="text-gray-600 mt-3">
              We are a passionate team committed to bringing you the best in
              fashion, electronics, and lifestyle products. Our goal is to make
              online shopping easy, secure, and enjoyable for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Our Mission</h3>
            <p className="text-gray-600 mt-3">
              Our mission is to bridge the gap between quality and affordability,
              ensuring that every purchase you make is worthwhile. We prioritize
              customer satisfaction and continuously work to improve our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
