import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
          About TypeSprint
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          <span className="font-semibold text-indigo-600 dark:text-indigo-300">TypeSprint</span> is a modern typing
          speed and accuracy training tool built for everyone—from beginners to
          professionals. We help you improve your typing skills using level-based
          challenges, instant performance feedback, and detailed analytics.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          What Makes TypeSprint Special?
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            🧠 <span className="font-medium">Cognitive-level paragraph challenges</span> tailored to your skill level.
          </li>
          <li>
            📊 <span className="font-medium">Real-time analytics</span> with WPM, accuracy, and error tracking.
          </li>
          <li>
            🌗 <span className="font-medium">Dark mode support</span> for comfortable use anytime.
          </li>
          <li>
            💾 <span className="font-medium">Persistent data</span> stored in your browser so your history never gets lost.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Built With ❤️ Using:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>React.js + React Router</li>
          <li>Tailwind CSS for styling</li>
          <li>Chart.js for performance charts</li>
          <li>LocalStorage for saving your stats</li>
        </ul>

        <div className="text-center mt-10">
          <Link
            to="/challenge"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Start Typing Now
          </Link>
        </div>
      </div>
    </div>
  );
}
