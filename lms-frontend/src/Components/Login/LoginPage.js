import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../Image/logo-svcc.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    student_number: "",
    email: "",
    password: "",
    username: "",
    phone_number: "",
    address: "",
    year_level: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add-student",
        formData,
      );
      message.success("Sign up successful!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/user-login", { username, password })
      .then((response) => {
        const { user_id, full_name, token } = response.data.user;

        localStorage.setItem(
          "user",
          JSON.stringify({
            full_name,
            user_id,
            token,
          })
        );

        navigate("/dashboard");
      })
      .catch((error) => {
        message.error(
          "Login failed. Please check your credentials and try again."
        );
      });
  };

  return (
    <div className="main-container">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form>
            <br></br>
            <input
              type="full_name"
              placeholder="Full Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            ></input>
            <input
              type="student_number"
              placeholder="Student Number"
              name="student_number"
              value={formData.student_number}
              onChange={handleChange}
              required
            ></input>
            <input
              type="username"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            ></input>
            <input
              type="phone_number"
              placeholder="Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            ></input>
            <input
              type="address"
              placeholder="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></input>
            <select
              name="year_level"
              value={formData.year_level}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Year Level</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <img className="logo" src={logo} />
            <br></br>
            <div className="social-icons">
              <a href="#" className="icon"></a>
            </div>

            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            ></input>
            <a href="#">Forget Your Password?</a>
            <button onClick={handleSignIn}>Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>SVCC Library System</h1>
              <p>Enter your personal details to use all the site features </p>
              <button className="hidden" id="login" onClick={handleClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Mission</h1>
              <p>
                To produce patriotic graduates ready for the knowledge-based
                global economy
              </p>
              <h1>Vision</h1>
              <p>
                To be the leading privately managed integrated community college
                in Laguna recognize for its adherence to academic excellence,
                environmental sustainability, citizenship and overall national
                development by 2030
              </p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
