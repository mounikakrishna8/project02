// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function QuiltingPage() {
  // const navigate = useNavigate();

  // const handleQuilting = async (event, QData) => {
  //   event.preventDefault();

  //   const res = await axios.post("/api/auth", QData);

  //   if (res.data.success) {
  //     navigate("/Quilt");
  //   }
  // };

  return (
    <>
      <Header />
      <h2>Quilting</h2>
      {/* <Quilting onQuilting={handleQuilting} /> */}
      <Footer />
    </>
  );
}
