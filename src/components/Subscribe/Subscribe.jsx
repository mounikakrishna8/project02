import { useState } from "react";

import "./Subscribe.css";
export default function Subscribe({ onSubscribe }) {
  const [emailValue, setEmailValue] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const handleSubmit = (e) => {
    // subscription logic
    onSubscribe(e, {
      email: emailValue,
      userfirst: userFirstName,
      userlast: userLastName,
    });
  };

  return (
    <div className="newletter_container">
      <h3>NewsLetter</h3>

      <form onSubmit={handleSubmit}>
        <div className="newsletter">
          <lable>First Name:</lable>
          <input
            type="text"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            placeholder="FirstName"
          />
        </div>
        <div className="newsletter">
          <lable>Last Name:</lable>
          <input
            type="text"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            placeholder="LastName"
          />
        </div>
        <div className="newsletter">
          <label>Email:</label>
          <input
            type="text"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Email"
          />
        </div>

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LoginForm.css";

// export default function Login({ onLogin }) {
//   const [emailValue, setEmailValue] = useState("");
//   const [passwordValue, setPasswordValue] = useState("");

//   const handleSubmit = (e) => {
//     // login logic
//     onLogin(e, {
//       email: emailValue,
//       password: passwordValue,
//     });
//   };
//   return (
//     <div className="auth">
//       <h1>Login</h1>
//
//     </div>
