import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !Array.isArray(state)) {
    return (
      <div className="text-center mt-20 text-lg text-gray-600 dark:text-gray-300">
        No results to show. Please complete a challenge first.
      </div>
    );
  }

  const results = state;

  const totalWPM = Math.round(results.reduce((sum, r) => sum + r.wpm, 0) / results.length);
  const totalAccuracy = Math.round(results.reduce((sum, r) => sum + r.accuracy, 0) / results.length);
  const totalErrors = results.reduce((sum, r) => sum + r.errors, 0);
  const level = results[0]?.level || "N/A";
  const date = results[results.length - 1]?.date;

  return (
    <div className="max-w-xl mx-auto mt-16 px-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-6 px-4 text-white text-center">
          <h2 className="text-3xl font-bold mb-1">🏁 Typing Challenge Results</h2>
          <p className="text-sm opacity-90">Challenge Summary | {date}</p>
        </div>

        {/* Stats */}
        <div className="p-6 space-y-5 text-gray-700 dark:text-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500 dark:text-gray-400">Level:</span>
            <span className="uppercase font-bold text-indigo-700 dark:text-indigo-400">{level}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500 dark:text-gray-400">Average WPM:</span>
            <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">{totalWPM}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500 dark:text-gray-400">Average Accuracy:</span>
            <span className="font-bold text-lg text-green-600 dark:text-green-400">{totalAccuracy}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500 dark:text-gray-400">Total Errors:</span>
            <span className="font-bold text-lg text-red-500 dark:text-red-400">{totalErrors}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 px-6 pb-6 mt-4">
          <button
            onClick={() => navigate("/challenge")}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition font-medium"
          >
            🔁 Try Again
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition font-medium"
          >
            📊 View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
