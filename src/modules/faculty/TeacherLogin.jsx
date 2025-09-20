import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const [teacher, setTeacher] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = teacher;

    // ✅ Dummy login bypass
    if (email === "teacher@gmail.com" && password === "1234") {
      const user = {
        email,
        role: "teacher",
        token: "dummy-token-5678",
      };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/faculty");
      return;
    }

    setError("Invalid credentials. Try teacher@gmail.com / 1234");

    /*
    // 🔁 Real backend login (commented)
    try {
      const response = await fetch("http://localhost:5000/teacher/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teacher),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      const user = {
        email: data.email,
        role: "teacher",
        token: data.token,
      };
      localStorage.setItem("teacherUser", JSON.stringify(user));
      navigate("/faculty");
    } catch (err) {
      setError(err.message);
    }
    */
  };

  return (
    <section className="mainheading">
      <aside className="admin-login">
        <div className="login-box">
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
              className="bg-amber-300 h-[40px] rounded-[20px] w-[12rem]"
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
