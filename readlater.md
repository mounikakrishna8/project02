# src/

## |--components/

### |--BlogList.js

### |--BlogPost.js

### |--NavBar.js

### |--Login.js

### |--CreatePost.js

### |--App.js // Set Up basic Routing by using React Router

### |--index.js

## Steps I followed in this project

### create ViteApp

#### remove all the boiler plate code

#### import some font styles from google font and paste them in index.html page after meta

#### removed boilerplate code from index.js and App.js

#### gave style in index.html with margin: 0 to avoid the space in the left side of the page

#### rendered sample data on the page

## working on individual components

### TopBar

#### making top bar as sticky bar by adding "position:sticky; top:0" in topbar.css file that means it's gonna visible when you scroll down to the page

#### make it flex "display:flex"to add all the elements horizontal, then center them "align-item: center", added font-family

#### used fontawesome to import some social media icons to the topbar, used font awesome cdn link in index.html

#### used fontawesome search icon in topright element

#### styled the navbar using css

### Project Setup Steps

#### **Create a New Vite App:**

-- Initialize the new Vite application using the appropriate command, such as `npm create vite@latest`.

#### **Clean Up Boilerplate Code:**

-- Remove any unnecessary files and code that came with the Vite template to start with a clean slate.

#### **Import Google Fonts:**

-- Add the desired Google Font styles to the `index.html` file by including the `<link>` tag in the `<head>` section after the `<meta>` tags.

#### **Simplify Entry Point Files:**

-- Clear out boilerplate content from `index.js` and `App.js`, leaving only the necessary starting code.

#### **Set Global Style Rules:**

-- Include global CSS rules, like `margin: 0;` to the `body` or `*` selector in the `style` tag within `index.html`, to remove unwanted default margins.

#### **Display Sample Data:**

-- Begin rendering sample data on the page, ensuring that you have the elements and components in place for future data-driven development.

<!--

import { useContext, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [redirect, setRedirect] = useState(false);
  // const {setUserInfo} = useContext(userContext);

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

        <span>
          Do not have an account? <Link to="/register">Create New Account</Link>
        </span>
      </form>
    </div>
  );
} -->

#

# Stripe

  <!-- req.body.items

[{
id: 1,
quantity:3
}]
stripe wants[
{
price:1,
quantity:3
}

] -->

<!-- let lineItems =[];
stripe call items as line Items for their api calls -->

<!-- if we are sending the items through the body we can access them as follows

const items = req.body.items;

for each item we are going to look at the item that's what this call back functin is
items.forEach((item)=>{lineItems.push({price:item.id,quantity:item.quantity})})


 we can initialize the session for stripe as follows

  const session = await Stripe.checkout.session.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://http://localhost:4090/success",
    cancel_url: "http://localhost:4090/cancel"
  });

});

 the below code block allow us to send an object to the front end and its going to be an object with one property ie the 'url:session.url' this allows us to show the user the session that stripe created for them (i.e., from the sesssion code block) thats how stripe gets involved.
res.send(JSON.stringify({
  url: session.url
})) -->
