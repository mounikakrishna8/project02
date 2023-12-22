import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    // login logic
    onLogin(e, {
      email: emailValue,
      password: passwordValue,
    });
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form  onSubmit={handleSubmit}>
        <div className="loginForm">
          <label>email:</label>
          <input
            type="text"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className="loginForm">
          <lable>Password:</lable>
          <input
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit">Login</button>
        <p>Username or password is not valid!</p>
        <span >
          Do not have an account? <Link to="/register">Create New Account</Link>
        </span>
      </form>
    </div>
  );
}
