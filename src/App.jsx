import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

//import LogoutButton from './components/LogoutButton';
import SinglePostPage from "./pages/SinglePage";
import WritePost from "./pages/WritePost/WritePost.jsx";
import QuiltingPage from "./pages/Quilting.jsx";
import CrochetPage from "./pages/Crochet.jsx";
import DressPatternsPage from "./pages/DressPatternsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <SinglePostPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
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
