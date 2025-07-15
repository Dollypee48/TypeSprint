import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Challenge from "./pages/Challenge";
import ResultsPage from "./pages/ResultsPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/challenge/:level" element={<Challenge />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
