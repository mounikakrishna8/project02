import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Quilting.css";
export default function QuiltingPage() {
  return (
    <>
      <Header />
      <div className="quilting-page">
        <div className="main-container">
          <h2>Quilting</h2>
          <img src="../assets/Images/Qexibition1.jpeg" alt=""></img>
          <img src="../assets/Images/Qexibition2.jpeg" alt=""></img>
          <img src="../assets/Images/Qexibition3.jpeg" alt=""></img>
          <img src="../assets/Images/Qexibition4.jpeg" alt=""></img>
          <img src="../assets/Images/Qexibition5.jpeg" alt=""></img>
        </div>
      </div>

      <Footer />
    </>
  );
}
