import { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import "./LoginPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  async function login(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4090/api/login",
        data: {
          username,
          password,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        // update redux
        dispatch({ type: "USER_LOG_IN", payload: response.data.username });

        setRedirect(true);
        // console.log(state);
      }
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        alert("wrong credentials");
      }
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={login}>
          <div className="loginForm">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="loginForm">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <span>
            Do not have an account?{" "}
            <Link to="/register">Create New Account</Link>
          </span>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
