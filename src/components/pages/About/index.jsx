import { useNavigate } from "react-router-dom";
import Timer from "../../Timer";

export default function About() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };
  return (
    <div className="dark:bg-black min-h-screen">
      <button
        className="p-2 border-2 bg-black dark:bg-white dark:text-black text-white rounded-xl mt-2"
        onClick={handleNavigate}
      >
        Back to home
      </button>
      <Timer />
    </div>
  );
}
