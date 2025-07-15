import { useNavigate } from "react-router-dom";

export default function LevelSelector() {
  const navigate = useNavigate();

  const handleSelect = (level) => {
    navigate(`/challenge/${level}`);
  };

  return (
    <div className="text-center mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Select Your Challenge Level</h2>
      <div className="flex justify-center gap-6 mt-6">
        {["low", "medium", "high"].map((level) => (
          <button
            key={level}
            onClick={() => handleSelect(level)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
