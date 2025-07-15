import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-20 text-lg text-gray-600">
        No results to show. Please complete a challenge first.
      </div>
    );
  }

  const { level, wpm, accuracy, errors, date } = state;

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-md rounded-md text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Your Results</h2>

      <div className="space-y-4 text-lg text-gray-700">
        <p><strong>Level:</strong> {level.toUpperCase()}</p>
        <p><strong>WPM:</strong> {wpm}</p>
        <p><strong>Accuracy:</strong> {accuracy}%</p>
        <p><strong>Errors:</strong> {errors}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => navigate("/levels")}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          View Dashboard
        </button>
      </div>
    </div>
  );
}
