import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Crochet.css";
import CMainContent from "./Cmaincontent/CMainContent";

export default function CrochetPage() {
  return (
    <>
      <Header />
      <div className="crochet-page">
        <div className="main-container">
          <CMainContent />
        </div>
      </div>
      <Footer />
    </>
  );
}
