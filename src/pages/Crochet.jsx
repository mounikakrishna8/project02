import axios from "axios";
import { useNavigate } from "react-router-dom";
import Crochet from "../components/Crochet/Crochet.jsx";

export default function CrochetPage() {
  const navigate = useNavigate();
  const handleCrochet = async (event, CData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", CData);

    if (res.data.success) {
      navigate("/Crochet");
    }
  };
  return (
    <>
      <Crochet onCrochet={handleCrochet} />
    </>
  );
}
