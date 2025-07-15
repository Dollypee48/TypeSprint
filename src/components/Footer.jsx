import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto text-center border-t border-gray-700">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-400">TypeSprint</span>. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center space-x-6 text-sm">
          <Link
            to="/challenge"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            Start Challenge
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
