import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 py-4 px-6 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400 tracking-wide hover:text-indigo-800 dark:hover:text-indigo-300 transition"
      >
        TypeSprint
      </Link>

      <div className="flex space-x-4">
        <Link
          to="/challenge"
          className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-100 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-600/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
        >
          Start
        </Link>

        <Link
          to="/dashboard"
          className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-100 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-600/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/about"
          className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-100 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-600/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
