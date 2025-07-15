import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white shadow">
        <h1 className="text-5xl font-bold text-indigo-700 mb-4">Welcome to TypeSprint</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Sharpen your typing skills across difficulty levels. Measure speed, accuracy,
          and track your progress like a pro. Whether you're a beginner or a speed demon — TypeSprint has you covered.
        </p>
        <Link
          to="/challenge"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          Start Challenge
        </Link>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Use TypeSprint?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎯 Multiple Difficulty Levels</h3>
              <p>
                Choose from beginner, intermediate, or advanced typing tests. Increase your challenge level as you improve.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">📊 Real-Time Stats & Progress</h3>
              <p>
                Instantly see your WPM, accuracy, and errors. All results are saved so you can track your performance over time.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">📈 Dashboard & Analytics</h3>
              <p>
                Visualize your growth with charts and history. Set goals and crush them as your typing skills level up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
          <ol className="text-left space-y-6 text-lg text-gray-700">
            <li><span className="font-bold text-indigo-600">1.</span> Click "Start Challenge" and pick your level.</li>
            <li><span className="font-bold text-indigo-600">2.</span> Type the paragraph as fast and accurately as you can before time runs out.</li>
            <li><span className="font-bold text-indigo-600">3.</span> View your WPM, accuracy, and stats on the results screen.</li>
            <li><span className="font-bold text-indigo-600">4.</span> Go to your Dashboard to track your progress and push higher!</li>
          </ol>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 mt-auto text-center">
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">TypeSprint</span>. All rights reserved.
        </div>
        <div className="mt-2 space-x-4">
          <Link to="/dashboard" className="hover:underline text-gray-300">
            Dashboard
          </Link>
          <Link to="/challenge" className="hover:underline text-gray-300">
            Start Challenge
          </Link>
        </div>
      </footer>
    </div>
  );
}
