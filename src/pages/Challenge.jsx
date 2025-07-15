import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paragraphs } from "../data/paragraphs";
import TypingBox from "../components/TypingBox";
import ProgressCircle from "../components/ProgressCircle";

export default function Challenge() {
  const navigate = useNavigate();
  const textareaRef = useRef(null);

  const [selectedLevel, setSelectedLevel] = useState("low");
  const [numParagraphs, setNumParagraphs] = useState(5);
  const [timePerParagraph, setTimePerParagraph] = useState(60);
  const [showSetup, setShowSetup] = useState(true);

  const [paragraphsList, setParagraphsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [intervalId, setIntervalId] = useState(null);
  const [results, setResults] = useState([]);

  const startChallenge = () => {
    const allParagraphs = paragraphs[selectedLevel];
    const selected = [...allParagraphs].sort(() => 0.5 - Math.random()).slice(0, numParagraphs);
    setParagraphsList(selected);
    setCurrentIndex(0);
    setResults([]);
    setTimeLeft(timePerParagraph);
    setShowSetup(false);
    setUserInput("");
    setTimeout(() => textareaRef.current?.focus(), 100);
    startTimer();
  };

  const startTimer = () => {
  const id = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(id);
        handleFinish(true); 
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
  setIntervalId(id);
};


  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const handleChange = (e) => setUserInput(e.target.value);

const handleFinish = (auto = false) => {
  clearInterval(intervalId);

  const paragraph = paragraphsList[currentIndex];
  const wordsTyped = userInput.trim().split(/\s+/).filter(Boolean).length;
  const timeTaken = timePerParagraph - timeLeft || 1;
  const wpm = Math.round((wordsTyped / timeTaken) * 60);
  const correctChars = userInput
    .split("")
    .filter((char, i) => char === paragraph[i]).length;
  const accuracy = Math.round((correctChars / paragraph.length) * 100);

  const result = {
    level: selectedLevel,
    wpm,
    accuracy,
    errors: paragraph.length - correctChars,
    date: new Date().toLocaleString(),
  };

  const updatedResults = [...results, result];
  setResults(updatedResults);

  const existing = JSON.parse(localStorage.getItem("typeSprintStats")) || [];

  // ✅ Go to results page on time up or last paragraph
  if (auto || currentIndex === paragraphsList.length - 1) {
    localStorage.setItem("typeSprintStats", JSON.stringify([...existing, ...updatedResults]));
    navigate("/results", { state: updatedResults });
    return;
  }

  // ✅ Otherwise: go to next paragraph
  setCurrentIndex((prev) => prev + 1);
  setUserInput("");
  setTimeLeft(timePerParagraph);
  setTimeout(() => textareaRef.current?.focus(), 100);
  startTimer();
};

  if (showSetup) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow rounded text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Setup Your Typing Challenge</h2>

        <div className="mb-4 text-left">
          <label className="block font-medium mb-1">Select Level:</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="low">Low (Beginner)</option>
            <option value="medium">Medium</option>
            <option value="high">High (Advanced)</option>
          </select>
        </div>

        <div className="mb-4 text-left">
          <label className="block font-medium mb-1">Number of Paragraphs:</label>
          <input
            type="number"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(Number(e.target.value))}
            min="1"
            max="20"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block font-medium mb-1">Time per Paragraph (seconds):</label>
          <input
            type="number"
            value={timePerParagraph}
            onChange={(e) => {
              const time = Number(e.target.value);
              setTimePerParagraph(time);
              setTimeLeft(time);
            }}
            min="10"
            max="300"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          onClick={startChallenge}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Start Challenge
        </button>
      </div>
    );
  }

  if (paragraphsList.length === 0) {
    return <div className="text-center mt-20 text-gray-600">Loading paragraphs...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 capitalize">Level: {selectedLevel}</h2>

      <div className="flex justify-end mb-4">
        <ProgressCircle timeLeft={timeLeft} totalTime={timePerParagraph} />
      </div>

      <TypingBox
        paragraph={paragraphsList[currentIndex]}
        userInput={userInput}
        onChange={handleChange}
        textareaRef={textareaRef}
      />

      <div className="flex justify-between mt-4">
        <p className="text-gray-500">
          Paragraph {currentIndex + 1} of {paragraphsList.length}
        </p>
        <button
          onClick={() => handleFinish(false)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          {currentIndex === paragraphsList.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
