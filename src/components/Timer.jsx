export default function Timer({ timeLeft }) {
  return (
    <div className="text-center text-xl font-semibold text-indigo-700 my-4">
      Time Left: {timeLeft}s
    </div>
  );
}
