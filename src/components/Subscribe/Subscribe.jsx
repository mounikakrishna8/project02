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
    <>
      <div className="newletter_container">
        <h2>NewsLetter</h2>
        <form onSubmit={handleSubmit}>
          <div className="news-letter">
            <label className="names">First Name:</label>
            <input
              type="text"
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
              placeholder="FirstName"
            />
          </div>
          <div className="news-letter">
            <label className="names">Last Name:</label>
            <input
              type="text"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
              placeholder="LastName"
            />
          </div>
          <div className="news-letter">
            <label className="names">Email:</label>
            <input
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Email"
            />
          </div>

          <button className="subscribe-button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
