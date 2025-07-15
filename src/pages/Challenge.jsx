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
    const all = paragraphs[selectedLevel];
    const selected = [...all].sort(() => 0.5 - Math.random()).slice(0, numParagraphs);

    setParagraphsList(selected);
    setCurrentIndex(0);
    setResults([]);
    setTimeLeft(timePerParagraph);
    setUserInput("");
    setShowSetup(false);
    setTimeout(() => textareaRef.current?.focus(), 100);
    startTimer();
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTimeLeft(prev => {
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

  useEffect(() => () => clearInterval(intervalId), [intervalId]);

  const handleChange = (e) => setUserInput(e.target.value);

  const handleFinish = (auto = false) => {
  clearInterval(intervalId);

  const paragraph = paragraphsList[currentIndex];
  if (!paragraph) {
    console.warn("Paragraph is undefined at index", currentIndex);
    return;
  }

  const wordsTyped = userInput.trim().split(/\s+/).filter(Boolean).length;
  const timeTaken = timePerParagraph - timeLeft || 1;
  const wpm = Math.round((wordsTyped / timeTaken) * 60);
  const correctChars = userInput.split("").filter((char, i) => char === paragraph[i]).length;
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

  if (auto || currentIndex === paragraphsList.length - 1) {
    localStorage.setItem("typeSprintStats", JSON.stringify([...existing, ...updatedResults]));
    navigate("/results", { state: updatedResults });
    return;
  }

  setCurrentIndex((prev) => prev + 1);
  setUserInput("");
  setTimeLeft(timePerParagraph);
  setTimeout(() => textareaRef.current?.focus(), 100);
  startTimer();
};


  // SETUP VIEW
  if (showSetup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
        <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-md">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
            Setup Your Typing Challenge
          </h2>

          <div className="mb-4">
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Select Level:
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
            >
              <option value="low">Low (Beginner)</option>
              <option value="medium">Medium</option>
              <option value="high">High (Advanced)</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Number of Paragraphs:
            </label>
            <input
              type="number"
              value={numParagraphs}
              onChange={(e) => setNumParagraphs(Number(e.target.value))}
              min="1"
              max="20"
              className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium text-gray-700 dark:text-gray-200 mb-1">
              Time per Paragraph (seconds):
            </label>
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
              className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            onClick={startChallenge}
            className="bg-indigo-600 w-full text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            🚀 Start Challenge
          </button>
        </div>
      </div>
    );
  }

  // LOADING FALLBACK
  if (paragraphsList.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Loading paragraphs...
      </div>
    );
  }

  // CHALLENGE VIEW
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Level: <span className="capitalize font-bold">{selectedLevel}</span>
        </h2>

        <div className="flex justify-end mb-6">
          <ProgressCircle timeLeft={timeLeft} totalTime={timePerParagraph} />
        </div>

        <TypingBox
          paragraph={paragraphsList[currentIndex]}
          userInput={userInput}
          onChange={handleChange}
          textareaRef={textareaRef}
        />

        <div className="flex justify-between mt-6 text-sm text-gray-500 dark:text-gray-300">
          <p>
            Paragraph {currentIndex + 1} of {paragraphsList.length}
          </p>
          <button
            onClick={() => handleFinish(false)}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition font-medium"
          >
            {currentIndex === paragraphsList.length - 1 ? "✅ Finish" : "Next ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}
