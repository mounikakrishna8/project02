import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Products from "./components/Product.jsx";

import "./Shop.css";
const products = [
  {
    id: "1",
    image: "../assets/Images/shop/pink&blue hairclips.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "2",
    image: "../assets/Images/shop/butterfly.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "3",
    image: "../assets/Images/shop/baby headbands.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "4",
    image: "../assets/Images/shop/butterfly1.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "5",
    image: "../assets/Images/shop/butterfly2.jpeg",
    title: "",
    price: 8,
    rating: 4,
  },
  {
    id: "6",
    image: "../assets/Images/shop/gray cat.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "7",
    image: "../assets/Images/shop/gray&blue cats.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "8",
    image: "../assets/Images/shop/mermaid frozen.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "9",
    image: "../assets/Images/shop/octopus-1.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "10",
    image: "../assets/Images/shop/octopus-2.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "11",
    image: "../assets/Images/shop/shark1.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "12",
    image: "../assets/Images/shop/shark2.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "13",
    image: "../assets/Images/shop/stingray1.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "14",
    image: "../assets/Images/shop/turtle.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "15",
    image: "../assets/Images/shop/Yoda1.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
  {
    id: "16",
    image: "../assets/Images/shop/Yoda2.jpeg",
    title: "",
    price: 2.5,
    rating: 4,
  },
];
export default function Shop() {
  return (
    <>
      <Header />

      <div className="shop">
        <div className="products"></div>

        <div className="shop-row">
          {products.map((product) => (
            <Products key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
