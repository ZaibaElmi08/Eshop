import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token exists in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/login",
          {
            usernameOrEmail: values.email,
            password: values.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data; // Ensure backend returns token
        if (!token) throw new Error("Token not received from server");

        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        alert("Login successful!");
        navigate("/");
      } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error);
        alert("Login failed! " + (error.response?.data?.message || "Please try again."));
      }
      setSubmitting(false);
    },
  });

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">{isLoggedIn ? "Welcome!" : "Login"}</h2>

        {isLoggedIn ? (
          // Logout Button when Logged In
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          // Login Form when Logged Out
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="text-danger">{formik.errors.email}</small>
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <small className="text-danger">{formik.errors.password}</small>
              )}
            </div>

            <button type="submit" className="btn btn-success w-100" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {!isLoggedIn && (
          <p className="text-center mt-3">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
