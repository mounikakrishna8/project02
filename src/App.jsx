import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import SignUpPage from "./pages/signUpPage/SignUpPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";

//import LogoutButton from './components/LogoutButton';
// import SinglePostPage from "./pages/SinglePostPage.jsx";
import WritePost from "./pages/WritePost/WritePost.jsx";
import QuiltingPage from "./pages/Quilting.jsx";
import CrochetPage from "./pages/Crochet.jsx";
import DressPatternsPage from "./pages/DressPatternsPage.jsx";
import BlogPage from "./pages/blogpage/BlogPage.jsx";
import Shop from "./pages/Shop/Shop.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/WritePost",
    element: <WritePost />,
  },
  {
    path: "/Quilting",
    element: <QuiltingPage />,
  },
  {
    path: "/Crochet",
    element: <CrochetPage />,
  },
  {
    path: "/DressPatterns",
    element: <DressPatternsPage />,
  },
  {
    path: "/Blog",
    element: <BlogPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
