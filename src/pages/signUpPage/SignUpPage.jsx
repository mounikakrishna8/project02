import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUpPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signup(e) {
    e.preventDefault();
    const userData = { username: username, password: password };
    console.log(userData);

    const response = await axios.post(
      "http://localhost:4090/api/signUp",
      userData
    );
    console.log("Test1", res);
    if (response.status === 200) {
      // console.log(res.data);
      alert("signedUp successfully");
    } else {
      alert("registration failed");
    }
  }
  return (
    <>
      <Header />
      <div className="signup">
        <h1>Create New Account</h1>
        <form onSubmit={signup}>
          <div className="signup-form">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div className="signup-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <span>
            Do you have an account? <Link to="/login">Login</Link>
          </span>
          <button className="signup-button" type="submit">
            SignUp
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
