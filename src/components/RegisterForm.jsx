import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onCreate }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    //  logic for creating new account
    onCreate(e, {
      email: emailValue,
      password: passwordValue,
    });
  };
  return (
    <div className="auth">
      <h1>Create New Account</h1>
      <form  onSubmit={handleSubmit}>
        <div className="RegisterForm">
          <label>email:</label>
          <input
            type="text"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className="RegisterForm">
          <lable>Password:</lable>
          <input
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit">Submit</button>
        <p>Username or password is not valid!</p>
        <span >
          Do you have an account? <Link to="/login">Create New Account</Link>
        </span>
      </form>
    </div>
  );
}
