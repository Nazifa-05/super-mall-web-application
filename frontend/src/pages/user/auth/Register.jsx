import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.includes("Name")
        ? "name"
        : e.target.type === "email"
        ? "email"
        : e.target.placeholder.includes("Confirm")
        ? "confirmPassword"
        : "password"]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F25278]/10 via-white to-[#F25278]/20 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#F25278] text-white py-3 rounded-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-[#F25278]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;