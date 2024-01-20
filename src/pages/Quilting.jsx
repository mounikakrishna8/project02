import axios from "axios";
import { useNavigate } from "react-router-dom";
import Quilting from "../components/Quilting/Quilting.jsx";

export default function QuiltingPage() {
  const navigate = useNavigate();

  const handleQuilting = async (event, QData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", QData);

    if (res.data.success) {
      navigate("/Quilt");
    }
  };

  return (
    <>
      <Quilting onQuilting={handleQuilting} />
    </>
  );
}
