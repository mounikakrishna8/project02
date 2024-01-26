import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [redirect, setRedirect] = useState(false);
  // const {setUserInfo} = useContext(userContext);
  const navigate = useNavigate();

  //this asynchronous function passed to the Login component as a prop(onLogin). It will be called once the user attempts to login, typically when submitting the login form.
  const handleSubmit = async (e) => {
    e.preventDefault(); //this prevents the default behavior of the form submission, which would normally causes a page reload.
    const userData = { email: emailValue, password: passwordValue };

    // using axios to send a POST request to the (/api/auth) endpoint with 'userData'  containing user credentials. This is an asynchronous operation, so it uses await to pause execution until the response is returned from the server.
    const res = await axios.post("/api/auth", userData);

    //if (res.data.success): After receiving the response, it checks if there's a success property in the returned data, which indicates that the login attempt was successful
    if (res.data.success) {
      navigate("/"); //navigate("/"): If the login is successful, it uses the navigate function to redirect the user to the /me route.
      setRedirect(true);
    } else {
      alert("wrong credentials");
    }
  };

  if (redirect) {
    return <Link to="/"></Link>;
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <span>
          Do not have an account? <Link to="/register">Create New Account</Link>
        </span>
      </form>
    </div>
  );
}
