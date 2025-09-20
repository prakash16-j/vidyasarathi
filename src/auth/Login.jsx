// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  // 🔒 Hardcoded login for testing without backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = admin;

    // ✅ Default credentials for testing
    if (email === "admin@gmail.com" && password === "1234") {
      login({
        email,
        role: "admin",
        token: "default-token-1234",
      });

      navigate("/admin");
    }
  };

  /*
  // 🔁 Original backend login logic (commented out for now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/VidyaSarthi/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      console.log("Login success:", data);

      login({
        email: data.email || "admin@gmail.com",
        role: data.role || "admin",
        token: data.id || "1234",
      });

      navigate("/admin/view");
    } catch (err) {
      setError(err.message);
    }
  };
  */

  return (
    <section className="login-section flex justify-around">
      <div className="left-content">
        <h1>VIDYA SARTHI</h1>
        <h2>Welcome to Vidya Sarthi</h2>
        <p>
          A digital bridge between students and teachers, where teachers share
          knowledge and students access notes with ease.
        </p>
      </div>

      <div className="text-black landing-login">
        <h3 className="font-bold text-[20px]">Admin Login</h3>
        <hr className="w-1/2 text-left ml-0 mt-[10px]" />
        <p>Welcome onboard with us!</p>

        {error && (
          <p className="text-red-500 font-semibold text-sm mb-2">{error}</p>
        )}

        <form className="flex flex-col gap-[5px]" onSubmit={handleSubmit}>
          <label htmlFor="email">Admin Email ID</label>
          <input
            className="bg-blue-100 h-[40px] font-bold rounded-[20px] placeholder:text-center"
            type="email"
            id="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="bg-blue-100 border-2 h-[40px] font-bold rounded-[20px] placeholder:text-center"
            type="password"
            id="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <div className="extra">
            <a href="#" className="hover:text-yellow-300">
              Forgot Password?
            </a>
          </div>

          <button
            className="bg-amber-300 h-[40px] font-medium w-78 rounded-[20px]"
            type="submit"
          >
            LogIn As Admin
          </button>

          <div className="flex items-center">
            <p>Are You student?</p>
            <Link to="StudentLogin" className="font-black">
              Login as student
            </Link>
          </div>

          <Link to="/teacher-login">
            <div>
              <p className="inline">Are You Teacher?</p>
              <span className="font-black hover:text-amber-300">
                Login as Teacher
              </span>
            </div>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
