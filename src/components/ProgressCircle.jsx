import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressCircle({ timeLeft, totalTime }) {
  const percentage = Math.round((timeLeft / totalTime) * 100);

  return (
    <div style={{ width: 80, height: 80 }}>
      <CircularProgressbar
        value={percentage}
        text={`${timeLeft}s`}
        styles={buildStyles({
          pathColor: percentage <= 20 ? "#dc2626" : "#4f46e5", // red if low
          textColor: "#111827",
          trailColor: "#e5e7eb",
          textSize: "16px",
        })}
      />
    </div>
  );
}
