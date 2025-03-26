import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Link} from 'react-router-dom'


const RegisterPage = () => {
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    const formattedValues = {
      email: values.email,
      name: values.firstName,
      password: values.password,
      username: values.email,
      role: "USER", // Explicitly setting role
    };
  
    axios
      .post("http://localhost:8080/api/auth/register", formattedValues, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log("User Registered Successfully:", response.data);
        alert("User Registered Successfully");
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error);
        alert(`User Registration Failed: ${error.response?.data?.message || "Unknown Error"}`);
      });
  };
  
  
  
  const validate = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && (
              <small className="text-danger">{formik.errors.firstName}</small>
            )}
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <small className="text-danger">{formik.errors.email}</small>
            )}
          </div>

          <div className="form-group mb-3">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />
            {formik.errors.mobile && (
              <small className="text-danger">{formik.errors.mobile}</small>
            )}
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <small className="text-danger">{formik.errors.password}</small>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already Registered? <Link to="/login">Click Here</Link>

        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
