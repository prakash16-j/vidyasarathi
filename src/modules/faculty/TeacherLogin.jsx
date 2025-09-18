import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let TeacherLogin = () => {
  const [teacher, setTeacher] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({ ...prev, [name]: value }));
  };

  const authenticate = (email, password) => {
    const validEmail = "teacher@gmail.com";
    const validPassword = "teacher123";
    return email === validEmail && password === validPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!authenticate(teacher.email, teacher.password)) {
      setError("Invalid email or password!");
      return;
    }

    navigate("/teacher-profile");
  };

  return (
    <section className="mainheading min-h-screen flex items-center justify-center p-4">
      <aside
        className="relative flex items-center justify-center md:justify-end w-full max-w-7xl h-[80vh] rounded-[40px] md:pr-20"
        style={{ backgroundImage: "url('/Books.png')", backgroundSize: "cover" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[350px] p-5 rounded-[20px] text-black md:top-[22vh] md:left-[100vh] md:-translate-x-0 md:-translate-y-0"
          style={{
            background:
              "linear-gradient(to top, rgba(137,129,129,0.5), rgba(239,233,233,0.644))",
          }}
        >
          <h3 className="font-bold text-[20px]">Teacher Login</h3>
          <hr className="w-1/2 text-left ml-0 mt-[10px]" />
          <p>Welcome onboard with us!</p>

          {error && (
            <p className="text-red-500 font-semibold text-sm mb-2">{error}</p>
          )}

          <form className="flex flex-col gap-[5px]" onSubmit={handleSubmit}>
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

            <label htmlFor="password">Password</label>
            <input
              className="bg-blue-200 h-[40px] px-4 rounded-[20px]"
              type="password"
              id="password"
              name="password"
              value={teacher.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            <div className="extra">
              <a href="#">Forgot Password?</a>
            </div>

            <button
              className="bg-amber-300 h-[40px] rounded-[20px] w-full mt-4 md:w-[12rem]"
              type="submit"
            >
              LogIn
            </button>
          </form>
        </div>
      </aside>
    </section>
  );
};

export default TeacherLogin;