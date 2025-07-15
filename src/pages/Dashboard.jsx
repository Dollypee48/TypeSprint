import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function Dashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem("typeSprintStats")) || [];
    setStats(storedStats);
  }, []);

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to delete all your typing history?")) {
      localStorage.removeItem("typeSprintStats");
      setStats([]);
    }
  };

  const chartData = {
  labels: stats.map((entry) => entry.date),
  datasets: [
    {
      label: "WPM",
      data: stats.map((entry) => entry.wpm),
      borderColor: "#6366f1", // indigo-500
      backgroundColor: "#6366f1",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#6366f1",
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
    },
    {
      label: "Accuracy (%)",
      data: stats.map((entry) => entry.accuracy),
      borderColor: "#10b981", // green-500
      backgroundColor: "#10b981",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#10b981",
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
    },
  ],
};

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", labels: { color: "#4B5563" } },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(
          ...stats.map((e) => e.wpm || 0),
          ...stats.map((e) => e.accuracy || 0)
        ) + 10,
        ticks: {
          color: "#6B7280", // text-gray-500
        },
      },
      x: {
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-8 text-center">
          📊 Typing Dashboard
        </h2>

        {stats.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
            No typing history yet. Play a challenge first!
          </p>
        ) : (
          <>
            <div className="flex justify-end mb-6">
              <button
                onClick={clearHistory}
                className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
              >
                Clear History
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-10">
              <Line data={chartData} options={chartOptions} />
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Typing History
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium">
                    <tr>
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Level</th>
                      <th className="border px-4 py-2">WPM</th>
                      <th className="border px-4 py-2">Accuracy (%)</th>
                      <th className="border px-4 py-2">Errors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.map((entry, index) => (
                      <tr
                        key={index}
                        className="text-center even:bg-gray-50 dark:even:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-600/10 transition"
                      >
                        <td className="border px-4 py-2 text-gray-700 dark:text-gray-200">{entry.date}</td>
                        <td className="border px-4 py-2 capitalize text-gray-700 dark:text-gray-200">{entry.level}</td>
                        <td className="border px-4 py-2 text-gray-700 dark:text-gray-200">{entry.wpm}</td>
                        <td className="border px-4 py-2 text-gray-700 dark:text-gray-200">{entry.accuracy}</td>
                        <td className="border px-4 py-2 text-gray-700 dark:text-gray-200">{entry.errors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
