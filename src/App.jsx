import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import WritePost from "./pages/WritePost/WritePost.jsx";
import QuiltingPage from "./pages/quiltingpage/Quilting.jsx";
import CrochetPage from "./pages/crochetpage/Crochet.jsx";
import PatternsPage from "./pages/patternspage/PatternsPage.jsx";
import BlogPage from "./pages/blogpage/BlogPage.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart.jsx";
import "./App.css";
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
    path: "/Patterns",
    element: <PatternsPage />,
  },
  {
    path: "/Blog",
    element: <BlogPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
