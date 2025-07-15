import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">Welcome to TypeSprint</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Sharpen your typing skills across levels — from beginner to expert. Track your speed,
        accuracy, and progress over time. Ready to level up your typing?
      </p>
      <Link
        to="/levels"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
      >
        Start Challenge
      </Link>
    </div>
  );
}
