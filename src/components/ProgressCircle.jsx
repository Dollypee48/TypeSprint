import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressCircle({ timeLeft, totalTime }) {
  const percentage = Math.round((timeLeft / totalTime) * 100);
  const isLow = percentage <= 20;

  return (
    <div style={{ width: 80, height: 80 }}>
      <CircularProgressbar
        value={percentage}
        text={`${timeLeft}s`}
        styles={buildStyles({
          pathColor: isLow ? "#dc2626" : "#4f46e5",
          textColor: "#FFFFFF",
          trailColor: "#e5e7eb",
          textSize: "16px",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
}
