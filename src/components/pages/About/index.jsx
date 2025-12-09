import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate(-1);

  const handleNavigate = () => {
    navigate(-1, { replace: true });
  };
  return (
    <div>
      <button
        className="p-2 border-2 bg-black text-white rounded-xl mt-2"
        onClick={handleNavigate}
      >
        Back to home
      </button>
    </div>
  );
}
