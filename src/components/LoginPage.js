import React from "react";
import { FaUserLock } from "react-icons/fa"; 
import { BsSun, BsMoon } from "react-icons/bs";
import "../components/login.css"; 

const LoginPage = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.classList.replace("bs-sun", "bs-moon");
    } else {
      themeIcon.classList.replace("bs-moon", "bs-sun");
    }
  };

  return (
    <div className="login-container">
       <div className="theme-toggle-icon" onClick={toggleTheme}>
        <BsSun id="theme-icon" className="bs-sun" />
      </div>
      <div className="login-box">
        <FaUserLock className="login-icon" /> 
        <h2 className="bold-text">Secure Login</h2>
        <p>Welcome Back!</p>
    
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
