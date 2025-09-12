import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let Login = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  // Dummy authentication function
  const authenticate = (email, password) => {
    // Hardcoded example (replace with API later)
    const validEmail = "beta@gmail.com";
    const validPassword = "123456";

    return email === validEmail && password === validPassword;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // --- Option 1: Dummy authentication ---
    if (!authenticate(admin.email, admin.password)) {
      setError("Invalid email or password!");
      return;
    }

    // --- Option 2: API authentication (uncomment if you have API) ---
    /*
    try {
      let response = await fetch("http://localhost:8080/VidyaSarthi/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
      });

      if (!response.ok) throw new Error("Login failed");
      let data = await response.json();

      console.log("Login success:", data);

      // Example: save token to localStorage
      localStorage.setItem("token", data.token);
    } catch (err) {
      setError(err.message);
      return;
    }
    */

    // Redirect after login
    navigate("/admin/view");
  };

  return (
    <>
      <section className="login-section flex justify-around">
        {/* Left Section */}
        <div className="left-content">
          <h1>VIDYA SARTHI</h1>
          <h2>Welcome to Vidya Sarthi</h2>
          <p>
            A digital bridge between students and teachers, where teachers share
            knowledge and students access notes with ease.
          </p>
        </div>

        {/* Right Section */}
        <div className=" text-black landing-login">
          <h3 className="font-bold text-[20px]">Admin Login</h3>
          <hr className="w-1/2 text-left ml-0 mt-[10px]" />
          <p>Welcome onboard with us!</p>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 font-semibold text-sm mb-2">{error}</p>
          )}

          <form className="flex flex-col gap-[5px]" onSubmit={handleSubmit}>
            {/* Email */}
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

            {/* Password */}
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

            {/* Forgot Password */}
            <div className="extra">
              <a href="#" className="hover:text-yellow-300">
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              className="bg-amber-300 h-[40px] font-medium w-78 rounded-[20px]"
              type="submit"
            >
              LogIn As Admin
            </button>

            {/* Student */}
            <div className="flex items-center">
              <p className="">Are You student?</p>
              <Link to="/student-login" className="font-black">
                Login as student
              </Link>
            </div>

            {/* Teacher */}
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
    </>
  );
};

export default Login;
