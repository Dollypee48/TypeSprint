export default function TypingBox({ paragraph, userInput, onChange, textareaRef }) {
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      {/* Display Paragraph */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-l-4 border-indigo-400 dark:border-indigo-500 p-5 rounded-lg shadow-sm mb-4">
        <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed tracking-wide">
          {paragraph}
        </p>
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        className="w-full p-4 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 text-base leading-relaxed border-2 border-indigo-200 dark:border-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500"
        rows="6"
        value={userInput}
        onChange={onChange}
        placeholder="📝 Start typing here..."
        spellCheck={false}
        aria-label="Typing input field"
      />
    </div>
  );
}
