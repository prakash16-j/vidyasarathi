import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let TeacherLogin = () => {
  const [teacher, setTeacher] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({ ...prev, [name]: value }));
  };

  // Dummy authentication function
  const authenticate = (email, password) => {
    const validEmail = "teacher@gmail.com";
    const validPassword = "teacher123";
    return email === validEmail && password === validPassword;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // --- Dummy authentication ---
    if (!authenticate(teacher.email, teacher.password)) {
      setError("Invalid email or password!");
      return;
    }

    // --- API authentication (optional) ---
    /*
    try {
      let response = await fetch("http://localhost:5000/teacher/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teacher),
      });

      if (!response.ok) throw new Error("Login failed");
      let data = await response.json();
      localStorage.setItem("teacherToken", data.token);
    } catch (err) {
      setError(err.message);
      return;
    }
    */

    // Redirect after login
    navigate("/teacher-profile");
  };

  return (
    <>
      <section className="mainheading">
        <aside className="admin-login">
          <div className="login-box">
            <h3 className="font-bold text-[20px]">Teacher Login</h3>
            <hr className="w-1/2 text-left ml-0 mt-[10px]" />
            <p>Welcome onboard with us!</p>

            {/* Error message */}
            {error && (
              <p className="text-red-500 font-semibold text-sm mb-2">{error}</p>
            )}

            <form className="flex flex-col gap-[5px]" onSubmit={handleSubmit}>
              {/* Email */}
              <label htmlFor="email">Enter Email ID</label>
              <input
                className="bg-blue-200 h-[40px] px-4 rounded-[20px]"
                type="email"
                id="email"
                name="email"
                value={teacher.email}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />

              {/* Password */}
              <label htmlFor="password">Password</label>
              <input
                className="bg-blue-200  h-[40px] px-4 rounded-[20px]"
                type="password"
                id="password"
                name="password"
                value={teacher.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />

              {/* Forgot Password */}
              <div className="extra">
                <a href="#">Forgot Password?</a>
              </div>

              {/* Submit */}
              <button
                className="bg-amber-300 h-[40px] rounded-[20px] w-[12rem]"
                type="submit"
              >
                LogIn
              </button>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
};

export default TeacherLogin;
