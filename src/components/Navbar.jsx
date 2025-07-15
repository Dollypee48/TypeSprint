import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-wide">
        TypeSprint
      </Link>
      <div className="space-x-4">
        <Link to="/challenge" className="text-gray-700 hover:text-indigo-600 font-medium">
          Start
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
