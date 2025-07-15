export default function TypingBox({ paragraph, userInput, onChange, textareaRef }) {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <p className="bg-white p-4 rounded-md shadow text-lg leading-relaxed text-gray-800 mb-4">
        {paragraph}
      </p>
      <textarea
        ref={textareaRef}
        className="w-full p-4 border border-gray-300 rounded-md shadow focus:outline-indigo-500"
        rows="6"
        value={userInput}
        onChange={onChange}
        placeholder="Start typing here..."
      />
    </div>
  );
}
