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
        fill: false,
        borderColor: "rgb(99, 102, 241)",
        tension: 0.3,
      },
      {
        label: "Accuracy (%)",
        data: stats.map((entry) => entry.accuracy),
        fill: false,
        borderColor: "rgb(34, 197, 94)",
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Your Dashboard</h2>

      {stats.length === 0 ? (
        <p className="text-center text-gray-600">No typing history yet. Play a challenge first!</p>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={clearHistory}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Clear History
            </button>
          </div>

          <div className="bg-white p-6 rounded shadow mb-10">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Typing History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead className="bg-gray-100">
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
                    <tr key={index} className="text-center">
                      <td className="border px-4 py-2">{entry.date}</td>
                      <td className="border px-4 py-2 capitalize">{entry.level}</td>
                      <td className="border px-4 py-2">{entry.wpm}</td>
                      <td className="border px-4 py-2">{entry.accuracy}</td>
                      <td className="border px-4 py-2">{entry.errors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
