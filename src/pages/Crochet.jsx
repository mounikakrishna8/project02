// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function CrochetPage() {
  // const navigate = useNavigate();
  // const handleCrochet = async (event, CData) => {
  //   event.preventDefault();

  //   const res = await axios.post("/api/auth", CData);

  //   if (res.data.success) {
  //     navigate("/Crochet");
  //   }
  // };
  return (
    <>
      <Header />
      <h2>crochet</h2>
      <Footer />
    </>
  );
}
