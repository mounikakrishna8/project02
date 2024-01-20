//import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DressPatterns from "../components/DressPatterns/DressPatterns.jsx";

export default function DressPatternsPage() {
  const navigate = useNavigate();

  const handleDressPatterns = async (event, DrData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", DrData);

    if (res.data.success) {
      navigate("/DressPatterns");
    }
  };
  return (
    <>
      <DressPatterns onPatterns={handleDressPatterns} />
    </>
  );
}
