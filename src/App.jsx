import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Challenge from "./pages/Challenge";
import ResultsPage from "./pages/ResultsPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import About from "./pages/About"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
