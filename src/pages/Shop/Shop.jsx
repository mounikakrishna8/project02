// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Products from "./components/Product.jsx";

import "./Shop.css";

export default function Shop() {
  // const [value, setValue] = useState(state?.title || "");
  // const [title, setTitle] = useState(state?.desc || "");
  // const [file, setFile] = useState(null);

  // const navigate = useNavigate();

  // const handleShop = async (event, BData) => {
  //   event.preventDefault();

  //   const res = await axios.post("/api/auth", BData);

  //   if (res.data.success) {
  //     navigate("/Shop");
  //   }
  // };
  return (
    <div className="shop">
      <div className="products"></div>
      <Header />
      {/* <img
        src="../assets/Images/shop/shop-img.jpg"
        alt="shop-image"
        className="home__image"
      /> */}
      <button className="filter-btn">filter</button>
      <div className="shop-row">
        <Products
          id="4903851"
          image="../assets/Images/shop/pink&blue hairclips.jpeg"
          title="Buttlerfly hair accessory"
          price={2.5}
          rating={4}
        />
        <Products
          id="4903851"
          image="../assets/Images/shop/red hairclips.jpeg
          "
          title="Buttlerfly hair accessory"
          price={2.5}
          rating={4}
        />
        <Products
          id="4903852"
          image="../assets/Images/shop/butterfly.jpeg
          "
          title="Buttlerfly hair accessory"
          price={2.5}
          rating={5}
        />
        <Products
          id="4903854"
          image="../assets/Images/shop/hairclips.jpeg"
          title="Buttlerfly hair accessory"
          price={2.5}
          rating={5}
        />
        <Products
          id="4903855"
          image="../assets/Images/shop/mixed color hairclips.jpeg
          "
          title="Buttlerfly hair accessory"
          price={2.5}
          rating={5}
        />
        <Products
          id="4903856"
          image="../assets/Images/shop/mixed color hairclips.jpeg
          "
          title="Buttlerfly hair accessory"
          price={2.5}
          rating={5}
        />
      </div>
      <Footer />
    </div>
  );
}
