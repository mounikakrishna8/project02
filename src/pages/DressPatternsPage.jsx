//import React from 'react';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function DressPatternsPage() {
  // const navigate = useNavigate();

  // const handleDressPatterns = async (event, DrData) => {
  //   event.preventDefault();

  //   const res = await axios.post("/api/auth", DrData);

  //   if (res.data.success) {
  //     navigate("/DressPatterns");
  //   }
  // };
  return (
    <>
      <Header />
      {/* <DressPatterns onPatterns={handleDressPatterns} /> */}
      <h2>DressPattern</h2>
      <Footer />
    </>
  );
}
