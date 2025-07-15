import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white dark:bg-gray-900 shadow-sm">
        <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4 drop-shadow">
          Welcome to TypeSprint
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
          Sharpen your typing skills across difficulty levels. Measure speed, accuracy,
          and track your progress like a pro. Whether you're a beginner or a speed demon — TypeSprint has you covered.
        </p>
        <Link
          to="/challenge"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          🚀 Start Challenge
        </Link>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
            Why Use TypeSprint?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🎯 Multiple Difficulty Levels",
                desc: "Choose from beginner, intermediate, or advanced typing tests. Increase your challenge level as you improve.",
              },
              {
                title: "📊 Real-Time Stats & Progress",
                desc: "Instantly see your WPM, accuracy, and errors. All results are saved so you can track your performance over time.",
              },
              {
                title: "📈 Dashboard & Analytics",
                desc: "Visualize your growth with charts and history. Set goals and crush them as your typing skills level up.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">How It Works</h2>
          <ol className="text-left space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">1.</span> Click "Start
              Challenge" and pick your level.
            </li>
            <li>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">2.</span> Type the
              paragraph as fast and accurately as you can before time runs out.
            </li>
            <li>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">3.</span> View your
              WPM, accuracy, and stats on the results screen.
            </li>
            <li>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">4.</span> Go to your
              Dashboard to track your progress and push higher!
            </li>
          </ol>
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}
