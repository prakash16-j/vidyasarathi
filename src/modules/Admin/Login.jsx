import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let Login = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const authenticate = (email, password) => {
    const validEmail = "beta@gmail.com";
    const validPassword = "123456";
    return email === validEmail && password === validPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!authenticate(admin.email, admin.password)) {
      setError("Invalid email or password!");
      return;
    }

    navigate("/admin/view");
  };

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

  return (
    <>
      <section
        className="flex flex-col md:flex-row justify-around items-center text-white h-screen bg-[url('./assets/academic&adminzone.png')] bg-cover bg-center px-4 md:px-8"
      >
        {/* Left Section */}
        <div className="max-w-full md:max-w-[35%] md:ml-[100px] text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-[32px] md:text-[50px] m-0">VIDYA SARTHI</h1>
          <h2 className="text-[18px] md:text-[24px] my-[10px]">
            Welcome to Vidya Sarthi
          </h2>
          <p className="text-base md:text-lg">
            A digital bridge between students and teachers, where teachers share
            knowledge and students access notes with ease.
          </p>
        </div>

        {/* Right Section */}
        <div
          className="text-black rounded-[20px] w-[95%] sm:w-[350px] sm:px-0 bg-[linear-gradient(to_top,rgba(137,129,129,0.5),rgba(239,233,233,0.644))] "style={{padding:["20px"]}}
        >
          <h3 className="font-bold text-[18px] md:text-[20px] text-center md:text-left">
            Admin Login
          </h3>
          <hr className="w-1/2 text-left ml-0 mt-[10px]" />
          <p className="text-center md:text-left">Welcome onboard with us!</p>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 font-semibold text-sm mb-2">{error}</p>
          )}

          <form className="flex flex-col gap-[5px]" onSubmit={handleSubmit}>
            {/* Email */}
            <label htmlFor="email" className="text-sm md:text-base">
              Admin Email ID
            </label>
            <input
              className="bg-blue-100 h-[40px] font-bold rounded-[20px] placeholder:text-center"style={{paddingLeft:["15px"]}}
              type="email"
              id="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />

            {/* Password */}
            <label htmlFor="password" className="text-sm md:text-base">
              Password
            </label>
            <input
              className="bg-blue-100 border-2 h-[40px] font-bold rounded-[20px] placeholder:text-center"style={{paddingLeft:["15px"]}}
              type="password"
              id="password"
              name="password"
              value={admin.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            {/* Forgot Password */}
            <div className="extra text-center md:text-left">
              <a href="#" className="hover:text-yellow-300">
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              className="bg-amber-300 h-[40px] font-medium w-full md:w-78 rounded-[20px] mt-2"
              type="submit"
            >
              LogIn As Admin
            </button>

            {/* Student */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
              <p>Are You student?</p>
              <Link to="/student-login" className="font-black">
                Login as student
              </Link>
            </div>

            {/* Teacher */}
            <Link to="/teacher-login" className="block text-center mt-2">
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

