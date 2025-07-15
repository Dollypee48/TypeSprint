import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { paragraphs } from "../data/paragraphs";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";

export default function Challenge() {
  const { level } = useParams();
  const navigate = useNavigate();
  const paragraph = paragraphs[level];
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // Default 60 seconds
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start timer on first keystroke
  useEffect(() => {
    if (userInput.length === 1 && !started) {
      setStarted(true);
      const id = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(id);
            handleFinish();
          }
          return prev - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  }, [userInput]);

  // Clean up timer
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFinish = () => {
    clearInterval(intervalId);

    const wordsTyped = userInput.trim().split(/\s+/).length;
    const wpm = Math.round((wordsTyped / (60 - timeLeft)) * 60) || 0;

    const correctChars = userInput
      .split("")
      .filter((char, i) => char === paragraph[i]).length;
    const accuracy = Math.round((correctChars / paragraph.length) * 100);

    // Save result to localStorage
    const existing = JSON.parse(localStorage.getItem("typeSprintStats")) || [];
    const result = {
      level,
      wpm,
      accuracy,
      errors: paragraph.length - correctChars,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem("typeSprintStats", JSON.stringify([...existing, result]));

    // Navigate to results page with state
    navigate("/results", { state: result });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
        Level: {level}
      </h2>
      <Timer timeLeft={timeLeft} />
      <TypingBox
        paragraph={paragraph}
        userInput={userInput}
        onChange={handleChange}
      />
      <div className="text-right mt-4">
        <button
          onClick={handleFinish}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
