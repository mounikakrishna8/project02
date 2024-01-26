import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUpPage.css";

export default function SignUpPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email: emailValue, password: passwordValue };
    console.log(userData);

    const res = await axios.post("/api/signUp", userData);
    console.log("Test1", res);
    if (res.data.success) {
      console.log(res.data);
      navigate("/signUp");
    }
  };

  return (
    <div className="auth">
      <h1>Create New Account</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
        <span>
          Do you have an account? <Link to="/login">Create New Account</Link>
        </span>
      </form>
    </div>
    // <Register onLogin={handleCreate} />
  );
}
